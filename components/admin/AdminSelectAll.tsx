import { Typography } from "@/components";
import React from "react";

type Props = {
  itemsLength: number;
  nbItemSelected: number;
  onSelectAll: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectAll: boolean
};

const AdminSelectAll = ({
  itemsLength,
  nbItemSelected,
  onSelectAll,
  selectAll
}: Props) => {
  return (
    <div className="flex items-center my-5">
      <input
        type="checkbox"
        className="w-5 h-5"
        checked={selectAll}
        onChange={onSelectAll}
      />
      <Typography className="text-grayscale-900 text-sm">
        &nbsp; Displaying: {nbItemSelected} of {itemsLength} items
      </Typography>
    </div>
  );
};

export default AdminSelectAll;
