import React from "react";
import { Table, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export const TicketTable = ({ tickets }) => {
  return (
    <Container>
      <Table className="table table-striped table-dark">
        <thead>
          <tr>
            <th>Identifiant du ticket</th>
            <th>Sujet</th>
            <th>Status</th>
            <th>Priorité</th>
            <th>Date d'ouverture</th>
          </tr>
        </thead>
        <tbody>
          {tickets.length ? (
            tickets.map((row) => (
              <tr>
                <td>{row.id}</td>
                <td>
                  <Link to={`/ticket/${row.id}`}>{row.subject}</Link>
                </td>
                <td>{row.status}</td>
                <td style={{ backgroundColor: row.color }}>{row.priority}</td>
                <td>{row.addedAt}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                Vous n'avez auncun ticket de reclamation en cours{""}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};
