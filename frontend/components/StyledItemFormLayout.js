import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.screenSize.laptop} {
    flex-direction: row;
  }
`;

export const ItemSection = styled.div`
  flex: 1 1;
  min-width: 250px;
  @media ${({ theme }) => theme.screenSize.laptop} {
    margin-right: 4rem;
  }
`;

export const FormSection = styled.div`
  flex: 3 3;
`;

export const Form = styled.form`
  width: 100%;
  @media ${({ theme }) => theme.screenSize.laptop} {
    max-width: 530px;
  }
`;
