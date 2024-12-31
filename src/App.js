import './App.css';
import LeftSection from './components/LeftSection';
import MidSection from './components/MidSection';
import RightSection from './components/RightSection';
function App() {
  let data = [
    {
      profile_img: "https://yt3.ggpht.com/yti/ANjgQV_8_LrhdnGK03B0VyE3I4QocJAGWdyNesAn5BdA7x3Ofrg=s88-c-k-c0x00ffffff-no-rj",
      user_name: "Rishu Singh",
      user_handle: "@rs_singh",
      post_time_stamp: "12hr",
      post_content_para: "Wildsee, Switzerland, feels like stepping into a postcard—pristine lakes, majestic mountains, and untouched beauty everywhere you look. Who else dreams of exploring this magical place?",
      post_media: "https://videos.pexels.com/video-files/27916019/12262313_1440_2560_60fps.mp4",
      favorite_count: "3K",
      impression_count: "30k",
      repost_count: "150",
      comment_count: "30"

    },


    {
      profile_img: "https://pbs.twimg.com/profile_images/1858316737780781056/kPL61o0F_400x400.jpg",
      user_name: "Elon Musk",
      user_handle: "@elonmusk",
      post_time_stamp: "3hr",
      post_content_para: "Cybertruck eats pickup trucks for breakfast with a side of bacon.",
      post_media: "https://videos.pexels.com/video-files/19343054/uhd_60fps.mp4",
      favorite_count: "3K",
      impression_count: "30k",
      repost_count: "150",
      comment_count: "30"

    },
    {
      profile_img: "https://pbs.twimg.com/profile_images/1833509376528945157/5AeMNn9f_400x400.jpg",
      user_name: "Narendra Modi",
      user_handle: "@narendramodi",
      post_time_stamp: "1min",
      post_content_para: "The people of Jorhat have made commendable efforts to strengthen the fight against malaria! #MannKiBaat",
      post_media: "https://pbs.twimg.com/media/Gfz5qRwaIAApALi?format=jpg&name=large",
      favorite_count: "70K",
      impression_count: "10M",
      repost_count: "5K",
      comment_count: "300"

    },
    {
      profile_img: "https://pbs.twimg.com/profile_images/1781508360069894144/1fReqIat_400x400.jpg",
      user_name: "Aravind Srinivas",
      user_handle: "@AravSrinivas",
      post_time_stamp: "3 days",
      post_content_para: "Had the honor to meet Prime Minister @narendramodi ji.We had a great conversation about the potential for AI adoption in India and across the world.",
      post_media: "https://pbs.twimg.com/media/Gf5OEDkawAIAgY8?format=jpg&name=large",
      favorite_count: "2K",
      impression_count: "5M",
      repost_count: "5K",
      comment_count: "897"

    },
    {
      profile_img: "https://pbs.twimg.com/profile_images/1863494920712937473/ikxUQZlS_400x400.jpg",
      user_name: "Elena",
      user_handle: "@Elena",
      post_time_stamp: "1 day",
      post_content_para: "Breathtakingly beautiful & enchanting. Posts, blogs & videos on Sikkim’s scenic beauty, it’s people, its art, culture, cuisine, & much more!",
      post_media: "https://pbs.twimg.com/media/FXUnPP3VUAAN7PG?format=jpg&name=large",
      favorite_count: "1.5M",
      impression_count: "3M",
      repost_count: "7K",
      comment_count: "2K"

    }
  ]
  return (
    <div className='flex justify-center text-white bg-black '>
      <LeftSection />
      <MidSection />
      <RightSection />
    </div>
  );
}

export default App;
