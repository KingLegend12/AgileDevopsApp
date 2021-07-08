import {
  openNewTicketPending,
  openNewTicketSuccess,
  openNewTicketFail,
} from "./add-ticketSlicer";
import { createNewTicket } from "../../api/ticketApi";

export const openNewTicket = (frmData) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      dispatch(openNewTicketPending());

      const result = await createNewTicket(frmData);
      if (result.status === "error") {
        return dispatch(openNewTicketFail(result.message));
      }
      dispatch(openNewTicketSuccess("Ticket Envoyé avec success"));
    } catch (error) {
      console.log(error);
      dispatch(openNewTicketFail(error.message));
    }
  });
};
