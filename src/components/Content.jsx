import React from 'react'
import { topbarMenu, videos } from '../constant/sidebarItems';

const Content = () => {
  return (
    <div className=" w-full h-full">
      <div className="m-5">
        <ul className={`flex items-center gap-5`}>
          {topbarMenu.map((item) => (
            <div
              className={`bg-[#f2f2f2] text-gray-900 w-auto px-2 py-[0.2rem] rounded-md  cursor-pointer `}
            >
              <li className="font-semibold">{item}</li>
            </div>
          ))}
        </ul>
      </div>
      <ul className="flex flex-wrap">
        {/* <ul className="grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 "> */}
        {videos.map((item) => (
          <div className="flex flex-col justify-between w-[20rem] h-full p-5 ">
         
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="w-full h-full rounded-xl">
                 <img
              src={item.image}
              alt={item.title}
              className="w-full h-full rounded-xl"
            />
              {/* <VideoPreview url={item.url}  className="w-full h-full rounded-xl"/> */}
              <div className="flex items-center gap-2 mt-5">
                <div
                  className="flex items-center justify-center p-[0.8rem] bg-[#7c57c1] w-[2rem] 
              h-[2rem] rounded-full "
                >
                  <h1 className="text-[1rem] text-gray-50 ">
                    {item.channel[0]}
                  </h1>
                </div>
                <li className="text-[0.8rem] font-semibold">
                  {item.title.length > 56
                    ? `${item.title.slice(0, 56)}...`
                    : item.title}
                </li>
              </div>

              <div className="mt-[1rem]">
                <h3 className="text-[0.8rem] text-gray-500">{item.channel}</h3>
                <div className="flex text-[0.8rem] text-gray-500 items-center justify-between">
                  <p>{item.views}</p>
                  <p>{item.uploaded}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Content


// Function to extract the YouTube video ID from the URL
const getYouTubeVideoId = (url) => {
  const videoId = url.split("v=")[1]?.split("&")[0]; // Extract video ID after "v=" in URL
  return videoId;
};
// VideoPreview Component for embedding YouTube video using iframe
const VideoPreview = ({ url, className }) => {
   const videoId = getYouTubeVideoId(url);
   const embedUrl = `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&controls=1`;

  return (
    <iframe
      width="560"
      height="315"
      src={embedUrl}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className={className}
    ></iframe>
  );
};
