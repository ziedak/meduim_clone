import type { NextPage } from 'next';
import Head from 'next/head';
import Banner from '../components/banner';
import Posts from '../components/Posts';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Meduim Clone by Zied ak</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Banner />
			<Posts />
		</div>
	);
};

export default Home;
