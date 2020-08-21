import OperatorItem from "./OperatorItem";
import { operators } from "../../const/operators";
import styled from "styled-components";

const OperatorsListBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-items: center;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

const OperatorsList = () => {
  return (
    <OperatorsListBlock>
      {operators.map((operator) => (
        <OperatorItem key={operator.id} operator={operator} />
      ))}
    </OperatorsListBlock>
  );
}

export default OperatorsList