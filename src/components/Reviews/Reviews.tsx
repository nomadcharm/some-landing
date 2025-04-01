import { FC } from "react"
import { ReviewModel } from "../../types/types"
import ReviewCard from "../ReviewCard/ReviewCard"
import styled from "styled-components"
import ContactButton from "../ContactButton/ContactButton"
import { Box } from "@mui/material"

interface ReviewsProps {
  reviews: ReviewModel[]
}

const Reviews: FC<ReviewsProps> = ({ reviews }) => {
  return (
    <ReviewsSection>
      <ReviewsContainer>
        <ReviewsTitle>Also a very important title</ReviewsTitle>
        <ReviewsList>
          {
            reviews && reviews.map((review) => {
              return <ReviewsListItem key={review.id}>
                <ReviewCard review={review} />
              </ReviewsListItem>
            })
          }
        </ReviewsList>
      <ContactButton variant="primary" />
      </ReviewsContainer>
    </ReviewsSection>
  )
}

const ReviewsSection = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #6ca4e0;
`;

const ReviewsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: space-between;
  margin-inline: auto;
  padding: 0 20px;
  width: min(100%, 1320px);
`;

const ReviewsTitle = styled.h2`
  text-transform: uppercase;
  text-shadow: 0px 4px #f70b3a;
  color: #f5f5f5;
`;

const ReviewsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ReviewsListItem = styled.li`
  display: flex;
  min-height: 150px;
`;

export default Reviews;
