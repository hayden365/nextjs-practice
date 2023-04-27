import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<section className="max-w-5xl mx-auto">
			<div className="w-50 h-40 border-4 border-uRed"></div>
		</section>
	);
}
