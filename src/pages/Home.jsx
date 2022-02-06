import React from "react";
import Header from "../components/Header";
import Info from "../components/Info";
import Table from "../components/Table";

class Home extends React.Component {
  render() {
    return (
    <>
      <Header />
      <Table />
      <Info />
    </>
    )}
}

export default Home;