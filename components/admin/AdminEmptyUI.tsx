import { Typography } from "@/components";
import Image from "next/image";

type Props = {
  title?: string;
  nothingFound?: boolean;
};

const AdminEmptyUI = ({ title, nothingFound }: Props) => {
  if (nothingFound) {
    return (
      <div className="h-[300px] grid place-content-center">
        <Image alt="saucer" src="/nothingFound.svg" width={325} height={160} />
        <Typography className="text-grayscale-900 text-center text-base">
          Whoops.. nothing's corresponding
        </Typography>
      </div>
    );
  }

  return (
    <div className="h-[300px] grid place-content-center">
      <Image alt="saucer" src="/flyingSaucer.svg" width={325} height={160} />
      <Typography className="text-grayscale-900 text-center text-base">
        Whoops.. you've got no {title}
      </Typography>
      {title === "categories" ? (
        <Typography className="text-grayscale-900 text-center text-sm">
          Create {title} to group similar products in your store.
        </Typography>
      ) : title === "orders" ? (
        <Typography className="text-grayscale-900 text-center text-sm">
          Create a product to start receiving orders in your store
        </Typography>
      ) : title === "customers" ? (
        <Typography className="text-grayscale-900 text-center text-sm">
          Create a product to get orders from customers in your store
        </Typography>
      ) : (
        <Typography className="text-grayscale-900 text-center text-sm">
          Create a {title!.substring(0, title!.length - 1)} to start receiving
          orders in your store
        </Typography>
      )}
    </div>
  );
};

export default AdminEmptyUI;
