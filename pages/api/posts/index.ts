// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getPosts } from '../../../mock/posts';
import { Post } from '../../../types/post';

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Array<Post>>
) {
	res.status(200).json(getPosts());
}
