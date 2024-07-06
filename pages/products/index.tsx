import { readFile } from 'fs/promises';
import { NextPage } from 'next';
import path, { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

type ProductPageProps = {
  products: {id:string,title:string}[]
}
const ProductPage: NextPage<ProductPageProps> = ({products}) => {
    console.log(products);
  return (
    <div className="container my-20">
      <h1 className="text-3xl font-bold">My product page</h1>
      {products && (
        <ul className="max-w-xs flex flex-col mt-5">
          {products.map((product, index) => (
            <li
              className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700 dark:text-white"
              key={index}
            >
              {product.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export async function getStaticProps() {
  const filePath = path.join(
    process.cwd(),
    "/public/data/dummy-backend.json"
  );
  const file = await readFile(filePath, { encoding: "utf-8" });
  const data: { products: { id: string; title: string }[] } =
    JSON.parse(file) || [];
  return {
    props: { products:data.products },
    revalidate:180
  };
}
export default ProductPage;
