import Image from "next/image";
import React from "react";
import profileImage from "../../public/images/profile.png";
import Link from "next/link";

export default function Hero() {
	return (
		<section className="text-center">
			<Image
				className="rounded-full mx-auto"
				src={profileImage}
				alt="Picture of the author"
				width={200}
				height={250}
			/>
			<h2 className="text-3xl font-bold mt-2">{"Hi, I'm Hyeji"}</h2>
			<h3 className="text-xl font-semibold">Front-end Engineer</h3>
			<p>재미로 코딩하는 사람, 재미코딩</p>
			<Link href="/contact">
				<button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">
					Contact Me
				</button>
			</Link>
		</section>
	);
}
