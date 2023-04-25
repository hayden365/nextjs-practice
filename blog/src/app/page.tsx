import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<section className="flex min-h-screen flex-col items-center justify-between p-24">
			<p>산스예요?</p>
		</section>
	);
}
