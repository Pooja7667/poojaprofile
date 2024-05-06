import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import "../Style/Exprince.css";
const Exprince = () => {
  return (
    <>
      <section id="experience">
        <h5>What skill Have</h5>
        <h4 className="center">MY Experience</h4>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <h3>Frontend Development</h3>
          <h3>Backend Development</h3>
        </div>
        <div className="both-boxs">
          <div className="frontend">
            <div className="right1">
              <VerifiedIcon />
              <div className="s-1">
                <h3>React</h3>
                <p>Experienced</p>
              </div>
              <VerifiedIcon />
              <div className="s-1">
                <h3>HTML</h3>
                <p>Experienced</p>
              </div>
              <VerifiedIcon />
              <div className="s-1">
                <h3>JavaScript</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className="left1">
              <VerifiedIcon />
              <div className="s-1">
                <h3>CSS3</h3>
                <p>Experienced</p>
              </div>
              <VerifiedIcon />
              <div className="s-1">
                <h3>Taliwind</h3>
                <p>Experienced</p>
              </div>
              <VerifiedIcon />
              <div className="s-1">
                <h3>Mui</h3>
                <p>Experienced</p>
              </div>
            </div>
          </div>
          <div className="backend">
            <div className="right2">
              <VerifiedIcon />
              <div className="s-1">
                <h3>Node js</h3>
                <p>Experienced</p>
              </div>
              <VerifiedIcon />
              <div className="s-1">
                <h3>MongoDB</h3>
                <p>Experienced</p>
              </div>
              <VerifiedIcon />
              <div className="s-1">
                <h3>Express js</h3>
                <p>Experienced</p>
              </div>
            </div>
            <div className="left2">
              <VerifiedIcon />

              <div className="s-1">
                <h3>No-Sql</h3>
                <p>Experienced</p>
              </div>
              <VerifiedIcon />
              <div className="s-1">
                <h3>Api</h3>
                <p>Experienced</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Exprince;
