import CarouselPosts from "@/components/CarouselPosts";
import FeaturedPosts from "@/components/FeaturedPosts";
import Hero from "@/components/Hero";

export default function HomePage() {
	return (
		<section>
			<Hero />
			{/**서버 컴포넌트 내에서 page와 layout 상단에서는 async/await를 사용할 수
			있지만 컴포넌트내에서 다른 컴포넌트에서 async/await를 사용하고 가져오는
  경우에는 에러가 발생한다. */}
			{/*@ts-expect-error Server Component*/}
			<FeaturedPosts />
			{/*@ts-expect-error Server Component*/}
			<CarouselPosts />
		</section>
	);
}
