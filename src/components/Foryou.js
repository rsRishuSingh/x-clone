import React from 'react'

export default function Foryou(props) {
    return (
        <div className="content  border-x-gray-700 border-x-[1px]">
            {
                props.data.map((element) => {
                    return (
                        <div className='post flex justify-center gap-x-1 mb-3 p-2 border-b-gray-700 border-b-[1px]' key={element.user_name} >

                            <div className="user-img w-[10%] flex justify-center items-start"><img className='rounded-full w-11 ' src={element.profile_img} alt="" />
                            </div>
                            <div className="user-post w-[80%] ">
                                <div className="user-name flex justify-between">
                                    <div className='name-details'>

                                        <span className='text-base font-semibold'>{element.user_name}</span><span>
                                            <svg className='inline' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f9aef"><path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z" /></svg>
                                        </span>
                                        <span className='text-gray-400'> {element.user_handle}</span>
                                        <span> <svg className='inline' xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#999999"><path d="M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z" /></svg> <span className='text-gray-400 text-sm'> {element.post_time_stamp}</span></span>
                                    </div>
                                    <div className='options cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" /></svg>
                                    </div>
                                </div>
                                <div className="post-content my-1">
                                    <div className="post-content-para text-[15px]">{element.post_content_para}</div>
                                    <div className="post-content-media my-2">
                                        {(element.post_media) && !element.post_media.endsWith('mp4') ?
                                            <img className='rounded-xl ' src={element.post_media} alt="" /> :
                                            <video src={element.post_media} className='rounded-xl ' controls></video>
                                        }
                                    </div>
                                </div>
                                <div className="post-utility flex justify-around">
                                    <div className='flex justify-center items-center cursor-pointer hover:bg-slate-800 p-1 px-2 hover:rounded-full'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666" ><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" /></svg><span className='text-gray-400 mx-1'>{element.favorite_count}</span></div>

                                    <div className='flex justify-center items-center cursor-pointer hover:bg-slate-800 p-1 px-2 hover:rounded-full'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666" ><path d="M640-160v-280h160v280H640Zm-240 0v-640h160v640H400Zm-240 0v-440h160v440H160Z" /></svg><span className='text-gray-400 mx-1'>{element.impression_count}</span></div>

                                    <div className='flex justify-center items-center cursor-pointer hover:bg-slate-800 p-1 px-2 hover:rounded-full'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666" ><path d="M280-80 120-240l160-160 56 58-62 62h406v-160h80v240H274l62 62-56 58Zm-80-440v-240h486l-62-62 56-58 160 160-160 160-56-58 62-62H280v160h-80Z" /></svg><span className='text-gray-400 mx-1'>{element.repost_count}</span></div>

                                    <div className='flex justify-center items-center cursor-pointer  hover:bg-slate-800 p-1 px-2 hover:rounded-full'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666" ><path d="M880-80 720-240H320q-33 0-56.5-23.5T240-320v-40h440q33 0 56.5-23.5T760-440v-280h40q33 0 56.5 23.5T880-640v560ZM160-473l47-47h393v-280H160v327ZM80-280v-520q0-33 23.5-56.5T160-880h440q33 0 56.5 23.5T680-800v280q0 33-23.5 56.5T600-440H240L80-280Zm80-240v-280 280Z" /></svg><span className='text-gray-400 mx-1'>{element.comment_count}</span></div>

                                </div>
                            </div>
                        </div>

                    )
                })
            }

        </div>
    )
}
