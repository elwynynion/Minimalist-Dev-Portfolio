import Link from "next/link"
import Head from "next/head"

export default function Blog(props) {
    return (
        <>
            <Head>
                <title>Coming Soon</title>
            </Head>
            <div className='tw-mt-12 tw-text-center'>
                <h1 className='tw-mb-2 tw-font-Inter tw-font-bold tw-text-2xl md:tw-text-6xl'>Coming Soon</h1>
                <Link href='./'>
                    <a className='tw-font-Inter tw-text-blue-500 tw-text-lg hover:tw-text-blue-600'>
                        Go back
                    </a>
                </Link>
            </div>
        </>

    )
}