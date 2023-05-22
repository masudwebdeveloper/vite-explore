import { useState } from 'react';
import Star from './Star';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <div>
      <p>Please rate:</p>
      <div>
        {[1, 2, 3, 4, 5].map((value) => (
          <Star
            key={value}
            value={value}
            filled={value <= rating}
            onClick={handleRatingChange}
          />
        ))}
      </div>
      <p>Selected Rating: {rating}</p>
    </div>
  );
};

export default StarRating;
