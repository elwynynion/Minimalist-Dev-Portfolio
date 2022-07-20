import Image from "next/image";
import Link from "next/link";
import { CgArrowTopRightO } from "react-icons/cg";
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";

const Nav = (props) => {
  return (
    <nav className="tw-z-40 tw-bg-white tw-mx-auto tw-flex tw-items-center tw-justify-between tw-border-b tw-border-gray-300 tw-py-1">
      <Link className="tw-cursor-pointer" href="/">
        <div
          className="tw-cursor-pointer"
          style={{ position: "relative", width: "100px", height: "50px" }}
        >
          <Image
            alt="Ynion"
            src="/logo.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </Link>

      <ul className="tw-flex tw-items-center tw-space-x-3 tw-text-sm tw-font-medium tw-text-gray-900">
        <li className="tw-mt-2 tw-hidden md:tw-block">
          <Link href="/blog">
            <a className="tw-rounded-3xl tw-px-4 tw-py-2 tw-font-Inter tw-font-medium tw-text-gray-900 tw-transition tw-duration-500 tw-ease-in-out hover:tw-bg-black hover:tw-text-white">
              Blog
            </a>
          </Link>
        </li>

        <li className="tw-mt-2 tw-hidden md:tw-block">
          <Link href="#projects">
            <a className="tw-rounded-3xl tw-px-4 tw-py-2 tw-font-Inter tw-font-medium tw-text-gray-900 tw-transition tw-duration-500 tw-ease-in-out hover:tw-bg-black hover:tw-text-white">
              Projects
            </a>
          </Link>
        </li>

        <li className="tw-mt-2 tw-hidden md:tw-block">
          <Link href="#about" className="">
            <a className="tw-rounded-3xl tw-px-4 tw-py-2 tw-font-Inter tw-font-medium tw-text-gray-900 tw-transition tw-duration-500 tw-ease-in-out hover:tw-bg-black hover:tw-text-white">
              About
            </a>
          </Link>
        </li>

        <li className="tw-mt-2 tw-hidden md:tw-block">
          <Link href="#" className="">
            <a className="tw-rounded-3xl tw-px-4 tw-py-2 tw-font-Inter tw-font-medium tw-text-gray-900 tw-transition tw-duration-500 tw-ease-in-out hover:tw-bg-black hover:tw-text-white">
              Resume
            </a>
          </Link>
        </li>

        <li className="tw-mt-2 tw-px-4 md:tw-hidden">
          <div>
            <Menu as="div" className="tw-relative tw-inline-block tw-text-left">
              <div>
                <Menu.Button className="tw-inline-flex tw-rounded-xl tw-flex-none tw-bg-gray-200 tw-p-3 tw-text-2xl tw-text-gray-900 tw-ring-gray-200 tw-transition-all tw-duration-150 hover:tw-ring-2 tw-ring-offset-2">
                  <AiOutlineMenu />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="tw-transition tw-ease-out tw-duration-100"
                enterFrom="tw-transform tw-opacity-0 tw-scale-95"
                enterTo="tw-transform tw-opacity-100 tw-scale-100"
                leave="tw-transition tw-ease-in tw-duration-75"
                leaveFrom="tw-transform tw-opacity-100 tw-scale-100"
                leaveTo="tw-transform tw-opacity-0 tw-scale-95"
              >
                <Menu.Items className="tw-absolute tw-right-0 tw-mt-2 tw-w-56 tw-origin-top-right tw-divide-y tw-divide-gray-100 tw-rounded-xl tw-bg-white tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none">
                  <div className="tw-px-1 tw-py-1 ">
                    <Link href="/blog">
                      <Menu.Item className='tw-m-2 tw-p-2 tw-indent-1 tw-rounded-xl tw-bg-white hover:tw-bg-gray-100 tw-ring-gray-200 tw-transition-all tw-duration-150 hover:tw-ring-2 tw-ring-offset-2'>
                        <div>
                          <a className='tw-font-Inter tw-font-medium'>Blog</a>
                        </div>
                      </Menu.Item>
                    </Link>
                    <Link href="#projects">
                      <Menu.Item className='tw-m-2 tw-p-2 tw-indent-1 tw-rounded-xl tw-bg-white hover:tw-bg-gray-100 tw-ring-gray-200 tw-transition-all tw-duration-150 hover:tw-ring-2 tw-ring-offset-2'>
                        <div>
                          <a className='tw-font-Inter tw-font-medium'>Projects</a>
                        </div>
                      </Menu.Item>
                    </Link>
                    <Link href="#about">
                      <Menu.Item className='tw-m-2 tw-p-2 tw-indent-1 tw-rounded-xl tw-bg-white hover:tw-bg-gray-100 tw-ring-gray-200 tw-transition-all tw-duration-150 hover:tw-ring-2 tw-ring-offset-2'>
                        <div>
                          <a className='tw-font-Inter tw-font-medium'>About</a>
                        </div>
                      </Menu.Item>
                    </Link>
                  </div>
                  <div className="tw-px-1 tw-py-1">
                    <Link href="mailto:elwynynion2@gmail.com">
                      <Menu.Item className='tw-m-2 tw-p-2 tw-indent-1 tw-rounded-xl tw-bg-white hover:tw-bg-gray-100 tw-ring-gray-200 tw-transition-all tw-duration-150 hover:tw-ring-2 tw-ring-offset-2'>
                        <div>
                          <a className="tw-flex tw-font-Inter tw-font-medium">
                            Contact me
                            <CgArrowTopRightO className="tw-ml-1" />
                          </a>
                        </div>
                      </Menu.Item>
                    </Link>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </li>
      </ul>
    </nav>
  );
};

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  )
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  )
}

function DuplicateInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  )
}

function DuplicateActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  )
}

function ArchiveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function ArchiveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function MoveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function MoveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  )
}

function DeleteInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  )
}


export default Nav;
