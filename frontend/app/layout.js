
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/navbar'
import FeaturesBar from '@/components/features/features';
import NewsletterBar from '@/components/newsletter/newsletter';
import Footer from '@/components/footer/footer';
import { CartProvider } from '@/lib/context/CartContex';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Sklep Sportowy',
	description: 'Strona Sklepu Sportowego',
}


export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className}`}>
				<Navbar />
				<main>
					<CartProvider>
						{children}
					</CartProvider>
				</main>
				<footer>
					<FeaturesBar />
					<NewsletterBar />
					<Footer />
				</footer>
			</body>
		</html>
	)
}
