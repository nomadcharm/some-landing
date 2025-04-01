import styled from "styled-components"
import ContactButton from "../ContactButton/ContactButton";
import { Box } from "@mui/material";

const CTA = () => {
  return (
    <CTASection>
      <CTAContainer>

      <CTABanner>
      <CTATitle>
        Less important title
      </CTATitle>
      <ContactButton variant="secondary" />

      </CTABanner>

      </CTAContainer>
    </CTASection>
  )
}

const CTASection = styled('section')`
  padding-top: 60px;
  padding-bottom: 140px;
  background-color: #f4fafe;
`;

const CTAContainer = styled(Box)`
  margin-inline: auto;
  padding: 0 40px;
  width: min(100%, 1320px);
  text-align: center;
`;

const CTABanner = styled(Box)`
  justify-self: center;
  padding: 30px;
  border-radius: 30px;
  width: 60%;
  background-color: #6ca4e0;
  background-image: url("https://media.istockphoto.com/id/1396069049/vector/abstract-geometric-background-with-triangle-shape-pattern.jpg?s=612x612&w=0&k=20&c=8D-F3tXFiBumD_l236mwTeZHrqWy0HBNOrQn49LTWbY=");

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CTATitle = styled("h3")`
  margin-bottom: 20px;
  font-size: 20px;
  text-transform: uppercase;
  color: #f5f5f5;
`;

export default CTA;
