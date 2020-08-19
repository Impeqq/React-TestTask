import styled from "styled-components";

const Loader = styled.div`
  display: inline-block;
  width: 26px;
  height: 26px;

  :after {
    content: " ";
    display: block;
    width: 15px;
    height: 15px;
    margin: 0px;
    border-radius: 50%;
    border: 3px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Button = styled.button`
  margin: 0 auto;
  display: block;
  width: 300px;
  height: 40px;
  outline: none;
  color: #fff;
  font-weight: 700;
  padding: 10px;
  text-transform: uppercase;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background: rgb(0, 102, 255);
  transition: 0.2s ease background;

  :hover {
    background: rgb(0, 85, 212);
  }

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

interface ButtonValidation {
  disabled?: any;
  text: string;
}

export default function Notification({
  disabled,
  text,
}: ButtonValidation) {
  return (
    <Button type="submit" disabled={disabled}>
      {disabled ? <Loader></Loader> : text}
    </Button>
  );
}
