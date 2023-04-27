import React from "react";

type Props = {
	title: string;
	children: React.ReactNode;
};

export default function BoxSkeleton({ title, children }: Props) {
	return (
		<div className="flex flex-col w-full">
			<div className="flex justify-start">
				<h4 className="text-2xl tracking-tight text-primary font-bold min-w-fit">
					{title}
				</h4>
				<span className="content-none border-b-2 w-full ml-2 border-uRed my-auto"></span>
			</div>
			<div>{children}</div>
		</div>
	);
}
