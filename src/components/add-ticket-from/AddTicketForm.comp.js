import React, { useState, useEffect } from "react";
import { Jumbotron, Form, Button, Row, Col } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import PropTypes from "prop-types";
import { shortText } from "../../utils/validation";
import "./add-ticket-form.style.css";
const initialFrmDt = {
  subject: "",
  issueDate: "",
  detail: "",
};
const initialFrmError = {
  subject: false,
  issueDate: false,
  detail: false,
};

export const AddTicketForm = () => {
  const [frmData, setFrmData] = useState(initialFrmDt);
  const [frmDataError, setFrmDataError] = useState(initialFrmError);
  const [cmbvalue, setcmbValue] = useState("Selectioner");
  useEffect(() => {}, [frmData, frmDataError]);
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
    setFrmDataError(initialFrmError);
    const isSubjectValid = await shortText(frmData.subject);

    setFrmDataError({
      ...initialFrmError,
      subject: !isSubjectValid,
    });

    console.log("Form submit request received", frmData);
  };
  return (
    <Jumbotron style={{ background: "none" }} className="mt-3 add-new-ticket">
      <h1 className="text-center">Ajouter un Nouveau Ticket</h1>
      <hr style={{ backgroundColor: "orangered" }} />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group>
          <Form.Label>Sujet</Form.Label>
          <Form.Control
            name="subject"
            value={frmData.subject}
            onChange={handleOnChange}
            minLength="3"
            maxLength="50"
            placeholder="Entrez le sujet de votre reclamation"
            required
          />
          <Form.Text className="text-danger">
            {frmDataError.subject && "Subject is required !"}
          </Form.Text>
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
            <Dropdown.Item style={{ backgroundColor: "red" }} eventKey="Elevée">
              Elevée
            </Dropdown.Item>
            <Dropdown.Item
              style={{ backgroundColor: "orange" }}
              eventKey="Moyenne"
            >
              Moyenne
            </Dropdown.Item>
            <Dropdown.Item
              style={{ backgroundColor: "green" }}
              eventKey="Basse"
            >
              Basse
            </Dropdown.Item>
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
