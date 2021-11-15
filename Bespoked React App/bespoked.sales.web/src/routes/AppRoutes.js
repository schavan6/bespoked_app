import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SalesPersons from "../components/salesperson/SalesPersons";
import Products from "../components/products/Products";
import Customers from "../components/customers/Customers";
import Sales from "../components/sales/Sales";
import CommissionReport from "../components/reports/CommissionReport";
import NavBar from "./NavBar";

export default function AppRoutes(props) {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/customers" element={<Customers />}></Route>
          <Route exact path="/sales" element={<Sales />}></Route>
          <Route exact path="/report" element={<CommissionReport />}></Route>
          <Route exact path="/" element={<SalesPersons />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
