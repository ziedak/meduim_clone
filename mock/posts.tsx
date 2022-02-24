import faker from '@faker-js/faker';
const body2 =
	'<h1>Ab magni fugiat et expedita quaerat sed minima culpa. </h1><p>Lorem ipsum dolor sit amet. Qui cupiditate corporis est reiciendis enim hic debitis eius. Ut laboriosam rerum qui voluptas veniam non quos laborum sit eligendi ratione. Est suscipit consequuntur ut tenetur sequi qui ipsam accusamus est quia totam aut consequatur inventore id maxime dolorum. In deleniti quibusdam <a href="https://www.loremipzum.com" target="_blank">Nam exercitationem qui incidunt minima et voluptatem cupiditate</a> aut galisum rerum. Qui assumenda animi sed voluptatum fugiat ut assumenda consequuntur non aspernatur aperiam et assumenda voluptatem At atque iste in unde voluptas. </p><ul><li>Qui Quis dolorum  recusandae molestias. </li><li>Qui provident nobis in culpa placeat? </li><li>Et dicta iusto et numquam aliquam. </li><li>Et laborum voluptatem et delectus blanditiis. </li></ul><h2>Eos recusandae ipsa aut molestiae voluptatibus. </h2><p>Est harum incidunt et ullam ipsam qui aperiam rerum id inventore quia. Sed pariatur laboriosam <a href="https://www.loremipzum.com" target="_blank">Est voluptatem est cumque iure aut aperiam rerum</a>! Id quia blanditiis et voluptate minus ut dolor ratione non adipisci minima ut esse voluptatem ut alias dolores. Id laboriosam dignissimos ea laboriosam distinctio qui dolorem repudiandae. Est sapiente quia ut nisi aliquam sed laudantium sequi aut magnam cupiditate a laboriosam architecto. Et suscipit veritatis aut illo voluptatem aut autem expedita ut officia possimus. Ad provident enim ex mollitia labore est excepturi officiis. </p><h3>Qui corrupti saepe quo ipsum quibusdam et expedita assumenda. </h3><p>Et dolorum assumenda est voluptates totam et tenetur iure. Quo neque molestiae et tenetur repudiandae qui repellendus consequatur nam fugiat officia et reprehenderit repellat id corrupti odio. Vel blanditiis voluptatem et reiciendis voluptates quo ipsum tenetur sit nihil explicabo vel rerum soluta! Et harum maxime <a href="https://www.loremipzum.com" target="_blank">Sit tenetur a pariatur facilis est voluptatibus voluptas</a>. Eos voluptatem iste est vero rerum vel quia fugiat ea voluptas accusantium est voluptas commodi. Sit nobis necessitatibus eos sint voluptas 33 dolores voluptas est quaerat nulla in ipsam eveniet. Vel repellendus aperiam 33 enim officiis sit enim veniam nam corrupti velit. Non repellendus culpa aut quia ipsa vel iusto explicabo et aliquam dolor eum explicabo sint. Ut culpa fuga et fugit repellat ut quaerat suscipit ad maxime odit. </p>';

const body = [
	{
		_type: 'block',
		markDefs: [],
		style: 'h1',
		children: [
			{
				_type: 'span',
				marks: [],
				text: 'Ab magni fugiat et expedita quaerat sed minima culpa.',
			},
		],
	},
	{
		_type: 'block',
		markDefs: [
			{
				_key: '1ad612da902a',
				_type: 'link',
				href: 'https://www.loremipzum.com',
			},
		],
		style: 'normal',
		children: [
			{
				_type: 'span',
				marks: [],
				text: 'Lorem ipsum dolor sit amet. Qui cupiditate corporis est reiciendis enim hic debitis eius. Ut laboriosam rerum qui voluptas veniam non quos laborum sit eligendi ratione. Est suscipit consequuntur ut tenetur sequi qui ipsam accusamus est quia totam aut consequatur inventore id maxime dolorum. In deleniti quibusdam ',
			},
			{
				_type: 'span',
				marks: ['1ad612da902a'],
				text: 'Nam exercitationem qui incidunt minima et voluptatem cupiditate',
			},
			{
				_type: 'span',
				marks: [],
				text: ' aut galisum rerum. Qui assumenda animi sed voluptatum fugiat ut assumenda consequuntur non aspernatur aperiam et assumenda voluptatem At atque iste in unde voluptas.',
			},
		],
	},
	{
		_type: 'block',
		markDefs: [],
		style: 'normal',
		level: 1,
		listItem: 'bullet',
		children: [
			{
				_type: 'span',
				marks: [],
				text: 'Qui Quis dolorum recusandae molestias.',
			},
		],
	},
	{
		_type: 'block',
		markDefs: [],
		style: 'normal',
		level: 1,
		listItem: 'bullet',
		children: [
			{
				_type: 'span',
				marks: [],
				text: 'Qui provident nobis in culpa placeat?',
			},
		],
	},
	{
		_type: 'block',
		markDefs: [],
		style: 'normal',
		level: 1,
		listItem: 'bullet',
		children: [
			{
				_type: 'span',
				marks: [],
				text: 'Et dicta iusto et numquam aliquam.',
			},
		],
	},
	{
		_type: 'block',
		markDefs: [],
		style: 'normal',
		level: 1,
		listItem: 'bullet',
		children: [
			{
				_type: 'span',
				marks: [],
				text: 'Et laborum voluptatem et delectus blanditiis.',
			},
		],
	},
	{
		_type: 'block',
		markDefs: [],
		style: 'h2',
		children: [
			{
				_type: 'span',
				marks: [],
				text: 'Eos recusandae ipsa aut molestiae voluptatibus.',
			},
		],
	},
	{
		_type: 'block',
		markDefs: [
			{
				_key: '6557b89242c4',
				_type: 'link',
				href: 'https://www.loremipzum.com',
			},
		],
		style: 'normal',
		children: [
			{
				_type: 'span',
				marks: [],
				text: 'Est harum incidunt et ullam ipsam qui aperiam rerum id inventore quia. Sed pariatur laboriosam ',
			},
			{
				_type: 'span',
				marks: ['6557b89242c4'],
				text: 'Est voluptatem est cumque iure aut aperiam rerum',
			},
			{
				_type: 'span',
				marks: [],
				text: '! Id quia blanditiis et voluptate minus ut dolor ratione non adipisci minima ut esse voluptatem ut alias dolores. Id laboriosam dignissimos ea laboriosam distinctio qui dolorem repudiandae. Est sapiente quia ut nisi aliquam sed laudantium sequi aut magnam cupiditate a laboriosam architecto. Et suscipit veritatis aut illo voluptatem aut autem expedita ut officia possimus. Ad provident enim ex mollitia labore est excepturi officiis.',
			},
		],
	},
	{
		_type: 'block',
		markDefs: [],
		style: 'h3',
		children: [
			{
				_type: 'span',
				marks: [],
				text: 'Qui corrupti saepe quo ipsum quibusdam et expedita assumenda.',
			},
		],
	},
	{
		_type: 'block',
		markDefs: [
			{
				_key: 'adf9342f71c8',
				_type: 'link',
				href: 'https://www.loremipzum.com',
			},
		],
		style: 'normal',
		children: [
			{
				_type: 'span',
				marks: [],
				text: 'Et dolorum assumenda est voluptates totam et tenetur iure. Quo neque molestiae et tenetur repudiandae qui repellendus consequatur nam fugiat officia et reprehenderit repellat id corrupti odio. Vel blanditiis voluptatem et reiciendis voluptates quo ipsum tenetur sit nihil explicabo vel rerum soluta! Et harum maxime ',
			},
			{
				_type: 'span',
				marks: ['adf9342f71c8'],
				text: 'Sit tenetur a pariatur facilis est voluptatibus voluptas',
			},
			{
				_type: 'span',
				marks: [],
				text: '. Eos voluptatem iste est vero rerum vel quia fugiat ea voluptas accusantium est voluptas commodi. Sit nobis necessitatibus eos sint voluptas 33 dolores voluptas est quaerat nulla in ipsam eveniet. Vel repellendus aperiam 33 enim officiis sit enim veniam nam corrupti velit. Non repellendus culpa aut quia ipsa vel iusto explicabo et aliquam dolor eum explicabo sint. Ut culpa fuga et fugit repellat ut quaerat suscipit ad maxime odit.',
			},
		],
	},
];
const postList = [...Array(5)].map((_, idx: number) => ({
	id: idx,
	author: {
		name: faker.fake('{{name.lastName}} {{name.firstName}}'),
		avatar: faker.image.avatar(),
	},
	title: faker.lorem.words(3),
	slug: `my_fake_slug_${idx}`,
	description: faker.lorem.lines(),
	image: faker.image.image(640, 480, true),
	body,
	createdAt: new Date(
		faker.date.between('2020-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z')
	)
		.toLocaleDateString()
		.toString(),
}));
export const getPosts = () => postList;

export const getPostById = (id: number) =>
	postList.filter((post) => post.id === id);

export const getPostBySlug = (slug: string) =>
	postList.find((post) => post.slug === slug);
