import { title } from "@/components/primitives";
import Product from "@/components/Product";

export default function BlogPage() {
  return (
    <div className="mt-8">
      <h1 className={title()}>Product</h1>
      <section className="mt-8">
        <Product />
      </section>
    </div>
  );
}
