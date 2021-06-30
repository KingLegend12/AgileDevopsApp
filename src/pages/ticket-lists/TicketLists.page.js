import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllTickets } from "./ticketsAction";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { SearchForm } from "../../components/search-form/SearchForm.comp";
import { TicketTable } from "../../components/Ticket-table/TicketTable.comp";
import tickets from "../../assets/data/dummy-tickets.json";
import { Link } from "react-router-dom";
export const TicketLists = () => {
  const dispatch = useDispatch();
  const [str, setStr] = useState("");

  useEffect(() => {
    dispatch(fetchAllTickets());
  }, [str, dispatch]);

  return (
    <Container>
      <Row>
        <Col>
          <hr />
          <PageBreadcrumb page="Ticket Lists" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Link to="/add-ticket">
            <Button variant="info">Ajouter une nouveau Ticket</Button>
          </Link>
        </Col>
        <Col className="text-right">
          <SearchForm />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable />
        </Col>
      </Row>
    </Container>
  );
};
