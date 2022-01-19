import React, { FC } from "react";
import Button from "../components/button";
import Layout from "../components/layout";
import Row from "../components/row";

const Maturita: FC = () => (
	<Layout>
		<div className="d-flex justify-content-center align-items-center pt-5">
			<div className="d-flex flex-column justify-content-center text-center">

				<h1>Maturitní projekt - Codeventure</h1>
				<p>
					Zde si představte text o maturitním projektu a soubory.
				</p>
				<Row>
					<Button href="/maturita/dokumentace/dokumentace-22122021.pdf">Dokumentace (PDF)</Button>
					<Button href="https://github.com/Codeventure-cz/dokumentace/releases/latest">Dokumentace (Zdrojový kód)</Button>
				</Row>
				<Row>
					<Button href="https://www.codeventure.cz">Web (Živá verze)</Button>
				</Row>
			</div>
		</div>
	</Layout>
);

export default Maturita;
