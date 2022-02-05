import React from "react";
import Header from "../components/Header";
import Info from "../components/Info";
import Tabela from "../components/Tabela";

class Home extends React.Component {
  render() {
    return (
    <>
      <Header />
      <Tabela />
      <Info />
    </>
    )}
}

export default Home;