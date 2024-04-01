import type { Metadata, Viewport } from 'next'
import '../scss/main.scss'

export const viewport: Viewport = {
	themeColor: '#ffffff',
}

export const metadata: Metadata = {
	title: 'Telephone Number Validator | freeCodeCamp',
	description: 'This is a Telephone Number Validator, a freecodecamp assignment',
	manifest: '/manifest.json',
	robots: 'index, follow',
	authors: [{ name: 'FedeHide' }],
	keywords: ['Telephone Number', 'Validator', 'freeCodeCamp'],
	icons: {
		apple: '/apple-touch-icon.png',
		icon: '/favicon.ico',
	},
	openGraph: {
		url: 'https://phone-number-validator-chi.vercel.app/',
		type: 'website',
		title: 'Telephone Number Validator | freeCodeCamp',
		description: 'This is a Telephone Number Validator, a freecodecamp assignment',
		images: [
			'https://raw.githubusercontent.com/FedeHide/phone-number-validator/main/public/assets/phone-number-validator-screenshot.webp' /* cambiar */,
		],
	},
	twitter: {
		card: 'summary_large_image',
		site: 'https://phone-number-validator-chi.vercel.app/',
	},
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
	return (
		<html lang="en">
			<head>
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-title" content="Telephone Number Validator" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
			</head>
			<body>
				<main className="flex-container">{children}</main>
			</body>
		</html>
	)
}
