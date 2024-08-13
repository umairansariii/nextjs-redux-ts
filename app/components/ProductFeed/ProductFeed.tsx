import { ProductCardProps } from "../ProductCard/ProductCardTypes";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductFeed.module.css";

async function ProductFeed() {
  const data = await fetch(
    "https://dummyjson.com/products/category/tops?limit=4",
    {
      cache: "no-store",
    }
  ).then((res) => res.json());

  return (
    <div className={styles.container}>
      {data.products.map((data: ProductCardProps) => {
        return <ProductCard {...data} />;
      })}
    </div>
  );
}

export default ProductFeed;
