import React from "react";
import { Form, Button } from "react-bootstrap";
export const UpdateTicket = ({ msg, handleOnChange, handleOnSubmit }) => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label>Reply</Form.Label>
      <Form.Text>
        <h4>Veuillez repondre à notre support ici</h4>
      </Form.Text>
      <Form.Control
        name=""
        value={msg}
        onChange={handleOnChange}
        as="textarea"
        rows={3}
        name="detail"
      />
      <div className="text-right mt-4">
        <Button variant="info" type="submit">
          Repondre
        </Button>
      </div>
    </Form>
  );
};
