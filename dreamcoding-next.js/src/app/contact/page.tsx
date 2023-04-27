import ContactForm from "@/components/ContactForm";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Me",
	description: "Hayden에게 메일 보내기",
};

const LINKS = [
	{ icon: <AiFillGithub />, url: "https://github.com/hayden365" },
	{
		icon: <AiFillLinkedin />,
		url: "https://www.linkedin.com/in/%ED%98%9C%EC%A7%80-%EA%B3%B5-25bb85248/",
	},
];

export default function ContactPage() {
	return (
		<section className="flex flex-col items-center">
			<h2 className="text-3xl font-bold my-2">Contact Me</h2>
			<p>ysmh100@gmail.com</p>
			<ul className="flex gap-4 my-2">
				{LINKS.map((link, index) => (
					<a
						key={index}
						href={link.url}
						target="_blank"
						rel="noreferrer"
						className="text-5xl hover:text-yellow-400"
					>
						{link.icon}
					</a>
					/**페이지 내에서 이동할 때는 link를 사용하지만 외부의 url로 이동할 대에는 a태그를 사용합니다. */
				))}
			</ul>
			<h2 className="text-3xl font-bold my-8">Or Send me an email</h2>
			<ContactForm />
		</section>
	);
}
