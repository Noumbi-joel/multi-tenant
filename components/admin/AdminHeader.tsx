import React from 'react'

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

const AdminHeader = (props: Props) => {
  return (
    <div>AdminHeader</div>
  )
}

export default AdminHeader;