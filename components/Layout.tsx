import { ReactChild, ReactChildren } from 'react';
import Header from './Header';

interface AuxProps {
	children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}
const Layout = ({ children }: AuxProps) => {
	return (
		<div className="mx-auto max-w-7xl">
			<Header />
			<main>{children}</main>
		</div>
	);
};

export default Layout;
