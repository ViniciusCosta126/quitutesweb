import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.secondary.main};
  height: 100vh;
  padding-top: 2rem;

  .divider {
    border-top: 3px solid #fff;
    margin: auto;
    margin-top: 2rem;
    text-align: center;
    max-width: 500px;
    p {
      margin-top: 1rem;
      font-size: 20px;
      font-weight: 500;
    }
  }
`;

export const FormContainer = styled.form`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  padding: 2rem 1rem;
  border-radius: 16px;
  max-width: 500px;
  margin: auto;
  a {
    text-align: right;
    display: block;
    margin-top: -1.3rem;
    color: ${({ theme }) => theme.color.light};
    cursor: pointer;
  }
`;
export const FieldContainer = styled.div`
  margin-bottom: 1.5rem;
  &:last-child {
    margin-bottom: 0;
  }
`;
export const Label = styled.label`
  color: ${({ theme }) => theme.color.light};
  font-weight: 500;
  font-size: 22px;
  align-items: center;
  display: flex;
  svg {
    margin-right: 8px;
  }
`;
export const Input = styled.input`
  width: 100%;
  border: 2px solid #fff;
  border-radius: 8px;
  height: 36px;
  background-color: transparent;
  padding-left: 10px;
  color: #fff;
`;
export const BtnSubmit = styled.button`
  display: block;
  width: 100%;
  margin-top: 1rem;
  border: none;
  padding: 0.5rem 1.5rem;
  font-size: 20px;
  background-color: ${({ theme }) => theme.color.primary.main};
  border-radius: 16px;
  color: #fff;
  cursor: pointer;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(1.1);
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  svg {
    margin-right: 24px;
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }
  }
`;
