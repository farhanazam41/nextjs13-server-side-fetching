import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

interface PostList {
	posts: Post[];
}

type Index = number;

const fetchPosts = async () => {
	try {
		const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
			cache: "no-store",
		});
		return await res.json();
	} catch (error) {
		throw new Error("error");
	}
};

export default async function Home() {
	const posts = await fetchPosts();

	return (
		<main className={styles.main}>
			<h1>Posts Lists</h1>
			{posts.slice(0, 10).map((post: Post, index: Index) => {
				return <h2 key={index}>{post.title}</h2>;
			})}
		</main>
	);
}
