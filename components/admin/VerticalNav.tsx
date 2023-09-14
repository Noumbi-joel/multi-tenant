import Image from "next/image";
import { AccountSettings, NavLinks } from "@/components";

type Props = {
  drawer?: boolean;
};

const VerticalNav = ({ drawer }: Props) => {
  return (
    <header
      className={
        drawer
          ? "bg-gray-900 h-full flex flex-col justify-between"
          : "bg-gray-900 hidden h-screen md:flex flex-col justify-between"
      }
    >
      <div>
        <Image
          alt="eduka admin logo"
          src="/eduka-white.svg"
          width={100}
          height={26}
          className="mt-5 mx-3"
        />
        <NavLinks />
      </div>

      <AccountSettings />
    </header>
  );
};

export default VerticalNav;