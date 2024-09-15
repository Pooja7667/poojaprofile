import React, { useState } from "react";

const Portfolio = () => {
  const data = [
    {
      img: "https://mir-s3-cdn-cf.behance.net/projects/404/750335184755495.Y3JvcCwxNTM1LDEyMDEsMTAyLDA.jpg",
      text: "Project Created Using React and CSS",
      live: "https://amazon-clone-react-one.vercel.app/",
    },
    {
      img: "https://cdn.dribbble.com/users/8141654/screenshots/17822438/media/be91809cd8e5246ab839765849ab4895.jpg?resize=400x0",
      text: "Full Stack Developer - Project 1",
      live: "https://backend2-pi.vercel.app/",
    },
    {
      img: "https://mir-s3-cdn-cf.behance.net/projects/404/f77ffa179079137.Y3JvcCwxNTM1LDEyMDEsMTAyLDA.jpg",
      text: "Full Stack Developer - Project 2",
      live: "https://food-order-app-rosy.vercel.app/",
    },
    {
      img: "https://cdn.dribbble.com/users/8141654/screenshots/17833081/media/d748e8b38c495e4e87af0ae5f270e2c0.jpg?resize=400x300&vertical=center",
      text: "Full Stack Developer - Project 3",
    },
    {
      img: "https://img.freepik.com/premium-psd/portrait-landscape-postcard-mockup_80802-1202.jpg",
      text: "Full Stack Developer - Project 4",
    },
    {
      img: "https://img.freepik.com/premium-psd/modern-hotel-estate-landing-page-template-design-website_676553-91.jpg",
      text: "Backend project using Node.js, Express, MongoDB Atlas",
    },
  ];

  const [allData] = useState(data);

  return (
    <section id="portfolio" className="py-12">
      <div className="text-center mb-8 px-4">
        <h5 className="text-lg text-black">My Recent Work</h5>
        <h2 className="text-3xl font-bold text-black">Projects</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4">
        {allData.map((datas, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-[rgb(54,122,159)] to-[rgb(25,37,46)] rounded-lg shadow-lg p-6 flex flex-col justify-between h-full"
          >
            <img
              src={datas.img}
              alt="Project Preview"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-white mb-4 flex-grow">{datas.text}</p>
            <div className="flex justify-between">
              {datas.live && (
                <a href={datas.live} target="_blank" rel="noreferrer">
                  <button className="bg-blue-500 hover:bg-gradient-to-r from-[rgb(54,122,159)] to-[rgb(25,37,46)] text-white py-2 px-4 rounded">
                    Live
                  </button>
                </a>
              )}
              <a
                href="https://github.com/Pooja7667"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-gray-700 hover:bg-gray-900 text-white py-2 px-4 rounded">
                  Demo
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
