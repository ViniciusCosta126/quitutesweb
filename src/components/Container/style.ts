import styled from "styled-components";

export const Container = styled.div`
  padding: 0 ${({ theme }) => theme.container.small};

  @media (min-width: 1024px) {
    padding: 0 ${({ theme }) => theme.container.medium};
  }
  @media (min-width: 1330px) {
    padding: 0 ${({ theme }) => theme.container.large};
  }
  @media (min-width: 1440px) {
    padding: 0 ${({ theme }) => theme.container.big};
  }
`;
