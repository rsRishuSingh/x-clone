import React from 'react'

export default function LeftSection(props) {


    return (



        <div className='lg:w-[18vw] sm:mx-1 lg:mr-2 sm:w-[10vw] font-sans h-screen  max-w-[345px] flex flex-col lg:items-end sm:items-center '>
            <div className='fixed '>
                <div className="logo flex justify-center  my-3 sm:my-10">
                    <a href="/" className=' focus:font-bold'>
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="lg:scale-100 sm:scale-[1.5] invert h-9 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                    </a>
                </div>
                <ul className='sm:space-y-10 lg:space-y-2 text-xl'>
                    {props.svgCollection.map((svg) => {
                        return (
                            <li key={svg + Math.random() * 11}>
                                <a href="/" className='flex lg:justify-start lg:space-x-5  sm:justify-center hover:bg-gray-800 rounded-3xl p-2 lg:pl-3 focus:font-semibold transition duration-300 ease-in-out'> {svg}  </a>
                            </li>
                        )
                    })}


                </ul>
                <div > <a href="/" className="lg:block hidden hover:bg-slate-200 focus:font-extrabold p-2 my-2 text-black bg-white rounded-3xl text-center font-bold text-lg transition duration-300 ease-in-out">Post</a></div>

                <div > <a href="/" className="lg:hidden sm:block hover:bg-slate-200 focus:font-extrabold p-5 my-2 mt-10 text-black bg-white rounded-full text-center  transition duration-300 ease-in-out">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[35px] r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1472mwg r-lrsllp" style={{ color: "rgb(15,20,25) " }}><g><path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path></g></svg>
                </a></div>

                <div >
                    <a href="/" className="flex lg:justify-evenly sm:justify-center items-center hover:bg-gray-800  p-2 pr-3 my-2  hover:rounded-full fixed bottom-1 transition duration-300 ease-in-out">
                        <div className="profile">
                            <img src="https://yt3.ggpht.com/yti/ANjgQV_8_LrhdnGK03B0VyE3I4QocJAGWdyNesAn5BdA7x3Ofrg=s88-c-k-c0x00ffffff-no-rj" alt="" className='rounded-full w-10 lg:scale-100 sm:scale-125' />
                        </div>
                        <div className='details flex flex-col items-center sm:hidden lg:block'>
                            <div className="username font-semibold ml-2 ">Rishu Singh</div>
                            <div className="email text-gray-400 ml-2 ">@rs_singh</div>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    )
}
