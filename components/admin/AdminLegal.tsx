import { Button, Textarea, Typography } from "@/components";
import React from "react";

const AdminLegal = () => {
 
  return (
    <div>
      <div className="my-4">
        <Typography className="text-base text-grayscale-900">Legal</Typography>
        <Typography className="text-sm text-grayscale-500">
          Write down legal and policy information below and revise them whenever
          you want.
        </Typography>
      </div>

      <form>
        <Textarea
          label="Refund policy"
          color="indigo"
        />
        <Textarea
          label="Privacy policy"
          color="indigo"
        />
        <Textarea
          label="Shipping policy"
          color="indigo"
        />
        <div className="my-5">
          <Button className="bg-primary-base" type="submit">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminLegal;
