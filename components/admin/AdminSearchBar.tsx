import { setSortBy } from "@/slices/customers";
import { Input } from "@/components";
import React from "react";
import { useDispatch } from "react-redux";

type Props = {
  filters?: string[];
  updates?: string[];
  customer?: boolean;
  onChangeFilters?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeSort?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onSearch: (
    e: React.ChangeEvent<HTMLInputElement>,
    setSearch: React.Dispatch<React.SetStateAction<string>>
  ) => void;
};

const AdminSearchBar = ({
  filters,
  updates,
  customer,
  onChangeFilters,
  onChangeSort,
  onSearch,
}: Props) => {
  const [search, setSearch] = React.useState("");
  const dispatch = useDispatch();

  if (customer) {
    return (
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-2">
        <div>
          <Input
            label="Search"
            color="indigo"
            value={search}
            onChange={(e) => onSearch(e, setSearch)}
          />
        </div>

        <div>
          <select
            onChange={(e) => dispatch(setSortBy(e.target.value))}
            className="border text-grayscale-900 text-sm border-gray-400 h-11 rounded-md outline-none w-full"
          >
            {updates?.map((update) => (
              <option key={update} className="text-grayscale-900 text-sm">
                {update}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  return (
    <div className="my-10 grid grid-cols-1 xl:grid-cols-2 xl:gap-4 gap-2">
      <div className="xl:col-span-1">
        <Input
          label="Search"
          color="indigo"
          value={search}
          onChange={(e) => onSearch(e, setSearch)}
        />
      </div>

      <div className="flex xl:flex-row flex-col items-center xl:justify-end xl:gap-4 gap-2">
        <select
          onChange={onChangeFilters}
          className="border text-grayscale-900 text-sm border-gray-400 h-11 rounded-md outline-none w-full"
        >
          {filters?.map((filter) => (
            <option key={filter} className="text-grayscale-900 text-sm">
              {filter}
            </option>
          ))}
        </select>

        <select
          className="border text-grayscale-900 text-sm border-gray-400 h-11 rounded-md outline-none w-full"
          onChange={onChangeSort}
        >
          {updates?.map((update) => (
            <option key={update} className="text-grayscale-900 text-sm">
              {update}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AdminSearchBar;
