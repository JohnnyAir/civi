import styled from "styled-components";
import { border, color, space } from "styled-system";
import more from "./svg/more.svg";
import cancel from "./svg/cancel.svg";
import address_pin from "./svg/address-pin.svg";
import create_resume from "./svg/create-resume.svg";
import templates from "./svg/templates.svg";
import loading from "./svg/loader.svg";
import menu from "./svg/menu.svg";
import resume from "./svg/resume.svg";
import phone from "./svg/phone.svg";
import right_arrow from "./svg/right-arrow.svg";
import left_arrow from "./svg/left-arrow.svg";
import embarrased from "./svg/embarrased.svg";
import email from "./svg/email.svg";
import linkedIn from "./svg/linkedIn.svg";

const icons = {
  more,
  menu,
  phone,
  email,
  cancel,
  resume,
  loading,
  templates,
  left_arrow,
  right_arrow,
  address_pin,
  embarrased,
  linkedIn,
  create_resume,
};

const StyledIcon = styled.svg`
  ${border}
  ${color}
  ${space}
`;

export default function Svg({ name, ...props }) {
  const Icon = icons[name];
  return <StyledIcon as={Icon} {...props} />;
}
