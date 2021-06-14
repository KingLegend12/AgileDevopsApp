import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
export const SearchForm = ({ handleOnChange, str }) => {
  //console.log(str);
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label
            column
            sm="3"
            style={{ color: "white", boxShadow: "0px 3px 9px black" }}
          >
            Rechercher:
          </Form.Label>
          <Col sm="9">
            <Form.Control
              name="searchStr"
              onChange={handleOnChange}
              value={str}
              placeholder="Rechercher ..."
            ></Form.Control>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
SearchForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  str: PropTypes.string.isRequired,
};
