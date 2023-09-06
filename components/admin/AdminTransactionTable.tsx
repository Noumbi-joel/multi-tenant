import { Typography } from "@/components";
import React from "react";

const AdminTransactionTable = () => {
  return (
    <div>
      <div className="pb-1 border-b border-b-grayscale-300 mt-7">
        <Typography className="text-base text-grayscale-900">
          Transactions
        </Typography>
      </div>

      <table className="w-full mt-4">
        <tbody>
          <tr className="border-b border-b-grayscale-300">
            <th className="text-sm text-grayscale-900 text-left font-normal">
              Delivery method
            </th>
            <th className="text-sm text-grayscale-900 text-left font-normal">
              Status
            </th>
            <th className="text-sm text-grayscale-900 text-left font-normal">
              Amount
            </th>
            <th className="text-sm text-grayscale-900 text-right font-normal">
              Date
            </th>
          </tr>
          <Typography className="text-gray-900 text-sm mt-2">
            No transactions found.
          </Typography>
        </tbody>
      </table>
    </div>
  );
};

export default AdminTransactionTable;
