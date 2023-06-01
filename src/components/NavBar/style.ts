import styled from "styled-components";

export const NavBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.primary.main};
  position: static;
  width: 100%;
  padding: 10px ${({ theme }) => theme.container.small};
  @media (min-width: 1024px) {
    padding: 20px ${({ theme }) => theme.container.medium};
    box-shadow: 0 6px 5px 0 rgba(0,0,0,.15);
  }
  @media (min-width: 1330px) {
    padding: 20px ${({ theme }) => theme.container.large};
  }
  @media (min-width: 1440px) {
    padding: 20px ${({ theme }) => theme.container.big};
  }
`;
export const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  max-width: 140px;
  letter-spacing: 0.05em;
  line-height: 1;
  color: ${({ theme }) => theme.color.light};
  text-align: center;
  @media (min-width: 1024px) {
    max-width: 450px;
    font-size: 40px;
  }

`;
export const ButtonMenu= styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.color.light};
  cursor: pointer;
`;

interface NavProps {
  visible:boolean
}
export const Nav = styled.nav<NavProps>`
  position: absolute;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.primary.main};
  width: 100%;
  z-index: 9999;
  left: ${({ visible }) => (visible ? 0 : "-1000px")};
  transition: ${({ visible }) =>
    visible ? "left 400ms linear" : "left 500ms linear"};
  top: 0;
  .faixa{
    width:100%;
    padding: 12px 20px;
    background-color: ${({theme})=> theme.color.secondary.main};
    color: ${({theme})=>theme.color.light};
    position: relative;
   
    h3{
      font-size: 24px;
      font-weight: 700;
    }
    svg{
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  @media(min-width: 1024px){
    width: 40%;
  }
`;
export const ContainerBtns = styled.div`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
  }
  .cart {
    position: relative;
    margin-right: 8px;
    span {
      position: absolute;
      font-size: 12px;
      right: -4px;
      top: 0px;
      background-color: ${({ theme }) => theme.color.success};
      color: ${({ theme }) => theme.color.light};
      font-weight: 700;
      height: 16px;
      width: 16px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .user {
    display: flex;
    align-items: center;
    p {
      font-size: 14px;
      color: ${({ theme }) => theme.color.light};
      font-weight: 500;
      text-transform: capitalize;
    }
    svg,img  {
      margin-right: 4px;
      width: 32px;
      height: 32px;
      display: block;
    }
    img{
      border-radius: 50%;
    }
  }
`;

export const NavItens = styled.ul`
  text-align: center;
  margin-top: 40px;
  li{
    position: relative;
    color: ${({theme})=>theme.color.light};
    margin-bottom: 24px;
    a{
      color: ${({theme})=>theme.color.light};
      font-weight: 700;
      font-size: 20px;
    }
  }
`
export const SocialContainer = styled.div`
text-align: center;
border-top: 2px solid #fff;
width: 80%;
margin: 10px auto;
color: ${({theme})=>theme.color.light};
h2{
  margin-top: 8px;
  font-weight: 700;
  font-size: 24px;
}
div{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  a{
    color: ${({theme})=>theme.color.light};
    margin-right: 20px;
    &:last-child{
      margin-right: 0;
    }
  }
}
`