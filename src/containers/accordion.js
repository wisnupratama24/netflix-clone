import React from "react";
import { Accordion, OptForm } from "../components";
import faqsData from "../fixtures/faqs.json";

export default function AccordionContainer() {
  return (
    <Accordion>
      <Accordion.Title> Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header} </Accordion.Header>
          <Accordion.Body>{item.body} </Accordion.Body>
        </Accordion.Item>
      ))}

      <OptForm>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button> Try it Now </OptForm.Button>
      </OptForm>
      <OptForm.Text>
        {" "}
        Ready to watch? Enter your email to create or restart your membership.{" "}
      </OptForm.Text>
    </Accordion>
  );
}
