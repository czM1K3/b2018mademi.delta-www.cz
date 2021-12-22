import React, { FC } from "react";
import Link from "next/link";

type ButtonProps = {
	href?: string;
};

const Button: FC<ButtonProps> = ({ children, href }) => {
	if (href) return (
		<Link href={href} passHref>
			<a>
				<div className="btn btn-primary">
					{children}
				</div>
			</a>
		</Link>
	)
	return <div className="btn btn-primary">{children}</div>;
};

export default Button;
