import { Typography } from "@/components";

const StoreFrontProductList = () => {
  return (
    <section className="my-8 md:px-20 px-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
      <Typography className="h-[350px] text-sm text-gray-900 mt-4">
        No products
      </Typography>
    </section>
  );
};

export default StoreFrontProductList;
