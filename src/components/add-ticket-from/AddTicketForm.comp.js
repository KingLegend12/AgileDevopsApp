import React, { useState } from "react";
import { Jumbotron, Form, Button, Row, Col } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import PropTypes from "prop-types";

const initialFrmDt = {
  subject: "",
  issueDate: "",
  message: "",
};

export const AddTicketForm = () => {
  const [frmData, setFrmData] = useState(initialFrmDt);
  const [cmbvalue, setcmbValue] = useState("Selectioner");
  const handleSelect = (e) => {
    console.log(e);
    setcmbValue(e);
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFrmData({
      ...frmData,
      [name]: value,
    });
    console.log(name, value);
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    //const isSubjectValid = await shortText(frmData.subject);

    console.log("Form submit request received", frmData);
  };
  return (
    <Jumbotron style={{ background: "none" }}>
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label>Sujet</Form.Label>
          <Col>
            <Form.Control
              name="subject"
              value={frmData.subject}
              onChange={handleOnChange}
              placeholder="Entrez le sujet de votre reclamation"
              required
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Date de reclamation</Form.Label>
          <Form.Control
            type="date"
            name="issueDate"
            placeholder="jj-mm-aaaa"
            value={frmData.issueDate}
            onChange={handleOnChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Les details</Form.Label>
          <Form.Control
            as="textarea"
            name="detail"
            value={frmData.detail}
            onChange={handleOnChange}
            placeholder="Decrivez votre Problème "
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Priorité</Form.Label>
          <DropdownButton
            alignRight
            title={cmbvalue}
            value={cmbvalue}
            id="dropdown-menu-align-right"
            onSelect={handleSelect}
            required
          >
            <Dropdown.Item eventKey="Elevée">Elevée</Dropdown.Item>
            <Dropdown.Item eventKey="Moyenne">Moyenne</Dropdown.Item>
            <Dropdown.Item eventKey="Basse">Basse</Dropdown.Item>
          </DropdownButton>
        </Form.Group>
        <Button type="submit" variant="info">
          Envoyer
        </Button>
      </Form>
    </Jumbotron>
  );
};
// AddTicketForm.propTypes = {
//   handleOnSubmit: PropTypes.func.isRequired,
//   handleOnChange: PropTypes.func.isRequired,
//   frmDt: PropTypes.object.isRequired,
//   frmDataErro: PropTypes.object.isRequired,
// };
