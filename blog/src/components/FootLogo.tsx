import React from "react";
import Link from "next/link";

export default function FootLogo() {
	return (
		<div className="w-full mx-auto">
			<div className="flex flex-col justify-center text-uBlue w-1/3 mx-auto">
				<h2 className="text-5xl font-bold mx-auto">
					<Link href="/">
						<strong className="text-uRed">M</strong>aktub
					</Link>
				</h2>
				<span className="font-serif mx-auto">Using NextJS</span>
			</div>
		</div>
	);
}
