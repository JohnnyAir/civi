import Link from "next/link";
import StyledButton from "./StyledButton";
import StyledLinkButton from "./StyledLinkButton";
// import PropTypes from 'prop-types'

function RenderButton(props) {
  const { link, icon, children, ...otherProps } = props;
  let ButtonComponent = StyledButton;

  if (link) ButtonComponent = StyledLinkButton;

  return (
    <ButtonComponent icon={!!icon} as={link && "a"} {...otherProps}>
      {typeof children === "string" ? <span>{children}</span> : { children }}
      {icon && <span className="btn-icon">{icon}</span>}
    </ButtonComponent>
  );
}

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

// Button.propTypes = {

// }

export default Button;
