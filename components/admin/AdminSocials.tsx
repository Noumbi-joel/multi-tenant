import { Button, Input, Typography } from "@/components";

const AdminSocials = () => {
 
  return (
    <div>
      <div className="my-4">
        <Typography className="text-base text-grayscale-900">
          Social profiles
        </Typography>
        <Typography className="text-sm text-grayscale-500">
          These social profiles will appear on your website.
        </Typography>
      </div>

      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-2">
          <Input label="Facebook" color="indigo" />
          <Input label="Instagram" color="indigo" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-2">
          <Input label="Twitter" color="indigo" />
          <Input label="Tiktok" color="indigo" />
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

export default AdminSocials;