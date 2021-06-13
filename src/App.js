import "./App.css";
import { Button } from "react-bootstrap";
import Entry from "./pages/entry/Entry.page";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Dashboard } from "./pages/dashboard/Dashboard.page";
function App() {
  return (
    <div className="App">
      {/*<Entry />*/}
      <DefaultLayout>
        <Dashboard></Dashboard>
      </DefaultLayout>
    </div>
  );
}

export default App;
