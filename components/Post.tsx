import Link from 'next/link';
import React from 'react';
import { Post as PostType } from '../types/post';
const Post: React.FC<{ data: PostType }> = ({ data }) => {
	const { id, author, title, slug, description, image } = data;
	return (
		<Link href={`/post/${slug}`}>
			<div className="group cursor-pointer overflow-hidden rounded-lg border">
				<img
					className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
					src={image}
					alt=""
				/>
				<div className="flex justify-between bg-white p-5">
					<div>
						<p className="text-lg font-bold"> {title}</p>
						<p className="text-xs">
							{description} by {author.name}
						</p>
					</div>

					<img className="h-12 w-12 rounded-full" src={author.avatar} alt="" />
				</div>
			</div>
		</Link>
	);
};

export default Post;
