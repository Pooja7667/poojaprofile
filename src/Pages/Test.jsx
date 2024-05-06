import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Test = () => {
  const data = [
    {
      img: " https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
      text: "Review your code to ensure it complies with accessibility standards, such as proper semantic HTML, keyboard navigation, and screen reader compatibility. Tools like Lighthouse or axe can help identify accessibility issues.",
    },
    {
      img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1714694400&semt=sph",
      text: "Code Quality Ensure that your code is clean, readable, and follows best practices. This includes proper indentation, meaningful variable names, and consistent formatting Check for any performance Optimize where necessary  ",
    },
    {
      img: "https://media.istockphoto.com/id/1167768487/photo/indian-businessman-wearing-white-elegant-shirt-standing-over-isolated-yellow-background.jpg?s=612x612&w=0&k=20&c=_Z82yRj8KM22ma6iiwzjM_h0VIYfx-zJ4wPLX2MNsv4=",
      text: "Overall, I highly recommend pooja gupta to anyone seeking top-notch services. They are truly a reliable partner, and I look forward to working with them again in the future.",
    },
    {
      img: "https://media.istockphoto.com/id/1167768461/photo/young-indian-businessman-wearing-elegant-shirt-standing-over-isolated-pink-background-success.jpg?s=612x612&w=0&k=20&c=jgjSQErCU4QjsOV9yPDUFsL2xc2VJkaxn8hUja5T1uM=",
      text: "Moreover, their dedication to customer satisfaction was evident in every interaction. They were receptive to feedback and went above and beyond to address any concerns, ensuring that we were completely satisfied with the final product.",
    },
    {
      img: "https://img.freepik.com/premium-photo/headshot-photos-indian-women-dynamic-professions-occassions-indian-girl_978786-292.jpg",
      text: "Their attention to detail and creative approach exceeded our expectations. They took the time to understand our goals and delivered a solution that not only met but exceeded our requirements. Their  in decision-making.",
    },
    {
      img: "https://media.licdn.com/dms/image/D4D22AQFyPe6h27RKMA/feedshare-shrink_800/0/1689603184302?e=2147483647&v=beta&t=-ztFGNNsBOkTtess2nYYexRRpgd-FGwap30Rvy8vxGY",
      text: "I had the pleasure of working with pooja gupta on a recent project, and I couldn't be more impressed with the results. From the professionalism, expertise, and a genuine commitment to our project's success  ",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [reviwes, setReviwes] = useState(data);

  return (
    <>
      <section id="test">
        <div className="top-hading">
          <h5>Review from clints</h5>
          <h2>Testimonials</h2>
        </div>
        <section id="tes">
          <div className="reviwe-container">
            <Slider {...settings}>
              {reviwes.map(({ img, text }, index) => {
                return (
                  <>
                    <div key={index} className="all-items">
                      <img src={img} alt="no found" />
                      <p>{text}</p>
                    </div>
                  </>
                );
              })}
            </Slider>
          </div>
        </section>
      </section>
    </>
  );
};

export default Test;
