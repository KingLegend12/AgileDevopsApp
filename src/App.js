import "./App.css";
import { Button } from "react-bootstrap";
import Entry from "./pages/entry/Entry.page";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Dashboard } from "./pages/dashboard/Dashboard.page";
import { AddTicketPage } from "./components/new-ticket/Addticketpage";
import { TicketLists } from "./pages/ticket-lists/TicketLists.page";
function App() {
  return (
    <div className="App">
      {/*<Entry />*/}
      <DefaultLayout>
        {/* <Dashboard/>*/}
        {/*<AddTicketPage />*/}
        <TicketLists></TicketLists>
      </DefaultLayout>
    </div>
  );
}

export default App;
