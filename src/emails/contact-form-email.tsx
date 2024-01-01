import * as React from "react";
import { Html } from "@react-email/html";
import { Button } from "@react-email/button";
import {
  Section,
  Body,
  Head,
  Column,
  Heading,
  Hr,
  Img,
  Text,
  Container,
  Row,
} from "@react-email/components";

export function ContactEmail({
  data,
}: {
  data: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  };
}) {
  const { name, email, phone, subject, message } = data;
  return (
    <Html lang="en">
      <Body style={main}>
        <Container style={container}>
          <Section style={content}>
            <Text>Prénom: {name}</Text>
            <Text>Email: {email}</Text>
            <Text>Numéro de téléphone: {phone}</Text>
            <Hr style={divider} />
            <Heading as="h2" style={title}>
              Sujet: {subject}
            </Heading>
            <Text style={paragraph}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f3f3f5",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
};

const container = {
  maxWidth: "680px",
  width: "100%",
  margin: "0 auto",
  backgroundColor: "#ffffff",
};

const content = {
  padding: "30px 30px 40px 30px",
};

const title = {
  margin: "0 0 15px",
  fontWeight: "bold",
  fontSize: "21px",
  lineHeight: "21px",
  color: "#0c0d0e",
};

const divider = {
  margin: "30px 0",
};
const paragraph = {
  fontSize: "15px",
  lineHeight: "21px",
  color: "#3c3f44",
};
