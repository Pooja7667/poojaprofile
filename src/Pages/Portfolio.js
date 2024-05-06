import React from "react";
import { useState } from "react";
import "../Style/s.css";

const Portfolio = () => {
  const data = [
    {
      img: "https://mir-s3-cdn-cf.behance.net/projects/404/750335184755495.Y3JvcCwxNTM1LDEyMDEsMTAyLDA.jpg",
      text: "Project Created Useing React and css",
    },
    {
      img: "https://cdn.dribbble.com/users/8141654/screenshots/17822438/media/be91809cd8e5246ab839765849ab4895.jpg?resize=400x0",
      text: "Project Created Useing React and css",
    },
    {
      img: "https://mir-s3-cdn-cf.behance.net/projects/404/f77ffa179079137.Y3JvcCwxNTM1LDEyMDEsMTAyLDA.jpg",
      text: "Project Created Useing React and css",
    },
    {
      img: "https://cdn.dribbble.com/users/8141654/screenshots/17833081/media/d748e8b38c495e4e87af0ae5f270e2c0.jpg?resize=400x300&vertical=center",
      text: "Project Created Useing React and css",
    },
    {
      img: "https://img.freepik.com/premium-psd/portrait-landscape-postcard-mockup_80802-1202.jpg",
      text: "Project Created Useing React and css",
    },
    {
      img: "https://img.freepik.com/premium-psd/modern-hotel-estate-landing-page-template-design-website_676553-91.jpg",
      text: "Project Created Useing React and css",
    },
  ];

  const [allData, setAllData] = useState(data);

  return (
    <>
      <section id="portfolio" className="alldata">
        <div  className="heading"> 
          <h5>My Recent Work</h5>
          <br></br>
          <h2>Projects</h2>
        </div>
        <div className="card-container">
          {allData.map((datas) => {
            return (
              <div className="card">
                <img src={datas.img} alt="Placeholder" />
                <p className="card-text">{datas.text}</p>
                <div className="card-buttons">
                  <a href="https://github.com/Pooja7667 " rel="">
                    <button className="btn">Live</button>
                  </a>
                  <a href="https://github.com/Pooja7667 " rel="">
                    <button className="btn">Demo</button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
