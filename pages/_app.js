import Head from "next/head";
import '../styles/globals.css'


import "../css/About.css";
import "../css/Admin.css";
import "../css/Blog.css";
import "../css/Certification.css";
import "../css/Contact.css";
import "../css/Home.css";
import "../css/ProjectDetails.css";
import "../css/Projects.css";
import "../css/Services.css";

import "../Styling/Navbar.css";
import "../Styling/Carousal.css";
import "../Styling/CompanyDetails.css";
import "../Styling/Footer.css";
import "../Styling/Home.css";
import "../Styling/Projects.css";
import "../Styling/Services.css";
import "../Styling/Testimonials.css";
import 'react-multi-carousel/lib/styles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Provider } from 'react-redux'
import store from "../store";

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      {/* Font Awesome */}
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet" />
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
      {/* MDB */}
      <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.5.0/mdb.min.css" rel="stylesheet" />
      {/* <!-- MDB --> */}
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.5.0/mdb.min.js"
      ></script>
      <title>Team Overc’s Architects</title>
    </Head>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
}

export default MyApp