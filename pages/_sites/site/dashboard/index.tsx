import {
  AdminAnalyticBox,
  AdminLayout,
  AdminTopAnalytic,
  Typography,
} from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <AdminLayout>
      <div className="min-h-screen w-screen px-5 sm:px-10 pt-5">
        <Typography className="text-sm font-medium">
          Hey <span className="font-semibold italic">John Doe,</span> – here’s
          what’s happening with{" "}
          <span className="font-semibold italic">Eduka</span> store.
        </Typography>

        <div className="p-5 bg-primary-200 h-[115px] my-5 flex items-center rounded-2xl">
          <Image
            alt="exclamation"
            src="/exclamation.svg"
            width={24}
            height={24}
          />
          &nbsp;
          <div className="flex flex-col gap-1">
            <Typography className="text-base text-gray-900">
              Welcome to your Eduka!
            </Typography>
            <Typography className="text-sm font-medium text-gray-900">
              If you have any questions, email to support@myeduka.com
            </Typography>
            <Link href="mailto:support@myduka.com" className="cursor-pointer">
              <Typography className="text-sm font-medium text-primary-base cursor-pointer">
                Contact Support
              </Typography>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
          <AdminAnalyticBox />
          <AdminAnalyticBox />
          <AdminAnalyticBox />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-5">
          <AdminTopAnalytic title="" />
          <AdminTopAnalytic title="" />
        </div>
      </div>
    </AdminLayout>
  );
}
