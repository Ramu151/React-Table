import React from "react";
import "./styles.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";
import Table from "./Table";

const store = createStore(reducer);

export default function App() {
  const data = React.useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World"
      },
      {
        col1: "react-table",
        col2: "rocks"
      },
      {
        col1: "whatever",
        col2: "you want"
      }
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Column 1",
        accessor: "col1" // accessor is the "key" in the data
      },
      {
        Header: "Column 2",
        accessor: "col2"
      }
    ],
    []
  );
  return (
    <Provider store={store}>
      <div className="App">
        <Table columns={columns} data={data} />
      </div>
    </Provider>
  );
}
