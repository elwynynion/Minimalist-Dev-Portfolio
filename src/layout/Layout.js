import classNames from 'classnames';
import Head from 'next/head';
import Nav from './Nav'
import Footer from './Footer'
import styles from '../styles/Home.module.css'


export default function Layout({ children, title, description, type, image, date, author }) {
	const meta = {
		title: (title && `${title} ― Developer, Designer and Gamer`) ?? (getNodeText(heading) && `${getNodeText(heading)} ― Developer, Designer and Gamer`) ?? "Developer, Designer and Gamer",
		description: description ?? "Elwyn is a full-stack developer, UI/UX designer.",
		type: type ?? "website",
		image,
		date,
	}
	return (
		<>
			<Head>
				<title>{meta.title}</title>
				<meta name="robots" content="follow, index" />
				<meta content={meta.description} name="description" />
				<meta property="og:type" content={meta.type} />
				<meta property="og:site_name" content={meta.title} />
				<meta property="og:description" content={meta.description} />
				<meta property="og:title" content={meta.title} />
				<meta property="og:image" content={meta.image} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@elwyn002" />
				<meta name="twitter:title" content={meta.title} />
				<meta name="twitter:description" content={meta.description} />
				<meta name="twitter:image" content={meta.image} />
				{meta.date && <meta property="article:published_time" content={meta.date} />}
			</Head>
			<main className={styles.container}>
				<Nav />
				{children}
				<Footer />
			</main>
		</>
	)
}