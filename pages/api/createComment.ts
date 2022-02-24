import type { NextApiRequest, NextApiResponse } from 'next';

export default function createComment(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { id, name, email, comment } = JSON.parse(req.body);
	try {
		// add your comment to db
		return res.status(200).json({ message: 'Comment submitted successfully' });
	} catch (err) {
		return res
			.status(500)
			.json({ message: "Couldn'\t submit commit submitted successfully", err });
	}
}
