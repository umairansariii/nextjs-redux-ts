import { RatingProps } from "./RatingTypes";
import getRatingStars from "@/app/utils/getRatingStars";
import StarIcon from "@/public/icons/StarIcon";
import StarFullIcon from "@/public/icons/StarFullIcon";
import StarHalfIcon from "@/public/icons/StarHalfIcon";
import styles from "./Rating.module.css";

function Rating({ rating, size = "small" }: RatingProps) {
  const starsArray = getRatingStars(rating);

  return (
    <div className={styles.container} data-size={size}>
      {starsArray.map((type) => {
        if (type === "full") {
          return <StarFullIcon />;
        }
        if (type === "half") {
          return <StarHalfIcon />;
        }
        if (type === "empty") {
          return <StarIcon />;
        }
      })}
    </div>
  );
}

export default Rating;
