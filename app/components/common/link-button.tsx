import { Button } from "antd";
import Link from "next/link";
import React from "react";

type PropsType = {
  linkProps: Omit<React.ComponentProps<typeof Link>, "children">;
  children: React.ReactNode;
  btnProps: Omit<React.ComponentProps<typeof Button>, "children">;
};

export const LinkButton = ({ children, linkProps, btnProps }: PropsType) => {
  return (
    <Link {...linkProps}>
      <Button {...btnProps}>{children}</Button>
    </Link>
  );
};
