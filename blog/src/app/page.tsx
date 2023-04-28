import Image from "next/image";
import RightSection from "@/components/RightSection";
import Scroll from "@/components/Scroll";


export default function Home() {
	return (
		<div className="flex max-w-5xl mx-auto">
			<Scroll />
			<RightSection />
		</div>
	);
}
