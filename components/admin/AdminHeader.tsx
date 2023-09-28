import { Button, Typography } from "@/components";
import { useRouter } from "next/navigation";
import { AiOutlinePlus } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";

type Props = {
  title: string;
  amount?: number;
  create?: boolean;
  link?: string;
  rest?: boolean;
  selectAll?: boolean;
  clearAll?: () => void;
  deleteAll?: () => void;
};

const AdminHeader = ({
  title,
  amount,
  create,
  link,
  rest,
  clearAll,
  deleteAll,
  selectAll,
}: Props) => {
  const router = useRouter();

  if (rest) {
    return (
      <div className="flex items-center">
        <Typography
          variant="h4"
          className="font-medium text-xl sm:text-2xl text-gray-900"
        >
          {title} &nbsp;
        </Typography>
        <Typography
          variant="h4"
          className="font-medium text-xl sm:text-2xl text-gray-500"
        >
          {amount}
        </Typography>
      </div>
    );
  }

  if (create) {
    return (
      <div className="flex items-center justify-between">
        <Typography variant="h4" className="font-medium text-2xl text-gray-900">
          {title}
        </Typography>

        <div className="flex items-center gap-2">
          <Button
            variant="outlined"
            size="sm"
            className="border border-primary-base"
            onClick={() => {}}
          >
            <Typography className="text-primary-base capitalize">
              Back
            </Typography>
          </Button>
          <Button size="sm" className="bg-primary-base" type="submit">
            <Typography className="capitalize text-white">Save</Typography>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <Typography
          variant="h4"
          className="font-medium text-xl sm:text-2xl text-gray-900"
        >
          {title} &nbsp;
        </Typography>
        <Typography
          variant="h4"
          className="font-medium text-xl sm:text-2xl text-gray-500"
        >
          {amount}
        </Typography>
      </div>
      {!selectAll ? (
        <Button
          className="flex items-center gap-3 bg-primary-base"
          size="sm"
          onClick={() => router.push(link!)}
        >
          <AiOutlinePlus className="h-5 w-5 text-white" />
          {title === "Categories" ? (
            <Typography className="text-white lowercase">
              Create category
            </Typography>
          ) : (
            <Typography className="text-white lowercase">
              Create {title.toLowerCase().substring(0, title.length - 1)}
            </Typography>
          )}
        </Button>
      ) : (
        <div className="flex items-center gap-2">
          <Button
            variant="outlined"
            size="sm"
            className="border border-primary-base"
            onClick={clearAll}
          >
            <Typography className="text-primary-base capitalize">
              Clear
            </Typography>
          </Button>
          <Button
            size="sm"
            className="bg-alert-base flex gap-1"
            onClick={deleteAll}
          >
            <FiTrash2 className="w-6 h-6" />
            <Typography className="capitalize">Delete</Typography>
          </Button>
        </div>
      )}
    </div>
  );
};

export default AdminHeader;