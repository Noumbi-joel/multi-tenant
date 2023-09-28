import { Typography } from "@/components";

type Props = {
  title: string;
};

const AdminTopAnalytic = ({ title }: Props) => {
  if (title === "top products") {
    return (
      <div className="h-[400px] flex flex-col rounded-lg border border-grayscale-300 p-5">
        <div className="h-[50px] w-full">
          <Typography className="text-xs uppercase text-grayscale-500">
            {title}
          </Typography>
        </div>

        <div className="h-full flex items-center justify-center">
          <Typography className="text-sm text-grayscale-500">
            No Products
          </Typography>
        </div>
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

      <div className="h-full flex items-center justify-center">
        <Typography className="text-sm text-grayscale-500">
          No Customers
        </Typography>
      </div>
    </div>
  );
};

export default AdminTopAnalytic;
