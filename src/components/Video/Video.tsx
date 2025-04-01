import { FC, useState } from "react";
import { ReactSVG } from "react-svg";
import YouTube from "react-youtube";
import styled from "styled-components";
import playIcon from "../../assets/icon-play.svg";
import { Box } from "@mui/material";

interface VideoProps {
  videoId: string
}

interface VideoThumbnailProps {
  id: string;
}

const Video: FC<VideoProps> = ({ videoId }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded ? (
        <VideoThumbnail id={videoId}>
          <PlayButton 
            aria-label="Get rickrolled"
            onClick={() => {
              setIsLoaded(true);
            }}
          >
            <ReactSVG src={playIcon} />
          </PlayButton>
        </VideoThumbnail>
      ) : (
        <YouTube
          videoId={videoId}
          opts={{
            height: '390',
            width: "100%",
            playerVars: {
              autoplay: 1,
            },
          }}
        />
      )}
    </>
  );
}

const VideoThumbnail = styled(Box)<VideoThumbnailProps>`
  width: 100%;
  height: 100%;
  background: ${({ id }) => `url(https://img.youtube.com/vi/${id}/hqdefault.jpg) no-repeat center center`};
  background-size: cover;
  cursor: pointer;
`;

const PlayButton = styled.button`
  position: relative;
  left: 50%;
  top: 50%;
  width: 64px;
  height: 64px;
  transform: translate(-50%, -50%);
`;


export default Video;
