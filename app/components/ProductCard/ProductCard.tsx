import { ProductCardProps } from "./ProductCardTypes";
import Link from "next/link";
import Rating from "../Rating/Rating";
import styles from "./ProductCard.module.css";

function ProductCard({
  id,
  title,
  rating,
  price,
  thumbnail,
}: ProductCardProps) {
  return (
    <Link href={`/product/${id}`}>
      <div className={styles.container}>
        <img src={thumbnail} />
        <div className={styles.bottomContainer}>
          <div className={styles.detailsGroup}>
            <div>
              <h2 className={styles.title}>{title}</h2>
              <Rating rating={rating} />
            </div>
            <div>
              <p className={styles.price}>{price}$</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
