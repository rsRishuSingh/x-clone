import React from 'react'

export default function Trending(props) {
    return (
        <ul className="Trending  border-x-gray-700 border-x-[1px] flex flex-col items-center">
            {
                props.trends.map(element => {
                    return (

                        <li className="trend  w-[90%] my-3 " key={element.trend_name}>
                            <div className="tag flex justify-between">
                                <div className="tag-name text-sm text-gray-400 hover:underline cursor-pointer">{element.trend_location}</div>
                                <div className="options cursor-pointer ">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" /></svg>
                                </div>
                            </div>
                            <div>
                                <span className="trend-title cursor-pointer text-lg font-bold hover:underline">
                                    {element.trend_name}

                                </span>
                                <br />
                                <span className="post-count text-sm text-gray-400 hover:underline cursor-pointer">

                                    {element.post_count}

                                </span>
                            </div>


                        </li>
                    )
                })
            }
        </ul >
    )
}
