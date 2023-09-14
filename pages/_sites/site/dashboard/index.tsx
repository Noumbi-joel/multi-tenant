import {
    AdminAnalyticBox,
    AdminLayout,
    AdminTopAnalytic,
    AdminWelcomeBanner,
    Typography,
  } from "@/components";
  
  export default function DashboardHomePage() {
    return (
      <AdminLayout>
        <div className="min-h-screen w-screen px-5 sm:px-10 pt-5">
          <Typography className="text-sm font-medium">
            Hey{" "}
            <span className="font-semibold italic">
              John Doe,
            </span>{" "}
            – here’s what’s happening with{" "}
            <span className="font-semibold italic">Eduka</span>{" "}
            store.
          </Typography>
  
          <AdminWelcomeBanner />
  
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
            <AdminAnalyticBox
              graphImage="todaySalesGraph.svg"
              amount={"0"}
              title="today's sales"
            />
            <AdminAnalyticBox
              graphImage="totalSalesGraph.svg"
              amount={"0"}
              title="total sales"
            />
            <AdminAnalyticBox
              graphImage="totalOrdersGraph.svg"
              amount={"0"}
              title="total orders"
            />
          </div>
  
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-5">
            <AdminTopAnalytic
              title="top products"
              emptyTitle="No products"
              products={[]}
            />
            <AdminTopAnalytic
              title="top customers"
              emptyTitle="No customers"
              customers={[]}
            />
          </div>
        </div>
      </AdminLayout>
    );
  }