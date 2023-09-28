import { Typography } from "@/components";

type Props = {
  title: string;
  products?: ICreateProduct[];
  customers?: ICustomer[];
};

const AdminTopAnalytic = ({
  title,
  products,
  customers,
}: Props) => {
  if (title === "top products") {
    return (
      <div className="h-[400px] flex flex-col rounded-lg border border-grayscale-300 p-5">
        <div className="h-[50px] w-full">
          <Typography className="text-xs uppercase text-grayscale-500">
            {title}
          </Typography>
        </div>

        {products!.length <= 0 && (
          <div className="h-full flex items-center justify-center">
            <Typography className="text-sm text-grayscale-500">
              No Products
            </Typography>
          </div>
        )}

        {products?.map((p) => (
          <div key={p.id} className="flex gap-4 mb-4">
            <img alt={p.id} src={p.imageOne} className="w-12 h-12 rounded object-cover" />
            <div>
              <Typography className="text-sm text-grayscale-900 font-semibold">
                {p.name}
              </Typography>
              <Typography className="text-sm text-grayscale-900">
                {p.purchaseNumber} sales
              </Typography>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="h-[400px] flex flex-col rounded-lg border border-grayscale-300 p-5 overflow-y-auto">
      <div className="h-[50px] w-full">
        <Typography className="text-xs uppercase text-grayscale-500">
          {title}
        </Typography>
      </div>

      {customers!.length <= 0 && (
        <div className="h-full flex items-center justify-center">
          <Typography className="text-sm text-grayscale-500">
            No Customers
          </Typography>
        </div>
      )}

      {customers?.map((p) => (
        <div key={p.id} className="mb-4">
          <Typography className="text-sm text-grayscale-900 font-semibold">
            {p.name}
          </Typography>
          <Typography className="text-sm text-grayscale-900">
            Total spent: {' '}
            {p.totalSpent.toLocaleString("us-US", {
              currency: "USD",
              style: "currency",
            })}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default AdminTopAnalytic;
