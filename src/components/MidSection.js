import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from 'react'
import Foryou from './Foryou'
import Trending from './Trending'
import { useState, useEffect, useRef } from "react";
export default function MidSection(props) {

    // const [currScreen, setCurrScreen] = useState(0);
    // const underLineRef = useRef(null);

    // const underLine = () => {
    //     const parentLinks = document.querySelectorAll('.link');
    //     const underLineElement = underLineRef.current;

    //     if (currScreen === 0) {
    //         setCurrScreen(1);
    //         parentLinks[1]?.appendChild(underLineElement);
    //     } else {
    //         setCurrScreen(0);
    //         parentLinks[0]?.appendChild(underLineElement);
    //     }
    // }

    // let underLine = () => {
    //     let child = document.getElementsByClassName('underLine')
    //     child[0].classList.toggle('hidden')
    //     child[1].classList.toggle('hidden')
    //     //transition will not work
    // }

    // const [currScreen, setCurrScreen] = useState(1);
    // let toggleState = () => {
    //     if (currScreen) {
    //         setCurrScreen(0)
    //     }
    //     else {
    //         setCurrScreen(1)
    //     }
    //&& in the code
    // }


    const [show, setShow] = useState(true);
    // const [Width, setWidth] = useState(screen.width);
    let lastScroll = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            if (currentScroll > lastScroll.current) {
                setShow(false); // Hide on scroll down
            } else {
                setShow(true); // Show on scroll up
            }
            lastScroll.current = currentScroll;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [activeLink, setActiveLink] = useState("/")
    const toggler = (link) => {
        setActiveLink(link);
    };
    return (
        <BrowserRouter>

            <div className=' w-[98vw] lg:w-[50vw] md:w-[50vw] sm:w-[80vw] bg-black max-w-[960px]'>
                <div className="mid-top ">
                    <div className={`fixed z-10 top-0 w-[98vw] lg:w-[50vw] md:w-[50vw] sm:w-[80vw] max-w-[960px] bg-black/50 backdrop-blur-lg lg:pt-1 border-x-gray-700 border-x-[1px] pt-2 ${show ? "translate-y-0" : "-translate-y-full"
                        }`}>
                        <div className="menu flex justify-start border-b-gray-700 border-b-[1px] ">
                            <div className="options flex justify-evenly w-[95%] font-semibold">
                                <div className="for-you flex flex-col  cursor-pointer">
                                    <Link to="/" onClick={() => {

                                        toggler("/")
                                    }}>

                                        <div className="font-extrabold sm:font-semibold">
                                            For you
                                        </div>
                                        <div className={`h-1 bg-blue-500 w-14  rounded-full mt-1 ${activeLink === '/' ? 'block' : 'hidden'} `}></div>
                                    </Link>

                                </div>
                                <div className="trending flex flex-col  cursor-pointer">
                                    <Link to="/trending" onClick={() => {
                                        toggler("trending")
                                    }}>
                                        <div className="font-extrabold sm:font-semibold">
                                            Trending
                                        </div>


                                        <div className={`h-1 bg-blue-500 w-14  rounded-full mt-1 ${activeLink === 'trending' ? 'block' : 'hidden'} `}></div>

                                    </Link>

                                </div>
                            </div>
                            <div className="settings ">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#CCCCCC"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" /></svg>
                            </div>

                        </div>
                    </div>


                    <div className="profile flex flex-col items-center  mt-1 pt-10 border-x-gray-700 border-x-[1px]">
                        <div className="post-profile flex lg:justify-center justify-around mt-3 gap-1 gap-x-2 w-full ">
                            <div className="profile-pic lg:block flex justify-center items-start sm:items-center w-fit">
                                <img src="https://yt3.ggpht.com/yti/ANjgQV_8_LrhdnGK03B0VyE3I4QocJAGWdyNesAn5BdA7x3Ofrg=s88-c-k-c0x00ffffff-no-rj" alt="" className='rounded-full w-9 scale-125 lg:scale-100' />
                            </div>
                            <div className='textArea w-[75%] lg:h-[10vh] max-h-[100px] h-[80px]'>
                                <textarea name="post" id="post_id" placeholder='What is happening?!' className='bg-black text-white outline-none w-full text-lg' ></textarea>
                            </div>
                        </div>
                        <div className="separator h-[1px] bg-gray-700 w-[90%] "></div>
                        <div className="post-options flex justify-around w-full m-1 p-1 pb-2 lg:m-1 lg:p-1 lg:pb-2 border-b-gray-700 border-b-[1px] ">
                            <div className="svg-collection flex justify-evenly items-center gap-x-5">
                                <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5985E1"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z" /></svg>
                                <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5985E1"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm240-160h60v-240h-60v240Zm-160 0h80q17 0 28.5-11.5T400-400v-80h-60v60h-40v-120h100v-20q0-17-11.5-28.5T360-600h-80q-17 0-28.5 11.5T240-560v160q0 17 11.5 28.5T280-360Zm280 0h60v-80h80v-60h-80v-40h120v-60H560v240ZM200-200v-560 560Z" /></svg>
                                <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5985E1"><path d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm140 260q68 0 123.5-38.5T684-400h-66q-22 37-58.5 58.5T480-320q-43 0-79.5-21.5T342-400h-66q25 63 80.5 101.5T480-260Zm0 180q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z" /></svg>
                                <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5985E1"><path d="M580-240q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" /></svg>
                                <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5985E1"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg>
                            </div>
                            <div > <a href="/" className="block hover:bg-blue-600 focus:bg-slate-100  w-15 px-4 m-1 p-1 text-black bg-blue-500 rounded-3xl text-center md:font-semibold text-lg transition duration-300 ease-in-out sm:font-normal font-extrabold hover:underline">Post</a></div>
                        </div>
                    </div>

                </div>
                <Routes >
                    <Route path="/" element={<Foryou data={props.data} />} />
                    <Route path="/trending" element={<Trending trends={props.trends} />} />
                    {/* hook.js:608 No routes matched location "/build/index.html"  */}
                    {/* serve -s build */}
                </Routes>
                <div className="status-bar block sm:hidden">
                    <div className={`options flex justify-around fixed bottom-0 z-20 transition-transform w-[98vw] bg-black py-2 rounded-t-full ${show ? "translate-y-0" : "translate-y-full"
                        }`}>

                        <div className="p-1 px-2 cursor-pointer hover:bg-gray-700 rounded-full ">
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="  w-[24px]  invert h-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z"></path></g></svg>
                        </div>
                        <div className="p-1 px-2 cursor-pointer hover:bg-gray-700 rounded-full ">

                            <svg viewBox="0 0 24 24" aria-hidden="true" className="  w-[24px]  invert  h-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path></g></svg>
                        </div>
                        <div className="p-1 px-2 cursor-pointer hover:bg-gray-700 rounded-full ">

                            <svg viewBox="0 0 24 24" aria-hidden="true" className="  w-[24px] invert h-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path></g></svg>
                        </div>
                        <div className="p-1 px-2 cursor-pointer hover:bg-gray-700 rounded-full ">

                            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[24px] invert  h-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path></g></svg>
                        </div>


                    </div>
                </div>

            </div >
        </BrowserRouter >
    )
}
