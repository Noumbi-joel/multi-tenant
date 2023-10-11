import Link from "next/link";
import { Typography } from "@/components";

type Props = {
  data: ICreateProduct[];
};

const StoreFrontProductList = ({ data }: Props) => {
  return (
    <section className="my-8 md:px-20 px-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
      {data?.length <= 0 ? (
        <Typography className="h-[350px] text-sm text-gray-900 mt-4">
          No products
        </Typography>
      ) : (
        data?.map((prod) => {
          if (prod.status === "Published")
            return (
              <div
                key={prod.id}
                className="h-[350px] hover:skew-y-2 cursor-pointer"
              >
                <Link href={`/shop/${prod.id}`}>
                  <img
                    src={prod.imageOne}
                    alt={prod.name}
                    className="h-[280px] w-full object-cover rounded-lg"
                  />
                  <Typography className="text-sm text-gray-900 mt-4">
                    {prod.name}
                  </Typography>
                  <Typography className="text-base text-gray-900 font-semibold">
                    {parseInt(prod.salePrice).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </Typography>
                </Link>
              </div>
            );
        })
      )}
    </section>
  );
};

export default StoreFrontProductList;
