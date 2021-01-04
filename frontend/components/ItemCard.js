import styled from "styled-components";
import Button from "./Button";

export default function ItemCard(props) {
  return (
    <StyledItemCard>
      <MainTitle>{props.MainTitle}</MainTitle>
      <SubTitle>{props.SubTitle}</SubTitle>
      <Duration>
        {props.dateFrom} - {props.dateTo}
      </Duration>
      <div>
        <Button onClick={props.onEdit} size="tiny">
          Edit
        </Button>
        <Button onClick={props.onDelete} size="tiny" color="red">
          Delete
        </Button>
      </div>
    </StyledItemCard>
  );
}

const StyledItemCard = styled.div`
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  border: 1px solid ${({ theme }) => theme.colors.black[200]};
  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 99%;
  }
`;

const MainTitle = styled.span`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
`;

const SubTitle = styled.span`
  display: block;
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black[600]};
`;

const Duration = styled.span`
  font-size: 0.8rem;
  display: block;
  margin-top: 4px;
`;
