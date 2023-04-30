import React from "react";
import { getAllPosts } from "@/service/posts";
import FilterablePosts from "@/components/FilterablePosts";
import { Metadata } from "next";
import { Post } from "@/service/posts";

export const metadata: Metadata = {
	title: "All Posts",
	description: "풀스택 관련 블로그 ",
};

export default async function PostsPage() {
	const posts: Array<Post> = await getAllPosts();
	const categories = [...new Set(posts.map(post => post.category))];

	return (
		<>
			<FilterablePosts posts={posts} categories={categories} />
		</>
	);
}
