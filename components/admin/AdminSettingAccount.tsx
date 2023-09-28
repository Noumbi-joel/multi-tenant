import { AdminGenAccount, Button, Input } from "@/components";

const AdminSettingAccount = () => {

  return (
    <div>
      <AdminGenAccount />

      <form>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 my-2">
          <Input label="First name" color="indigo" />
          <Input label="Last name" color="indigo" />
          <Input label="Email" disabled color="indigo" />
        </div>

        <div className="my-5">
          <Button className="bg-primary-base" type="submit">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminSettingAccount;
