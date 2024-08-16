import { ProductDetailProps } from "./ProductDetailTypes";
import Rating from "../Rating/Rating";
import ClothingSize from "../ClothingSize/ClothingSize";
import styles from "./ProductDetail.module.css";

function ProductDetail({ title, description, rating }: ProductDetailProps) {
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbs}>Shop &gt; Women &gt; Tops</div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <div className={styles.ratingGroup}>
        <Rating rating={rating} size="large" />
        <span className={styles.ratingText}>{Math.round(rating * 2) / 2}</span>
      </div>
      <div className={styles.sizeGroup}>
        <label className={styles.sizeLabel}>Select Size</label>
        <ClothingSize disabled={["XS"]} />
      </div>
    </div>
  );
}

export default ProductDetail;
