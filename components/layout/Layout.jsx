import Head from "next/head";
import styles from "./layout.module.css";
import Navbar from "../navbar/Navbar";
// import Footer from "./Footer";
// import useToggle from "./useToggle";s
import { useState, useEffect } from "react";

export default function Layout({ children }) {
 // const [toggle, setToggle] = useState(false);

//  const [toggle, setToggle] = useToggle(false);

//  useEffect(() => {
//   /**
//    * if local storage doesn't have a toggle, create one with value of false
//    */
//   if (!localStorage.getItem("toggle")) {
//    localStorage.setItem("toggle", "false");
//   }
//   if (localStorage.getItem("toggle")) {
//    const value = localStorage.getItem("toggle");
//    console.log(`value ${typeof JSON.parse(value)}`);
//    // setDarkMode(JSON.parse(value));
//    setToggle(JSON.parse(value));
//   }
//  }, [setToggle]);

//  const handleClick = () => {
//   // setDarkMode(!darkMode);
//   setToggle(!toggle);
//   const flip = !toggle
//   console.log(flip);
//   localStorage.setItem("toggle", flip.toString());
//  };

 return (
  <>
        <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
   <Head>
    <title>DND</title>
   </Head>
   <Navbar />
   <main className={styles.main}>{children}</main>

  </>
 );
}
