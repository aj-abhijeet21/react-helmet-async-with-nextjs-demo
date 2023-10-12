"use client";
import { ReactNode } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Script from "next/script";

type Props = {
  isHelmet: boolean;
  children: ReactNode;
  scriptContent: string;
};
const helmetContext = {};

const GainsightWrapper = (props: Props) => {
  return props.isHelmet ? (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <script>{`var myData = { "myPageType":"foo" }; console.log("Script loaded using helmet:", myData);`}</script>
      </Helmet>
      {props.children}
    </HelmetProvider>
  ) : (
    <>
      <Script id="analytics-script">{`var myData = { "myPageType":"foo" }; console.log("Script loaded using NextJS <Script />:", myData);`}</Script>
      {props.children}
    </>
  );
};

export default GainsightWrapper;
