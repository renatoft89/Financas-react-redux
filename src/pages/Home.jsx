import React from "react";
import Header from "../components/Header";
import Info from "../components/Info";
import Table from "../components/Table";
import FinanceProvider from "../Context/FinanceProvider";

export default Home;
function Home() {
  return (
    <>
    <FinanceProvider>
      <Header />
      <Table />
      <Info />
    </FinanceProvider>
    </>
  );
}
