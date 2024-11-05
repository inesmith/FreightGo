import React from "react";
import TransporterNavBar from "../components/TransporterNavBar";
import Footer from "../components/Footer";
import TransporterDashboardCard from "../components/TransporterDashboardCard";
import "./style.css";

const fakeTransporterData = {
  name: "Name Surname",
  status: "Transporter",
  email: "221076@virtualwindow.co.za",
  contactNumber: "+27 79 727 2830",
  totalPickups: "Total",
  totalDeliveries: "Total",
};

function TransporterDashboard() {
  return (
    <>
      <TransporterNavBar />
      <div className="dashboard-page">
        <TransporterDashboardCard transporterData={fakeTransporterData} />
      </div>
      <Footer />
    </>
  );
}

export default TransporterDashboard;
