import Operator from "../components/Operator";
import { operators } from "../const/operators";
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

export default function OperatorsList() {
  return (
    <OperatorsListBlock>
      {operators.map((operator) => (
        <Operator key={operator.id} operator={operator} />
      ))}
    </OperatorsListBlock>
  );
}
