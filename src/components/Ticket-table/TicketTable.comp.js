import React from "react";
import { Table } from "react-bootstrap";
export const TicketTable = ({ tickets }) => {
  return (
    <Table>
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
              <td>{row.subject}</td>
              <td>{row.status}</td>
              <td>{row.priority}</td>
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
  );
};
