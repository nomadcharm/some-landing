import { FC } from "react";
import { ReviewModel } from "../../types/types";
import styled from "styled-components";

interface ReviewCardProps {
  review: ReviewModel
}

const ReviewCard: FC<ReviewCardProps> = ({ review }) => {
  return (
    <Card>
      <CardTitle>{review.title}</CardTitle>
      <CardText>{review.review}</CardText>
    </Card>
  )
}

const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 26px;
  width: 100%;
  background-color: #f5f5f5;
`;

const CardTitle = styled.h3`
  position: relative;
  left: -30px;
  padding: 6px 40px 6px 20px;
  margin-bottom: 16px;
  background-color: #6ca4e0;
  clip-path: polygon(0% 0%, 76% 0, 86% 50%, 75% 100%, 0% 100%);
`;

const CardText = styled.p`
  font-size: 18px;
`;

export default ReviewCard;
