import {
  AdminLayout,
  AdminOrderDeliveryDetails,
  AdminOrderPaid,
  AdminOrderProductList,
  AdminTransactionTable,
  Typography,
} from "@/components";
import moment from "moment";

export default function OrderDetailsPage() {
  return (
    <AdminLayout>
      <div className="min-h-screen w-screen px-5 sm:px-10 pt-5">
        <Typography
          variant="h5"
          className="text-xl text-gray-900 font-semibold"
        >
          Order 123456789
        </Typography>

        <Typography className="text-sm text-grayscale-900 mt-1">
          {moment().format("MMM DD, YYYY")}
        </Typography>

        <div className="bg-grayscale-300 h-[1px] my-5" />

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <section className="lg:mr-2">
            <AdminOrderProductList />

            <AdminOrderPaid />

            <AdminTransactionTable />
          </section>

          <AdminOrderDeliveryDetails />
        </div>
        <div className="sm:hidden h-28" />
      </div>
    </AdminLayout>
  );
}
