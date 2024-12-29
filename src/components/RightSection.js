import React from 'react'

export default function RightSection() {
    return (
        <div className='w-3/12 bg-black flex flex-col items-center font-sans text-white space-y-4 mt-2'>
            <div className="searchBar w-[100%] text-center">
                <input type="text" placeholder="Search" className="w-[80%] m-1 p-2 rounded-full outline-none bg-gray-900" />
            </div>
            <div className="info bg-gray-900 rounded-xl w-[90%] p-3 space-y-3">
                <div className="sub font-bold text-lg">Subscribe to Premium</div>
                <div className="sub-info ">X Premium is our premium subscription service that elevates quality conversations on the platform. </div>
                <div > <a href="/" className="sub-btn  py-2 px-4 bg-blue-500 rounded-full font-semibold hover:bg-blue-600  focus:font-bold "> Subscribe</a></div>
            </div>

            <ul className="follow   rounded-xl w-[90%]  space-y-4">
                <div className="sub font-bold text-lg">Who to Follow</div>
                <li className='flex justify-between items-center'>
                    <div className="profile">
                        <a href="/" className='flex justify-start'>
                            <img src="https://pbs.twimg.com/profile_images/1800520500432515073/tMB_rJVh_400x400.jpg" alt="" className='w-10 h-10 rounded-full' />
                            <div>
                                <div className="name font-bold ">PM Modi</div>
                                <div className="email text-gray-400 text-sm">@pm_modi</div>
                            </div>
                        </a>
                    </div>
                    <div className="follow">
                        <a href="/" className=" py-2 px-4 bg-white rounded-full font-bold hover:bg-slate-200 text-black focus:bg-slate-300">
                            Follow
                        </a>
                    </div>
                </li>
                <li className='flex justify-between items-center'>
                    <div className="profile">
                        <a href="/" className='flex justify-start'>
                            <img src="https://pbs.twimg.com/profile_images/1800520500432515073/tMB_rJVh_400x400.jpg" alt="" className='w-10 h-10 rounded-full' />
                            <div>
                                <div className="name font-bold ">PM Modi</div>
                                <div className="email text-gray-400 text-sm">@pm_modi</div>
                            </div>
                        </a>
                    </div>
                    <div className="follow">
                        <a href="/" className=" py-2 px-4 bg-white rounded-full font-bold hover:bg-slate-200 text-black focus:bg-slate-300">
                            Follow
                        </a>
                    </div>
                </li>
                <li className='flex justify-between items-center'>
                    <div className="profile">
                        <a href="/" className='flex justify-start'>
                            <img src="https://pbs.twimg.com/profile_images/1800520500432515073/tMB_rJVh_400x400.jpg" alt="" className='w-10 h-10 rounded-full' />
                            <div>
                                <div className="name font-bold ">PM Modi</div>
                                <div className="email text-gray-400 text-sm">@pm_modi</div>
                            </div>
                        </a>
                    </div>
                    <div className="follow">
                        <a href="/" className=" py-2 px-4 bg-white rounded-full font-bold hover:bg-slate-200 text-black focus:bg-slate-300">
                            Follow
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    )
}
