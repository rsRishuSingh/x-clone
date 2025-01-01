import './App.css';
import LeftSection from './components/LeftSection';
import MidSection from './components/MidSection';
import RightSection from './components/RightSection';
function App() {

  let svgCollection = [
    <> <svg viewBox="0 0 24 24" aria-hidden="true" className="  invert lg:scale-100 md:scale-[1.4] h-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z"></path></g></svg> <span className='sm:hidden lg:inline'>Home</span></>,

    <><svg viewBox="0 0 24 24" aria-hidden="true" className=" invert lg:scale-100 md:scale-[1.4] h-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path></g></svg><span className='sm:hidden lg:inline'>Explore</span></>,

    <><svg viewBox="0 0 24 24" aria-hidden="true" className="invert lg:scale-100 md:scale-[1.4] h-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M11.996 2c-4.062 0-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958C19.48 5.017 16.054 2 11.996 2zM9.171 18h5.658c-.412 1.165-1.523 2-2.829 2s-2.417-.835-2.829-2z"></path></g></svg><span className='sm:hidden lg:inline'>Alert</span></>,

    <><svg viewBox="0 0 24 24" aria-hidden="true" className="invert lg:scale-100 md:scale-[1.4] h-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path></g></svg><span className='sm:hidden lg:inline'>Message</span></>,

    <><svg viewBox="0 0 24 24" aria-hidden="true" className="invert lg:scale-100 md:scale-[1.4] h-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><g clipPath="url(#5-clip0_2592_269)" clipRule="evenodd"><path d="M18 4.1H6c-1.05 0-1.9.85-1.9 1.9v12c0 1.05.85 1.9 1.9 1.9h12c1.05 0 1.9-.85 1.9-1.9V6c0-1.05-.85-1.9-1.9-1.9zM6 2h12c2.21 0 4 1.79 4 4v12c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4V6c0-2.21 1.79-4 4-4z"></path><path d="M6.68 17.8l8.108-11.58h2.532L9.21 17.8H6.68z"></path></g><defs><clipPath id="5-clip0_2592_269"><rect height="20" rx="1" width="20" x="2" y="2"></rect></clipPath></defs></g></svg> <span className='sm:hidden lg:inline'>Grok</span></>,



    <> <svg viewBox="0 0 24 24" aria-hidden="true" className="invert lg:scale-100 md:scale-[1.4] h-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path></g></svg><span className='sm:hidden lg:inline'>Saved</span></>,

    <><svg viewBox="0 0 24 24" aria-hidden="true" className="invert lg:scale-100 md:scale-[1.4] h-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path></g></svg><span className='sm:hidden lg:inline'>More</span></>

  ]
  let data = [
    {
      profile_img: "https://yt3.ggpht.com/yti/ANjgQV94SHNUILKWy4137UlA2tUQCVRi5Vsh8XyqHhD6zbJBgx8=s88-c-k-c0x00ffffff-no-rj-mo",
      user_name: "Rishu Singh",
      user_handle: "@rs_singh",
      post_time_stamp: "12hr",
      post_content_para: "Wildsee, Switzerland, feels like stepping into a postcard—pristine lakes, majestic mountains, and untouched beauty everywhere you look. Who else dreams of exploring this magical place?",
      post_media: "https://cdn.pixabay.com/video/2024/09/03/229501_large.mp4",
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
      profile_img: "https://pbs.twimg.com/profile_images/1522017422550528001/6AceRKJQ_400x400.png",
      user_name: "The Rabbit Club",
      user_handle: "@rabbitclub",
      post_time_stamp: "3hr",
      post_content_para: "Greatest threat to democracy in beurocracy. Holds the text content, which remains sharp and clear. The nine most terrifying words in the English language are: I'm from the government and I'm here to help — Ronald Reagan",
      post_media: null,
      favorite_count: "1.5M",
      impression_count: "3.3M",
      repost_count: "9K",
      comment_count: "32K"

    },
    {
      profile_img: "https://pbs.twimg.com/profile_images/1863494920712937473/ikxUQZlS_400x400.jpg",
      user_name: "David Auston",
      user_handle: "@davidAuston",
      post_time_stamp: "4 Mon",
      post_content_para: "Hundreds of nasa videos to choose from. Free royalty free HD footage.",
      post_media: "https://cdn.pixabay.com/video/2021/05/07/73425-548173432_large.mp4",
      favorite_count: "1.5M",
      impression_count: "3.3M",
      repost_count: "9K",
      comment_count: "32K"

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
  let trends = [
    {
      "trend_name": "#AkshayKumar",
      "trend_location": "Trending in India",
      "post_count": "1455 posts"
    },
    {
      "trend_name": "#ReactJS",
      "trend_location": "Trending Worldwide",
      "post_count": "2500 posts"
    },
    {
      "trend_name": "#WorldCup2024",
      "trend_location": "Trending in Sports",
      "post_count": "8000 posts"
    },
    {
      "trend_name": "#TechSummit",
      "trend_location": "Trending in Technology",
      "post_count": "1050 posts"
    },
    {
      "trend_name": "#ClimateChange",
      "trend_location": "Trending Globally",
      "post_count": "3120 posts"
    },
    {
      "trend_name": "#AIRevolution",
      "trend_location": "Trending Worldwide",
      "post_count": "9200 posts"
    },
    {
      "trend_name": "#MentalHealth",
      "trend_location": "Trending in Healthcare",
      "post_count": "1870 posts"
    },
    {
      "trend_name": "#Olympics2024",
      "trend_location": "Trending in Sports",
      "post_count": "5675 posts"
    },
    {
      "trend_name": "#SpaceXLaunch",
      "trend_location": "Trending in Science",
      "post_count": "3200 posts"
    },
    {
      "trend_name": "#FoodFestival",
      "trend_location": "Trending in Lifestyle",
      "post_count": "450 posts"
    },
    {
      "trend_name": "#StartupIndia",
      "trend_location": "Trending in Business",
      "post_count": "2950 posts"
    }
  ]
  function fcx() {
    console.log(`Viewport Width: ${window.innerWidth}px`);
    console.log(`Viewport Height: ${window.innerHeight}px`);

  }
  return (
    <div className='flex md:justify-between lg:justify-center text-white bg-black max-w-[1920px]'>
      <LeftSection svgCollection={svgCollection} />
      <MidSection data={data} trends={trends} />
      <RightSection data={data} />
      {fcx()}
    </div>
  );
}

export default App;
