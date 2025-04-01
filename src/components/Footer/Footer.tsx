import styled from "styled-components";
import { getCurrentYear } from "../../utils/getCurrentYear";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterCopyright>
          <span>Some Company @ </span>
          <span>{getCurrentYear()}</span>
        </FooterCopyright>
      </FooterContainer>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #96b6d8;
    &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 3px;
    background-color: #1f5792;
  }
`;

const FooterContainer = styled(Box)`
  margin-inline: auto;
  padding: 0 40px;
  width: min(100%, 1320px);
  text-align: center;
`;

const FooterCopyright = styled.p`
  font-size: 18px;
  font-style: italic;
`;

export default Footer;
