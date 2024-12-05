import { StarContainer, StarButton, RatingValue } from "./styles/PopcornTime.styles";
import { useState } from "react";

type StarRatingProps = {
  rating: number | null;
  onRating: (rate: number) => void;
}

const StarRating = ({rating, onRating}: StarRatingProps) => {
  const [hover, setHover] = useState<number>(0);

  return (
    <StarContainer>
      {[...Array(10)].map((_, index) => {
        index += 1;
        return (
          <StarButton
            key={index}
            val={index <= (hover || (rating || 0)) ? 'on' : 'off'}
            onClick={() => onRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating || 0)}
          >
            <span >&#9733;</span>
          </StarButton>
        );
      })}
      <RatingValue>{rating}</RatingValue>
    </StarContainer>
  );
};

export default StarRating;
