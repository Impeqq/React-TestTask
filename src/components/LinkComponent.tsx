import styled from "styled-components";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

const LinkText = styled.div`
  &.main {
    color: #fff;
    padding: 10px;
  }
  &.arrow {
    padding: 5px 20px;
  }
`;

interface LinkValidation {
  href: string;
  text: string;
  as?: string;
  className?: string;
  translation?: boolean;
}

const LinkComponent = ({
  href,
  text,
  as,
  className,
  translation,
}: LinkValidation) => {
  return (
    <Link href={href} as={as}>
      <LinkText className={className}>
        {translation ? <FormattedMessage id={text} /> : text}
      </LinkText>
    </Link>
  );
};

export default LinkComponent;
