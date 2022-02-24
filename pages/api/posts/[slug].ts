import { NextApiRequest, NextApiResponse } from 'next';
import { getPostBySlug } from '../../../mock/posts';
import { Post } from '../../../types/post';

interface ExtendedNextApiRequest extends NextApiRequest {
	query: {
		slug: string;
	};
}
const handler = (req: ExtendedNextApiRequest, res: NextApiResponse<Post>) => {
	const { slug } = req.query;
	const post = getPostBySlug(slug);
	if (!post) return res.status(404);
	return res.status(200).json(post);
};

export default handler;
