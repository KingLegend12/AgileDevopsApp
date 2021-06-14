import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PageBreadcrumb } from "../breadcrumb/Breadcrumb.comp";
import { AddTicketForm } from "../add-ticket-from/AddTicketForm.comp";
//import { shortText } from "../../utils/validation";
//import { shortText } from "../../utils/validation";

const initialFrmDt = {
  subject: "",
  issueDate: "",
  detail: "",
};

export const AddTicketPage = () => {
  const [frmData, setFrmData] = useState(initialFrmDt);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFrmData({
      ...frmData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    //const isSubjectValid = await shortText(frmData.subject);

    console.log("Form submit request received", frmData);
  };

  return (
    <Container>
      <hr />
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket" />
        </Col>
      </Row>

      <Row>
        <Col>
          <AddTicketForm />
        </Col>
      </Row>
    </Container>
  );
};
