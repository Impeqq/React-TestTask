import styled from "styled-components";
import Link from "next/link";

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
  href: string,
  text: string,
  as?: string,
  className?: string
}

export default function LinkComponent({ href, text, as, className }:LinkValidation) {
  return (
    <Link href={href} as={as}>
        <LinkText className={className}>{text}</LinkText>
    </Link>
  );
}
