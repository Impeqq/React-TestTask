import styled from "styled-components";
import { FormattedMessage } from "react-intl";

const Alert = styled.ul`
  border: 1px solid rgb(255, 153, 153);
  background: #ffe3e3;
  border-radius: 5px;
  width: 300px;
  margin: 0 auto;
  margin-top: 15px;
  padding: 0 10px;
  list-style: none;

  &.final {
    margin-bottom: 30px;
  }

  &.success {
    border: 1px solid rgb(153, 255, 158);
    background: #e3ffe3;

    & li {
      color: rgb(48 183 30);

      &:before {
        background: rgb(94, 221, 77);
      }
    }
  }

  @media screen and (max-width: 400px) {
    width: 100%;
  }

  & li {
    margin: 10px 0;
    position: relative;
    padding-left: 10px;
    font-size: 15px;
    color: rgb(221, 77, 77);

    &:before {
      position: absolute;
      content: "";
      left: 0;
      top: 50%;
      transform: translate(0, -50%);
      width: 5px;
      height: 5px;
      background: red;
      border-radius: 100%;
    }
  }
`;

interface NotificationValidation {
  value: string;
  touch?: string;
  className?: string;
}

const Notification = ({ value, touch, className }: NotificationValidation) => {
  if ((value && touch) || (value && className)) {
    return (
      <Alert className={className}>
        <li>
          <FormattedMessage id={value} />
        </li>
      </Alert>
    );
  } else {
    return null;
  }
};

export default Notification;
