import React from "react";
import PropTypes from "prop-types";
import "./MessageHistory.style.css";
export const MessageHistory = ({ msg }) => {
  console.log(msg);
  if (!msg) return null;
  return msg.map((row, i) => (
    <div key={i} className="message-history mt-3">
      <div
        className="send font-weight-bold text-secondary"
        style={{
          "box-shadow": " 0px 0px 30px orangered",
          "border-radius": "1rem",
          padding: "1rem",
        }}
      >
        <div className="sender">{row.messageBy}</div>
        <div className="date">{row.date}</div>
      </div>
      <div className="message"> {row.message}</div>
    </div>
  ));
};

MessageHistory.propTypes = {
  msg: PropTypes.array.isRequired,
};
