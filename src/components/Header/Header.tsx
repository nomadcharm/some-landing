import styled from "styled-components";
import ContactButton from "../ContactButton/ContactButton";
import { Box } from "@mui/material";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo href="/" >Some Company</Logo>
        <ContactButton variant="primary" />
      </HeaderContainer>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: fixed;
  z-index: 100;
  padding: 20px 0;
  width: 100%;
  background-color: #96b6d8;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background-color: #1f5792;
  }
`;

const HeaderContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-inline: auto;
  padding: 0 20px;
  width: min(100%, 1320px);

  @media (max-width: 576px) {
    flex-direction: column;
    padding: 10px 20px;
    align-items: flex-start;
  }
`;

const Logo = styled.a`
  font-size: 20px;
  font-weight: 700;
  color: #1f5792;

  @media (max-width: 576px) {
    margin-bottom: 20px;
  }
`;

export default Header;
