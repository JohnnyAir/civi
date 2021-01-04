import Input from "./Input";
import styled from "styled-components";

const FormLabel = styled.label`
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black[600]};
`;

const FormGroup = styled.div`
  margin: 10px 0px;
  input {
    width: 100%;
  }
`;

const StyledTextArea = styled.textarea`
  && {
    margin: 5px 0px;
    height: ${({ height }) => height || "2rem"};
    padding: 10px;
    width: 100%;
    border-width: 2px;
    line-height: 1.55rem;
    font-weight: 500;
  }
`;

export function FormTextArea(props) {
  return <FormInput as={StyledTextArea} {...props} />;
}

export default function FormInput({ label, ...props }) {
  return (
    <FormGroup>
      {label && <FormLabel>{label}</FormLabel>}
      <Input {...props} />
    </FormGroup>
  );
}
