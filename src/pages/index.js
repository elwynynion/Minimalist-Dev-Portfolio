import Layout from "../layout/Layout";
import Image from "next/image";
import Twemoji from "../components/Twemoji";
import Link from "next/link";
import { Popover, Button, Text, Card } from "@nextui-org/react";
import { projects } from "../data/config";
import { FiArrowUpRight, FiGithub, FiExternalLink } from "react-icons/fi";
import { TiMediaRecordOutline } from "react-icons/ti";
import { GoMarkGithub } from "react-icons/go";
import { FaSpotify, FaProductHunt, FaInstagram } from "react-icons/fa";
import { BsFolder } from "react-icons/bs";
export default function Home(props) {

    return (
        <Layout title="Elwyn">
            <div className='md:tw-mt-24 tw-mt-12'>
                <Text className='tw-font-Inter tw-m-0 tw-text-4xl md:tw-text-6xl lg:tw-text-7xl tw-font-semibold tw-leading-tight'>
                    Hi, <br />
                    I'm Elwyn Ynion<br />
                    I build things for the web.
                </Text>
                <Text className='tw-font-Inter tw-mt-5 tw-text-xl md:tw-text-1xl md:tw-w-4/5'>
                    I am a Full-Stack Web Developer, currently graduating from SHS. Developing, managing, and creating
                    {" "}
                    <Link href='https://github.com/elwynynion/ComfyDis'>
                        <a target='_blank' className='tw-inline-flex adq1 tw-text-blue-500 hover:tw-text-gray-700'>
                            community forums
                            <FiArrowUpRight />
                        </a>
                    </Link>
                    {" "}
                    are things that fascinate me. I spend my spare time working on various
                    {" "}
                    <Link href='#projects'>
                        <a className='tw-inline-flex adq1 tw-text-blue-500 hover:tw-text-gray-700'>
                            projects.
                            <FiArrowUpRight />
                        </a>
                    </Link>
                    {" "}
                </Text>
            </div>

            <div className='tw-mt-16' id='about'>
                <h3 className="tw-font-Inter tw-text-2xl tw-font-semibold">
                    <Twemoji emoji="😎" />
                    <span className="tw-ml-2">About me</span>
                    <p className="tw-text-md tw-mt-3 tw-font-Inter tw-leading-relaxed md:tw-w-4/5 md:tw-text-lg">
                        I’m Elwyn Ynion, a full-stack Web Developer and UI/UX Designer, and I enjoy learning new skills as time goes on. I am keen on using my different experiences to solve complex issues and design engaging experiences. I honed my skills in product design, technical writing, web programming, and app development. I build a website with HTML, CSS, PHP and JavaScript and design using Bootstrap, Bulma and Tailwind and now I build a website using NextJS. When I’m not coding, I’m playing online games or doing some personal stuff.
<br /><br />
                        Here are a few technologies I&#8217;ve been working with recently:
                    </p>
                    <div className='tw-grid tw-grid-cols-2 tw-mt-2 md:tw-w-96'>
                        <div>
                            <span className='tw-flex '>
                                <TiMediaRecordOutline className='tw-place-self-center' />
                                <p>Next.js</p>
                            </span>
                            <span className='tw-flex '>
                                <TiMediaRecordOutline className='tw-place-self-center' />
                                <p>React</p>
                            </span>
                            <span className='tw-flex '>
                                <TiMediaRecordOutline className='tw-place-self-center' />
                                <p>Node.js</p>
                            </span>
                        </div>
                        <div>
                            <span className='tw-flex '>
                                <TiMediaRecordOutline className='tw-place-self-center' />
                                <p>Tailwind</p>
                            </span>
                            <span className='tw-flex '>
                                <TiMediaRecordOutline className='tw-place-self-center' />
                                <p>Figma</p>
                            </span>
                        </div>
                    </div>
                </h3>
            </div>

            <div className='tw-mt-16' id='projects'>
                <h3 className="tw-font-Inter tw-text-2xl tw-font-semibold">
                    <Twemoji emoji="⚒️" />
                    <span className="tw-ml-2">Some Things I&#8217;ve Built</span>
                </h3>
                <Link href='/'>
                    <a className='tw-inline-block tw-text-lg tw-font-Inter adq1 tw-text-blue-500 hover:tw-text-gray-700'>View Archive</a>
                </Link>

                <div className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4 tw-auto-rows-max tw-mt-5">
                    {projects.projects.map((item, index) => {
                        return (
                            <div key={index} >
                                <Link href={item.link} className='tw-rounded-xl'>
                                    <a target='_blank'>
                                        <div className='tw-h-full tw-col-span-1 tw-flex tw-flex-col tw-bg-gray-50 tw-p-7 tw-mb-5 tw-rounded-xl hover:tw-border-2 tw-border-2 tw-border-transparent hover:tw-border-gray-300 tw-border-dashed tw-transform tw-transition-all hover:tw-scale-[1.02]'>
                                            <BsFolder className='tw-text-4xl' />
                                            <h2 className='tw-text-2xl tw-leading-tight tw-mt-5 tw-font-Inter tw-font-semibold'>
                                                {item.title}
                                            </h2>
                                            <p className='tw-font-Inter tw-text-md tw-mt-3 tw-leading-snug tw-text-gray-700'>{item.description}</p>

                                            <div className='tw-mt-auto'>
                                                <p className='tw-font-mono tw-text-sm tw-text-md tw-mt-3 tw-text-gray-700'>{item.tag}</p>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className='tw-mt-16'>
                <h3 className="tw-font-Inter tw-text-2xl tw-font-semibold">
                    <Twemoji emoji="📅" />
                    <span className="tw-ml-2">Stay up-to-date</span>
                </h3>
                <p className="tw-text-md tw-mt-3 tw-font-Inter tw-leading-relaxed md:tw-w-4/5 md:tw-text-lg">
                    <strong>Hint:</strong> I&#8217;m especially active on Instagram and
                    {" "}
                    <Popover placement='top' isBordered>
                        <Popover.Trigger>
                            <a className='tw-inline-flex adq1 tw-text-blue-500 hover:tw-text-gray-700'>
                                Discord.
                                <FiArrowUpRight />
                            </a>
                        </Popover.Trigger>
                        <Popover.Content>
                            <div className="tw-flex tw-items-center tw-p-3">
                                <Image
                                    src='/me.jpg'
                                    alt='Elwyn Ynion'
                                    width={68}
                                    height={68}
                                    className='tw-rounded-full'
                                ></Image>
                                <div className="tw-ml-3">
                                    <h5 className="tw-text-xl tw-font-semibold tw-font-Inter">
                                        Elwyn
                                        <span className='tw-text-gray-400'>#0010</span>
                                    </h5>
                                    <Link href='https://discord.gg/q74Qg8Mx'>
                                        <a target='_blank' className='tw-text-lg tw-text-blue-600 tw-font-Inter hover:tw-text-blue-800'>Join Server</a>
                                    </Link>
                                </div>
                            </div>
                        </Popover.Content>
                    </Popover>
                </p>
                <div className='tw-flex tw-flex-row tw-mt-5 tw-gap-x-4'>
                    <Link href='https://instagram.com/e.lwyn'>
                        <a target='_blank' className='tw-rounded-xl tw-flex-none tw-bg-gray-100 tw-p-3 tw-text-2xl tw-text-black tw-ring-zinc-500 tw-transition-all tw-duration-150 hover:tw-ring-2 tw-ring-offset-2'>
                            <FaInstagram />
                        </a>
                    </Link>
                    <Link href='https://github.com/elwynynion'>
                        <a target='_blank' className='tw-rounded-xl tw-flex-none tw-bg-gray-100 tw-p-3 tw-text-2xl tw-text-black tw-ring-zinc-500 tw-transition-all tw-duration-150 hover:tw-ring-2 tw-ring-offset-2'>
                            <GoMarkGithub />
                        </a>
                    </Link>
                    <Link href='https://open.spotify.com/user/31ksp2ytumgcqgicoctwm6oicht4'>
                        <a target='_blank' className='tw-rounded-xl tw-flex-none tw-bg-gray-100 tw-p-3 tw-text-2xl tw-text-black tw-ring-zinc-500 tw-transition-all tw-duration-150 hover:tw-ring-2 tw-ring-offset-2'>
                            <FaSpotify />
                        </a>
                    </Link>
                    <Link href='https://www.producthunt.com/@elwynynion'>
                        <a target='_blank' className='tw-rounded-xl tw-flex-none tw-bg-gray-100 tw-p-3 tw-text-2xl tw-text-black tw-ring-zinc-500 tw-transition-all tw-duration-150 hover:tw-ring-2 tw-ring-offset-2'>
                            <FaProductHunt />
                        </a>
                    </Link>
                </div>
            </div>

        </Layout >
    )
}
