import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLink({ children, ...props }) {
  const router = useRouter();
  let child =
    typeof children === "string" ? (
      <a>{children}</a>
    ) : (
      React.Children.only(children)
    );

  let className = child.props.className || "";
  let href = typeof props.href === "string" ? props.href : props.href.pathname;
  if (router.pathname === href) {
    className = `${className} active`.trim();
  }

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
}
