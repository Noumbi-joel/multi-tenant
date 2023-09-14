import {
  AdminCustomerSummary,
  AdminCustomerDetails,
  AdminLayout,
  Typography,
} from "@/components";

export default function CustomerDetailsPage() {
  return (
    <AdminLayout>
      <div className="min-h-screen w-screen px-5 sm:px-10 pt-5">
        <div className="mb-10">
          <Typography variant="h5" className="text-xl text-gray-900">
            Little Jacob
          </Typography>

          <Typography className="text-sm text-gray-900">6 days ago</Typography>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <AdminCustomerSummary />

          <div className="h-[1px] lg:hidden bg-gray-300 mt-5" />

          <AdminCustomerDetails />
        </div>
      </div>
    </AdminLayout>
  );
}
