import React from 'react'

export default function Follow(props) {
    return (
        <ul className="follow   rounded-xl w-[90%]  space-y-4">
            <div className="sub font-bold text-lg">Who to Follow</div>
            {props.data.slice(0, 4).map(element => {
                return (

                    <li className='flex justify-between items-center' key={element.user_name}>
                        <div className="profile">
                            <a href="/" className='flex justify-start gap-x-1'>
                                <img src={element.profile_img} alt="" className='w-10 h-10 rounded-full' />
                                <div>
                                    <div className="name font-bold ">{element.user_name}</div>
                                    <div className="email text-gray-400 text-sm">{element.user_handle}</div>
                                </div>
                            </a>
                        </div>
                        <div className="follow">
                            <a href="/" className=" py-2 px-4 bg-white rounded-full font-bold hover:bg-slate-200 text-black focus:bg-slate-300 transition duration-300 ease-in-out">
                                Follow
                            </a>
                        </div>
                    </li>
                )
            })}

        </ul>
    )
}
