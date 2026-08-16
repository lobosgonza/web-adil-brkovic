import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';
import Script from 'next/script';

export const metadata = {
	metadataBase: new URL('https://estudiobrkovic.cl'),
	title: {
		default: 'Estudio Jurídico Brkovic | Abogado & Consultor Jurídico',
		template: '%s | Estudio Jurídico Brkovic',
	},
	description: 'Treinta años de trayectoria dedicados a la defensa técnica y ética en casos de alta complejidad, justicia y derechos humanos en Chile.',
	openGraph: {
		type: 'website',
		url: 'https://estudiobrkovic.cl',
		siteName: 'Estudio Jurídico Brkovic',
		images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='es' data-scroll-behavior='smooth'>
			<head>
				<link href='https://fonts.googleapis.com/css2?family=Gabarito:wght@400;600&family=Noto+Sans:wght@300;400;600&display=swap' rel='stylesheet' />
			</head>
			<body className='flex flex-col min-h-screen antialiased font-sans'>
				{/* Google Tag Manager */}
				<Script id='gtm-script' strategy='afterInteractive'>
					{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NR3F5T3M');`}
				</Script>

				<Navbar />
				<main className='flex-grow'>{children}</main>
				<WhatsAppCTA />
				<Footer />
			</body>
		</html>
	);
}
