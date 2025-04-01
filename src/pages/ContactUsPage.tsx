import styled from "styled-components";
import { Box } from '@mui/material';
import Layout from "../components/Layout/Layout"
import ContactForm from "../components/ContactForm/ContactForm";

const ContactUsPage = () => {
  return (
    <Layout>
      <PageSection>
        <SectionContainer>
          <ContactForm />
        </SectionContainer>
      </PageSection>
    </Layout>
  )
}

const PageSection = styled(Box)`
  padding-top: 112px;
  padding-bottom: 40px;
  min-height: 84.3vh;

  @media (max-width: 576px) {
    padding-top: 170px;
  }
`;

const SectionContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline: auto;
  padding: 0 20px;
  width: min(100%, 1320px);
`;


export default ContactUsPage
