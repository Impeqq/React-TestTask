import styled from "styled-components";
import LinkComponent from "../LinkComponent";
import { operatorRoute } from "../../const/routes";

const OperatorBlock = styled.div`
  width: 213px;
  margin: 10px;
  background: #fff;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgb(235, 235, 235);
  flex-grow: 0;
  justify-content: space-between;
`;

const OperatorButton = styled.button`
  width: 100%;
  display: block;
  outline: none;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background: rgb(0, 102, 255);
  transition: 0.2s ease all;

  :hover {
    background: rgb(0, 85, 212);
  }
`;

const OperatorListImg = styled.img`
  height: 50px;
`;
const OperatorListName = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 15px 0;
  padding: 5px 0;
  width: 100%;
  text-align: center;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;

const OperatorItem = ({ operator }) => {
  return (
    <OperatorBlock>
      <OperatorListImg src={operator.img} />
      <OperatorListName>{operator.name}</OperatorListName>
      <OperatorButton>
        <LinkComponent
          href={operatorRoute.url}
          as={operatorRoute.as + operator.id}
          text="button"
          translation={true}
          className="main"
        ></LinkComponent>
      </OperatorButton>
    </OperatorBlock>
  );
};

export default OperatorItem;
