import Hero from "@/components/Hero";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Me",
	description: "Hayden 커리어 소개",
};

const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2";
export default function AboutPage() {
	return (
		<>
			<Hero />
			<section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
				<h2 className={TITLE_CLASS}>Who Am I?</h2>
				<p>
					프론트엔드 개발자 <br />
					열정 넘치는 병아리 개발자
				</p>
				<h2 className={TITLE_CLASS}>Study</h2>

				<p>
					한국외국대학교 졸업 (-2023.08)
					<br />
					패스트캠퍼스 핀테크 프론트엔드 개발자 양성과정 수료 (-2023.04)
				</p>
				<h2 className={TITLE_CLASS}>Skills</h2>
				<p>
					React, Nextjs
					<br />
					Git, CleanCode
				</p>
			</section>
		</>
	);
}
