import styled from "styled-components";
import quote from "../../images/quote.png";
const Quote = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  height: 300px;
  width: 350px;
  border-radius: 10px;
  padding: 20px;
  color: ${(props) => props.theme.colors.white};
  padding: 30px;
  margin: 10px;
`;
import React from "react";
import Image from "next/image";
import { Paragraph } from "../Text/Paragraph";

type Props = {};

const QuoteCard = (props: Props) => {
  return (
    <div>
      <Quote>
        <div style={{ marginBottom: "10px" }}>
          <Image src={quote} alt="quote image" width={50} height={50} />
        </div>
        <Paragraph>
          Article evident arrived express highest men did boy. Mistress sensible
          entirely am so. Quick can manor smart money hopes worth too. Comfort
          produce husband boy her had hearing.
        </Paragraph>
      </Quote>
    </div>
  );
};

export default QuoteCard;
