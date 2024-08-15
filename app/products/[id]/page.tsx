import { ProductSchema } from "@/app/types/schemas";
import ProductGallery from "@/app/components/ProductGallery/ProductGallery";
import layouts from "@/app/styles/layouts.module.css";

async function Products({ params }: { params: { id: number } }) {
  const data: ProductSchema = await fetch(
    `https://dummyjson.com/products/${params.id}`,
    { cache: "force-cache" }
  ).then((res) => res.json());

  const { images } = data;

  return (
    <div className={layouts.centerLayout}>
      <ProductGallery images={images} />
    </div>
  );
}

export default Products;
