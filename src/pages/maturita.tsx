import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import Button from "../components/button";
import Layout from "../components/layout";
import Row from "../components/row";

const Maturita: FC = () => (
	<Layout>
		<div className="d-flex justify-content-center align-items-center pt-5">
			<div className="d-flex flex-column justify-content-center text-center border p-3">
				<h1 className="h1">Maturitní projekt - Codeventure</h1>
				<div>
					<Image src="/magician.jpg" width={200} height={200} layout="fixed" unoptimized={true} />
				</div>
				<p>
					Codeventure je interaktivní hra pro rozvíjení logického myšlní u dětí. Celá hra je stylizována do kouzelnického prostředí, ve kterém dítě čaruje a prochází úrovněmi. 
				</p>
				<p>
					Pro hraní hry je potřeba být zaregistrovaný na webu, počítač/televize s velkou obrazovkou, mobilní telefon s nainstalovanou aplikací a karetní set. Počítač/televize slouží jako zobrazovadlo a mobilní aplikace jako ovladač, kterým si uživatel volí, která úroveň chce hrát a následně fotí svoje řešení úrovně.
				</p>
				<p>
					Tento projekt je rozdělen do dvou částí: programátorská a grafická. Tato část je programátorská. Grafickou část vytvářel{` `}
					<Link href="https://b2018kahojo.delta-www.cz/maturita" passHref>
						<a>Josef Kahoun</a>
					</Link>
					.
				</p>
				<hr className="my-2" />
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
