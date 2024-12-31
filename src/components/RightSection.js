import React from 'react'
import Follow from './Follow'
export default function RightSection(props) {
    return (
        <div className='w-[25vw] bg-black  font-sans text-white max-w-[480px]'>
            <div className="fixed w-[25vw] max-w-[480px] flex flex-col items-center space-y-4 mt-2">
                <div className="searchBar w-[25vw] flex justify-center">
                    <div className="w-[80%] m-1 p-2 rounded-full outline-none bg-gray-900 flex items-center gap-1" >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
                        <input type="text" placeholder="Search" className='outline-none bg-gray-900' />

                    </div>
                </div>
                <div className="info bg-gray-900 rounded-xl w-[90%] p-3 space-y-3">
                    <div className="sub font-bold text-lg">Subscribe to Premium</div>
                    <div className="sub-info ">X Premium is our premium subscription service that elevates quality conversations on the platform. </div>
                    <div > <a href="/" className="sub-btn  py-2 px-4 bg-blue-500 rounded-full font-semibold hover:bg-blue-600  focus:bg-blue-700 transition duration-300 ease-in-out "> Subscribe</a></div>
                </div>

                <Follow data={props.data} />


            </div>

        </div>

    )
}
