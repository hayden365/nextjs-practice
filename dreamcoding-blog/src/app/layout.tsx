import Header from "@/components/Header";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/Footer";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
	title: {
		default: "혜지 블로그",
		template: "혜지 블로그 | %s",
	},
	description: "개발자 혜지의 블로그",
	icons: "/favicon.ico",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={sans.className}>
			<body className="flex flex-col w-full max-w-screen-2xl mx-auto">
				<Header />
				<main className="grow">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
