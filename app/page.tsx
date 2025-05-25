import QRCodeDisplay from './components/QRCodeDisplay';

export default function Home() {

	return (
		<main className='p-10'>
			<h1 className='text-2xl font-bold mb-4'>QR Code for Your URL</h1>
			<QRCodeDisplay  />
		</main>
	);
}
