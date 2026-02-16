import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default function Layout(props) {
	return (
		<div>
			<Navbar />
			<div className='container'>{props.children}</div>
			<Footer />
		</div>
	);
}
