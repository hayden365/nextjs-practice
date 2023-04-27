import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faTwitter,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faRss, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
	return (
		<header>
			<div className="max-w-5xl flex flex-col mx-auto">
				<section className="flex pt-20">
					<nav className="flex gap-4 items-center w-1/3">
						<a href="https://ko-kr.facebook.com/">
							<FontAwesomeIcon
								icon={faFacebookF}
								size="xl"
								className="text-facebook"
							/>
						</a>
						<a href="https://twitter.com">
							<FontAwesomeIcon
								icon={faTwitter}
								size="xl"
								className="text-twitter"
							/>
						</a>
						<a>
							<FontAwesomeIcon
								icon={faInstagram}
								size="xl"
								className="text-instargram"
							/>
						</a>
						<a>
							<FontAwesomeIcon icon={faRss} size="lg" className="text-rss" />
						</a>
					</nav>
					<h1 className="flex justify-center text-5xl font-bold text-uBlue w-1/3">
						<Link href="/">
							<strong className="text-uRed">M</strong>aktub
						</Link>
					</h1>
					<div className="flex w-1/3 justify-end">
						<div className="w-11 h-11 rounded-full bg-uRed flex items-center">
							<FontAwesomeIcon
								icon={faMagnifyingGlass}
								style={{ color: "white" }}
								className="mx-auto"
							/>
						</div>
					</div>
				</section>
				<ul className="flex gap-4 mx-auto my-8">
					<li>Home</li>
					<li>Header Styles</li>
					<li>Post Features</li>
					<li>#Tag</li>
					<li>Author</li>
					<li>Features</li>
					<li>Contact</li>
				</ul>
			</div>
		</header>
	);
}
