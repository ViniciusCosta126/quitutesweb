import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-top: 1.75rem;
  padding-bottom: 1.75rem;
  background-color: ${({ theme }) => theme.color.secondary.main};
  @media (min-width: 1024px) {
    padding-top: 3rem;
    padding-bottom: 3rem;
    .content {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
export const ContentContainer = styled.div`
  padding: 0 1.75rem;
  text-align: center;
  h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 1.1;
    margin-bottom: 1.2rem;
    letter-spacing: 0.05em;
    @media (min-width: 1024px) {
      font-size: 48px;
    }
  }
  p {
    font-size: 16px;
    font-weight: 400;
    @media (min-width: 1024px) {
      font-size: 18px;
    }
  }
  a {
    background-color: ${({ theme }) => theme.color.primary.main};
    color: ${({ theme }) => theme.color.light};
    padding: 1rem;
    margin: auto;
    margin-top: 1.5rem;
    display: block;
    width: 80%;
    border-radius: 16px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(1.2);
    }
    @media (min-width: 1024px) {
      max-width: 280px;
      text-align: center;
      margin-left: 0;
    }
  }
  @media (min-width: 1024px) {
    width: 50%;
    text-align: left;
  }
`;
export const ImageContainer = styled.div`
  margin: auto;
  margin-bottom: 24px;
  background-color: transparent;
  width: 250px;
  height: 250px;
  perspective: 1000px;
  &:hover .flip-card-inner {
    transform: rotatey(180deg);
  }
  @media (min-width: 1024px) {
    width: 400px;
    height: 400px;
  }
`;
export const ImageFlip = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    backface-visibility: hidden;
  }
  .flip-card-back {
    transform: rotateY(180deg);
    background-color: #000;
  }
`;
export const ImageHero = styled(Image)`
  display: block;
  margin: auto;
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;
