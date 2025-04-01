import { FC } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

interface ContactButtonProps {
  variant: "primary" | "secondary";
}

const ContactButton: FC<ContactButtonProps> = ({ variant }) => {
  const navigate = useNavigate();

  const handleCClick = () => {
    navigate("/contact-us");
  };

  return (
    <StyledContactButton variant={variant} onClick={handleCClick}>
      Contacts Us
    </StyledContactButton>
  )
}

const StyledContactButton = styled("button")<{ variant: "primary" | "secondary" }>`
  outline: none;
  padding: 8px 24px;
  border-top-left-radius: ${({ variant }) => (variant === "primary" ? "8px" : "0")};
  border-bottom-right-radius: ${({ variant }) => (variant === "primary" ? "8px" : "0")};
  font-weight: 600;
  color: #001832;
  background-color: white;
  box-shadow: 3px 3px 0px 0px #001832;
  box-shadow: ${({ variant }) => (variant === "primary" ? "3px 3px 0px 0px #001832" : "none")};
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  &:hover {
    color: ${({ variant }) => (variant === "primary" ? "#1f5792" : "white")};
    background-color: ${({ variant }) => (variant === "primary" ? "" : "#1f5792")};
    box-shadow: ${({ variant }) => (variant === "primary" ? "3px -3px 0px 0px #1f5792" : "none")};

  },
  &:focus {
    color: ${({ variant }) => (variant === "primary" ? "#1f5792" : "white")};
    background-color: ${({ variant }) => (variant === "primary" ? "" : "#1f5792")};
    box-shadow: ${({ variant }) => (variant === "primary" ? "3px -3px 0px 0px #1f5792" : "none")};
  }
`;

export default ContactButton;
