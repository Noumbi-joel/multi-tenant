import { Typography } from "@/components";
import { useRouter } from "next/navigation";

type Props = {
  data: ICustomer[];
};

const AdminCustomerTable = ({ data }: Props) => {
  const router = useRouter();
  return (
    <div className="h-[500px] overflow-y-auto">
      <table className="w-full">
        <tbody>
          <tr>
            <th className="text-sm text-grayscale-900 text-left font-semibold">
              Name
            </th>
            <th className="text-sm text-grayscale-900 text-left font-semibold">
              Total spent
            </th>
            <th className="text-sm text-grayscale-900 text-right font-semibold">
              Orders
            </th>
          </tr>
          {data?.map((customer: ICustomer) => (
            <tr
              className="border-b border-b-grayscale-300 cursor-pointer"
              onClick={() =>
                router.push(`/dashboard/customers/${customer.id}?i=cu`)
              }
              key={customer.name}
            >
              <td>
                <Typography className="text-grayscale-900 text-sm my-4">
                  {customer.name}
                </Typography>
              </td>
              <td>
                <Typography className="text-grayscale-900 text-sm">
                  ${customer.totalSpent}
                </Typography>
              </td>
              <td className="text-right">
                <Typography className="text-grayscale-900 text-sm">
                  {customer.totalOrders}{" "}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminCustomerTable;
