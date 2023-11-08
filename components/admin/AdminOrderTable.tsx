import { SUCCESS } from "@/constants";
import { Typography } from "@/components";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  data: IOrder[];
};

const AdminOrderTable = ({ data }: Props) => {
  const router = useRouter();
  return (
    <div className="h-[500px] overflow-y-auto">
      <table className="w-full">
        <tbody>
          <tr>
            <th className="text-sm text-grayscale-900 text-left font-semibold">
              ID
            </th>
            <th className="text-sm text-grayscale-900 text-left font-semibold">
              Date
            </th>
            <th className="text-sm text-grayscale-900 text-left font-semibold">
              Customer
            </th>
            <th className="text-sm text-grayscale-900 text-left font-semibold">
              Fullfillment
            </th>
            <th className="text-sm text-grayscale-900 text-right font-semibold">
              Total
            </th>
          </tr>
          {data?.map((order: IOrder) => (
            <tr
              className="border-b border-b-grayscale-300 cursor-pointer"
              onClick={() => router.push(`/dashboard/orders/${order.uid}?i=o`)}
              key={order.uid}
            >
              <td>
                <Typography className="text-grayscale-900 text-xs sm:text-sm my-4">
                  {"#" + order.uid.substring(5, 8)}
                </Typography>
              </td>
              <td>
                <Typography className="text-grayscale-900 text-xs sm:text-sm">
                  {moment(order.createdAt).format("MMM, DD YYYY")}
                </Typography>
              </td>
              <td className="">
                <Typography className="text-grayscale-900 text-xs sm:text-sm">
                  {order.contactDetails.fullName}
                </Typography>
              </td>
              <td>
                {order.status === SUCCESS ? (
                  <Image
                    alt={order.status}
                    src="/fullfilled.svg"
                    width={80}
                    height={80}
                    className="sm:w-20 sm:h-20 w-14 h-14"
                  />
                ) : (
                  <Image
                    alt={order.status}
                    src="/unfullfilled.svg"
                    width={80}
                    height={80}
                    className="sm:w-20 sm:h-20 w-14 h-14"
                  />
                )}
              </td>
              <td className="text-right">
                <Typography className="text-grayscale-900 text-xs sm:text-sm">
                  {parseInt(order.totalPrice).toLocaleString("us-US", {
                    currency: "USD",
                    style: "currency",
                  })}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrderTable;
