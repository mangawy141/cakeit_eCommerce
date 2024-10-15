import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/css/all.min.css"; // FontAwesome
import "../styles/css/MobileMenu.css"; // Mean Menu CSS
import "../styles/css/main.css"; //main css file;
import "../styles/css/responsive.css"; // Responsive CSS
import Layout from "../components/Layout";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}
