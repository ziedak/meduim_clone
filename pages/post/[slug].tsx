import { GetStaticProps } from 'next';
import React from 'react';
import PortableText from 'react-portable-text';
import Comment from '../../components/Comment';
import { Post as PostType } from '../../types/post';
const Post: React.FC<{ post: PostType }> = ({ post }) => {
	const { id, author, title, slug, description, body, image, createdAt } = post;

	return (
		<div className="px-5 lg:px-0">
			<img className="h-60 w-full object-cover" src={image} alt="" />
			<article>
				<h1 className="mt-10 mb-3 text-3xl">{title}</h1>
				<h2 className="mb-2 text-xl font-light text-gray-500">{description}</h2>
				<div className="flex items-center space-x-2">
					<img className="h-10 w-10 rounded-full" src={author.avatar} alt="" />
					<p className="text-sm font-extralight">
						Blog post by <span className="text-green-600">{author.name}</span> -
						Published at {createdAt}
					</p>
				</div>
				<div className="my-5">
					<PortableText
						content={body}
						// Optionally override marks, decorators, blocks, etc. in a flat
						// structure without doing any gymnastics
						serializers={{
							h1: (props: any) => (
								<h1 className="my-5 text-2xl font-bold" {...props} />
							),
							h2: (props: any) => (
								<h2 className="my-5 text-2xl font-bold" {...props} />
							),
							li: ({ children }: any) => (
								<li className="ml-7 list-disc">{children}</li>
							),
							link: ({ href, children }: any) => (
								<a href={href} className="text-blue-500 hover:underline">
									{children}
								</a>
							),
						}}
					/>
				</div>
			</article>
			<hr className="mx-auto max-w-lg border-yellow-500" />
			<Comment idPost={id} />
		</div>
	);
};

export default Post;
export const getStaticPaths = async () => {
	const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`).then(
		(res) => res.json()
	);
	//console.log('data', data)
	const paths = data.map((post: PostType) => ({
		params: {
			slug: post.slug,
		},
	}));

	return { paths, fallback: false };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
	//   console.log('params', params)
	const post: PostType = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/posts/${params?.slug}`
	).then((res) => res.json());

	if (!post) return { notFound: true };

	// Pass post data to the page via props
	return {
		props: { post },
		revalidate: 60, //after 60 sec, it will update the old cached version
	};
};
