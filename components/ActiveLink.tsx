// Use this instead of Link to know when the link is active with data-* prop

import React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

const ActiveLink: React.FC<LinkProps> = (props) => {
  const router = useRouter();

  if (typeof props.href === "object") {
    throw new TypeError(
      "[ActiveLink] href props as an object is deprecated since Next.js 9"
    );
  }
  if (typeof props.as === "object") {
    throw new TypeError(
      "[ActiveLink] as props as an object is deprecated since Next.js 9"
    );
  }

  const url = props.as || props.href;
  const isExactActive = url === router.asPath;

  const isActive = url !== "/" ? router.asPath.startsWith(url) : isExactActive;

  return (
    <Link {...props}>
      <a data-is-active={isActive} data-is-exact-active={isExactActive}>
        {props.children}
      </a>
    </Link>
  );
};

export default ActiveLink;
