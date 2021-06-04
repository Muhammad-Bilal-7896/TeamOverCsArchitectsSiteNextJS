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


function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta charSet="utf-8" />
      {/* <link rel="icon" href="%PUBLIC_URL%/logo.png" /> */}
      <meta name="description" content="Team Overc’s is a trusted name in the house construction and consultancy industry. With the extensive experience in the field since 2011, Team Overc’s has made a name for itself providing high quality Construction and Building services to its clientele." />
      <meta name="keywords" content="teamovercsarchitects,archtiectural website,architecture,construction,design,interior,3d drawing,top architects,best architects,pakistan best,DHA architects,Team Overc's,Home Design" />
      <meta name="author" content="Muhammad-Bilal-7896" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      {/* This is is the mdb import */}
      {/* Font Awesome */}
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet" />
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
      {/* MDB */}
      <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.0.0/mdb.min.css" rel="stylesheet" />
      {/* This is is the mdb import */}
      {/* <link rel="apple-touch-icon" href="%PUBLIC_URL%/favicon.ico" /> */}
      {/*
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    */}
      {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
      {/*
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.
      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
      <title>Team Overc’s Architects</title>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp