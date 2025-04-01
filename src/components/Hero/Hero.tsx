import styled from "styled-components";
import { Box} from "@mui/material";
import { getVideoId } from "../../utils/getVideoIs";
import Video from "../Video/Video";

const Hero = () => {
  const videoIdResult = getVideoId("https://www.youtube.com/watch?v=dQw4w9WgXcQ");

  if (videoIdResult === null) {
    throw new Error("Что-то пошло не так...");
  }

  const videoId: string = videoIdResult;

  return (
    <HeroSection>
      <HeroContainer>
        <HeroContent>
          <HeroTitle>
            Most important title on the page
          </HeroTitle>
          <HeroDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis,
            leo et condimentum ultricies, sem urna convallis metus,
            vel suscipit nibh lacus tincidunt ante...
          </HeroDescription>
        </HeroContent>
        <HeroVideoWrapper>
          <Video videoId={videoId} />
        </HeroVideoWrapper>
      </HeroContainer>
    </HeroSection>
  )
}

const HeroSection = styled.section`
  padding: 40px 0;
  padding-top: 112px;
  background-color: #f4fafe;

  @media (max-width: 576px) {
    padding-top: 150px;
  }
`;

const HeroContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  margin-inline: auto;
  padding: 0 40px;
  width: min(100%, 1320px);

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const HeroContent = styled(Box)`
  flex: 1;
  max-width: 40%

  @media (max-width: 1024px) {
    max-width: 60%;
  }
`;

const HeroTitle = styled.h1`
  margin-bottom: 10px;
  max-width: 75%;
  font-size: 42px;
  color: #001832;
  text-shadow: 0px -3px #81a8ca;

  @media (max-width: 1200px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    max-width: 90%;
  }
`;

const HeroDescription = styled.p`
  font-size: 18px;
`;

const HeroVideoWrapper = styled(Box)`
  width: 640px;
  height: 390px;

  @media (max-width: 1200px) {
    width: 540px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 576px) {
    margin-left: -40px;
    margin-right: -40px;
    width: calc(100% + 80px);
  }
`;


export default Hero;
