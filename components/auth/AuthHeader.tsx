import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const AuthHeader = ({ children }: Props) => {
  return (
    <div>
      <header className="border-b border-b-grayscale-200 h-20 flex items-center justify-center">
        <Link href="/" className="cursor-pointer">
          <Image alt="Logo" src="/eduka.svg" width={112} height={30} />
        </Link>
      </header>

      {children}
    </div>
  );
};

export default AuthHeader;
