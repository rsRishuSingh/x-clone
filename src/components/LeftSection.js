import React from 'react'

export default function LeftSection(props) {
    

    return (



        <div className='w-[18%] mr-2  font-sans h-screen '>
            <div className='fixed '>
                <div className="logo flex justify-center my-3">
                    <a href="/" className=' focus:font-bold'>
                        <svg viewBox="0 0 24 24" aria-hidden="true" className=" invert h-9 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                    </a>
                </div>
                <ul className=' space-y-2 text-xl'>
                    {props.svgCollection.map((svg) => {
                        return (
                            <li key={svg + Math.random() * 11}>
                                <a href="/" className='flex justify-start space-x-5  hover:bg-gray-800 rounded-3xl p-2 pl-3 focus:font-semibold transition duration-300 ease-in-out'> {svg}  </a>
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
