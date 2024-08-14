function Products({ params }: { params: { id: number } }) {
  return <h1>My Product: {params.id}</h1>;
}

export default Products;
