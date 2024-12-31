import React from 'react'

export default function LeftSection() {
    let svgCollection = [
        <> <svg viewBox="0 0 24 24" aria-hidden="true" className="  invert h-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z"></path></g></svg> <span >Home</span></>,

        <><svg viewBox="0 0 24 24" aria-hidden="true" className=" invert h-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path></g></svg><span >Explore</span></>,

        <><svg viewBox="0 0 24 24" aria-hidden="true" className="invert h-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M11.996 2c-4.062 0-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958C19.48 5.017 16.054 2 11.996 2zM9.171 18h5.658c-.412 1.165-1.523 2-2.829 2s-2.417-.835-2.829-2z"></path></g></svg><span>Alert</span></>,

        <><svg viewBox="0 0 24 24" aria-hidden="true" className="invert h-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path></g></svg><span >Message</span></>,

        <><svg viewBox="0 0 24 24" aria-hidden="true" className="invert h-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><g clipPath="url(#5-clip0_2592_269)" clipRule="evenodd"><path d="M18 4.1H6c-1.05 0-1.9.85-1.9 1.9v12c0 1.05.85 1.9 1.9 1.9h12c1.05 0 1.9-.85 1.9-1.9V6c0-1.05-.85-1.9-1.9-1.9zM6 2h12c2.21 0 4 1.79 4 4v12c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4V6c0-2.21 1.79-4 4-4z"></path><path d="M6.68 17.8l8.108-11.58h2.532L9.21 17.8H6.68z"></path></g><defs><clipPath id="5-clip0_2592_269"><rect height="20" rx="1" width="20" x="2" y="2"></rect></clipPath></defs></g></svg> <span >Grok</span></>,



        <> <svg viewBox="0 0 24 24" aria-hidden="true" className="invert h-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path></g></svg><span >Saved</span></>,

        <><svg viewBox="0 0 24 24" aria-hidden="true" className="invert h-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path></g></svg><span>More</span></>

    ]

    return (



        <div className='w-[18%] mr-2  font-sans h-screen '>
            <div className='fixed '>
                <div className="logo flex justify-center my-3">
                    <a href="/" className=' focus:font-bold'>
                        <svg viewBox="0 0 24 24" aria-hidden="true" className=" invert h-9 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                    </a>
                </div>
                <ul className=' space-y-2 text-xl'>
                    {svgCollection.map((svg) => {
                        return (
                            <li key={svg + Math.random() * 11}>
                                <a href="/" className='flex justify-start space-x-5  hover:bg-gray-800 hover:rounded-3xl p-2 focus:font-semibold transition duration-300 ease-in-out'> {svg}  </a>
                            </li>
                        )
                    })}


                </ul>
                <div > <a href="/" className="block hover:bg-slate-200 focus:font-extrabold p-2 my-2 text-black bg-white rounded-3xl text-center font-bold text-lg transition duration-300 ease-in-out">Post</a></div>

                <div >
                    <a href="/" className="flex justify-evenly items-center hover:bg-gray-800  p-2 pr-3 my-2  hover:rounded-full fixed bottom-1 transition duration-300 ease-in-out">
                        <div className="profile">
                            <img src="https://yt3.ggpht.com/yti/ANjgQV_8_LrhdnGK03B0VyE3I4QocJAGWdyNesAn5BdA7x3Ofrg=s88-c-k-c0x00ffffff-no-rj" alt="" className='rounded-full w-10' />
                        </div>
                        <div className='details flex flex-col items-center'>
                            <div className="username font-semibold ml-2 ">Rishu Singh</div>
                            <div className="email text-gray-400 ml-2 ">@rs_singh</div>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    )
}
