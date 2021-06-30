import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./pages/ticket-lists/ticketSlice";
const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
  },
});

export default store;
