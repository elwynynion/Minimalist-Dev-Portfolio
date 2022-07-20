import { MdCopyright } from 'react-icons/md'
import Link from 'next/link';
const Footer = () => {
    return (
        <footer className='tw-flex tw-justify-center lg:tw-text-left tw-mt-24'>
            <div className='tw-p-3'>
                <p className='tw-font-Spline_Mono tw-font-bold tw-text-sm tw-text-gray-500'>
                    &copy; 2022 All rights reserved. &mdash; {" "}
                    <Link href='/'>
                        <a target='_blank' className='tw-transition-all tw-duration-150 hover:tw-text-black'>
                            Designed & Coded by Elwyn Ynion
                        </a>
                    </Link>
                </p>
            </div>
        </footer >
    )
}

export default Footer;