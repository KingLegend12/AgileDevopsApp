import React from "react";
import { Col, Row, Button, Container } from "react-bootstrap";
import { TicketTable } from "../../components/Ticket-table/TicketTable.comp";
import tickets from "../../assets/data/dummy-tickets.json";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
export const Dashboard = () => {
  return (
    <Container>
        <hr/>
        
      <Row>
        <Col>
          <PageBreadcrumb page="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button
            variant="success"
            style={{ "font-size": "2rem", "border-radius": "2rem" }}
          >
            Ajouter un Ticket
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mb-2">
          <div>Mes tickets: 50</div>
          <div>Mes tickets en attente: 10</div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mb-2">Ticket Ajouté recently</Col>
      </Row>
      <hr />
      <Row>
        <Col className="recent-ticket">
          {" "}
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};
