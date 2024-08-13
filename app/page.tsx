import ProductFeed from "./components/ProductFeed/ProductFeed";
import styles from "./styles/layouts.module.css";

export default function Home() {
  return (
    <div className={styles.centerLayout}>
      <ProductFeed />
    </div>
  );
}
