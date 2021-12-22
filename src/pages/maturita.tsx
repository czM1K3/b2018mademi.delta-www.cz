import React, { FC } from "react";
import Button from "./components/button";
import Layout from "./components/layout";

const Maturita: FC = () => (
	<Layout>
		<h1>Maturita</h1>
		<p>
			Zde si představte text o maturitním projektu a soubory.
		</p>
		<Button href="https://github.com/Codeventure-cz/dokumentace/releases/latest">Dokumentace</Button>
		<Button href="https://www.codeventure.cz">Web</Button>
	</Layout>
);

export default Maturita;
