import { Select, Option } from "..";
import React from "react";

type Props = {
  label?: string;
  values: string[];
  className?: string;
  onChange?: (e: string | undefined) => void;
};

const StoreFrontSelect = ({
  values,
  className,
  label,
  onChange,
}: Props) => {

  return (
    <Select
      className={className}
      label={label}
      color="indigo"
      onChange={onChange}
    >
      {React.Children.toArray(
        values.map((val) => (
          <Option className="text-sm text-grayscale-900" value={val}>
            {val}
          </Option>
        ))
      )}
    </Select>
  );
};

export default StoreFrontSelect;
