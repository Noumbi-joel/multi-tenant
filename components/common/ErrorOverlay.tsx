import { BiSolidError } from "react-icons/bi";
import { Button, Typography } from "@/components";

export default function ErrorOverlay({
  error,
  resetErrorBoundary,
}: {
  error: any;
  resetErrorBoundary: Function;
}) {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen gap-3 bg-white">
      <div className="flex justify-center">
        <BiSolidError className="w-20 h-20 text-red-500" />
      </div>

      <Typography className="text-sm text-red-500 text-center">
        {error?.message}
      </Typography>

      <Button variant="text" onClick={() => resetErrorBoundary()}>
        Reload
      </Button>
    </div>
  );
}
