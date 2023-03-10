import NavBar from "@/Components/NavBar";

export default function A00({ Component, pageProps }) {
	return (
		<>
			<NavBar>
				<Component {...pageProps} />
				<style jsx global>{`
					a {
						color: white;
					}
				`}</style>
			</NavBar>
		</>
	);
}
