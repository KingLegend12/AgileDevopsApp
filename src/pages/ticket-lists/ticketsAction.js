import axios from "axios";
import {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketFail,
  searchTickets,
} from "./ticketSlice";

export const fetchAllTickets = () => async (dispatch) => {
  dispatch(fetchTicketLoading());

  try {
    const result = await axios.get("http://localhost:3001/v1/ticket", {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9rb3BAcC5jb20iLCJpYXQiOjE2MjUwNjMwNjQsImV4cCI6MTYyNTA2Mzk2NH0.lAii3MXBc06CWmPusHuVt4u3ACsSh-x-mCGIhj4u1po",
      },
    });
    dispatch(fetchTicketSuccess(result.data.result));
    if (!result.data.result) {
      dispatch(fetchTicketFail({ message: "error couldn't load" }));
    }
    console.log(result);
  } catch (error) {
    dispatch(fetchTicketFail(error.message));
  }
};

export const filterSearchTicket = (str) => (dispatch) => {
  dispatch(searchTickets(str));
};
