import React from "react";
import LatestArticles from "./LatestArticles";
import TagCloud from "./TagCloud";
import FollowMe from "./FollowMe";
import AboutMe from "./AboutMe";

type Props = {};

const Footer = (props: Props) => {
	return (
		<footer className="max-w-5xl mx-auto">
			<section className="grid xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-4">
				<LatestArticles />
				<TagCloud />
				<FollowMe />
				<AboutMe />
			</section>
		</footer>
	);
};

export default Footer;
