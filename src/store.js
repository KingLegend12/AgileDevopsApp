import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./pages/ticket-lists/ticketSlice";
import loginReducer from "./components/login/Login.Slice";
import userReducer from "./pages/dashboard/userSlice";
import newTicketReducer from "./components/add-ticket-from/add-ticketSlicer";
const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    login: loginReducer,
    user: userReducer,
    openTicket: newTicketReducer,
  },
});

export default store;
