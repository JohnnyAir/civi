import React from "react";
import Link from "next/link";
import StyledButton from "./StyledButton";
import StyledLinkButton from "./StyledLinkButton";
import Loading from "../icons/svg/loader.svg";

const RenderButton = React.forwardRef((props, ref) => {
  const { link, loading, disabled, icon, children, ...otherProps } = props;
  let ButtonComponent = StyledButton;

  if (link) ButtonComponent = StyledLinkButton;

  return (
    <ButtonComponent
      disabled={loading || disabled}
      ref={ref}
      icon={!!icon}
      as={link && "a"}
      {...otherProps}
    >
      {typeof children === "string" ? <span>{children}</span> : children}
      {icon && <span className="btn-icon">{icon}</span>}
      {loading && <Loading className="loading-icon" />}
    </ButtonComponent>
  );
});

function Button(props) {
  const { link, href } = props;
  if (link && href)
    return (
      <Link href={href}>
        <RenderButton {...props} />
      </Link>
    );
  return <RenderButton {...props} />;
}

export default Button;
