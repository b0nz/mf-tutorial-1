import React from "react";
import ReactDOM from "react-dom";
import Header from "nav/Header";
import { useStore } from "host/store";

import "./index.scss";

const App = () => {
  const { increase, count, decrease } = useStore()
  return (
    <>
      <Header />
      <div className="text-3xl mx-auto max-w-6xl">
        <div>Name: Kue</div>
        <div>By: host</div>
        <div>{count}</div>
        <button className="bg-blue-500 text-white px-4 py-2" onClick={increase}>add</button>
        <button className="bg-red-500 text-white px-4 py-2" onClick={decrease}>remove</button>
      </div>
    </>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
