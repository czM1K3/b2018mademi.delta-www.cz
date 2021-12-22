import React, { FC } from "react";
import Head from "next/head";

const Layout: FC = ({ children }) => (
	<div>
		<Head>
			<title>Michal Maděra</title>
		</Head>
		<main>
			<div className="container">
				{children}
			</div>
		</main>
	</div>
);

export default Layout;