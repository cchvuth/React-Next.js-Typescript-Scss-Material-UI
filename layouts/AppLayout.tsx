import React, { ReactNode } from "react";
import Head from "next/head";
import "./AppLayout.scss";
import ActiveLink from "../components/ActiveLink";

type Props = {
  children?: ReactNode;
  title?: string;
};

const AppLayout = ({ children, title = "Demo" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </Head>
    <header>
      <nav className="flex-row">
        <ActiveLink href="/">Home</ActiveLink>
        <ActiveLink href="/users">Users List</ActiveLink>
      </nav>
    </header>
    {children}
  </div>
);

export default AppLayout;
