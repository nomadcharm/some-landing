import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Button, Box } from '@mui/material';
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import { FormDataModel } from "../../types/types";
import contactImg from "../../assets/contact-form.avif";

const ContactForm = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const { control, handleSubmit, formState: { errors } } = useForm<FormDataModel>({
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit: SubmitHandler<FormDataModel> = async (data) => {
    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(result.message);
        setIsSubmitted(true);
      } else {
        setMessage(result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong...");
    }
  };

  const handleBackToMain = (): void => {
    navigate("/");
  };

  if (isSubmitted || message) {
    return (
      <SuccessMessageWrapper>
        <h2>{message}</h2>
        <StyledButton onClick={handleBackToMain} variant="contained">Go Back to Main</StyledButton>
      </SuccessMessageWrapper>
    );
  }

  return (
    <StyledFormWrapper>
      <StyledImageContainer>
        <img src={contactImg} alt="Contact Us" />
      </StyledImageContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: 'Name is required' }}
            render={({ field }) => (
              <CustomTextField
                {...field}
                label="Name"
                variant="outlined"
                error={!!errors.name}
                helperText={errors.name ? (errors.name.message as string) : ''}
                fullWidth
              />
            )}
          />
        </FormField>
        <FormField>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Invalid email address'
              }
            }}
            render={({ field }) => (
              <CustomTextField
                {...field}
                label="Email"
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email ? (errors.email.message as string) : ''}
                fullWidth
              />
            )}
          />
        </FormField>
        <FormField>
          <Controller
            name="message"
            control={control}
            defaultValue=""
            rules={{ required: 'Message is required' }}
            render={({ field }) => (
              <CustomTextField
                {...field}
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                error={!!errors.message}
                helperText={errors.message ? (errors.message.message as string) : ''}
                fullWidth
              />
            )}
          />
        </FormField>
        <StyledButton type="submit" variant="contained">Submit</StyledButton>
      </StyledForm>
    </StyledFormWrapper>
  );
};


const SuccessMessageWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledFormWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 20px;
  background-color: #cfe7fe80;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const StyledImageContainer = styled(Box)`
  flex: 1;
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledForm = styled("form")`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FormField = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
`;

const CustomTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    background-color: white;
    border-radius: 20px;
    
    & fieldset {
      border-color: #3f51b5;
    }
    &:hover fieldset {
      border-color: #1e88e5;
    }
    &.Mui-focused fieldset {
      border-color: #1976d2;
    }
  }
  
  & .MuiInputLabel-root {
    color: #3f51b5;
  }
  
  & .MuiInputLabel-root.Mui-focused {
    color: #1976d2;
  }
  
  & .MuiFormHelperText-root {
    color: #f70b3a;
  }
`;

export default ContactForm;