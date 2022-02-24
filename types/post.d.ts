export interface Post {
	id: number;
	author: {
		name: string;
		avatar: string;
	};
	title: string;
	slug: string;
	description: string;
	image: string;
	createdAt: string;
	body: object[];
}
