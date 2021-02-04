import React from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import UserInfo from "../components/UserInfo";

const UserInfoPage = () => {
  return (
    <>
      <Header />
      <main style={{ minWidth: "1100px" }}>
        <BreadCrumbs />
        <UserInfo />
      </main>
      <Footer />
    </>
  );
};

export default UserInfoPage;
