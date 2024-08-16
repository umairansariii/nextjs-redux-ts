import { ProductSchema } from "@/app/types/schemas";
import ProductGallery from "@/app/components/ProductGallery/ProductGallery";
import ProductDetail from "@/app/components/ProductDetail/ProductDetail";
import sections from "@/app/styles/sections.module.css";
import layouts from "@/app/styles/layouts.module.css";

async function Products({ params }: { params: { id: number } }) {
  const data: ProductSchema = await fetch(
    `https://dummyjson.com/products/${params.id}`,
    { cache: "force-cache" }
  ).then((res) => res.json());

  return (
    <div className={layouts.centerLayout}>
      <div className={sections.productMetaSection}>
        <ProductGallery {...data} />
        <ProductDetail {...data} />
      </div>
    </div>
  );
}

export default Products;
