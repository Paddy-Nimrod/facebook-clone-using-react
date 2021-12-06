import React from "react";
import "./main.component.css";
import img from "../../assets/image6.jpg";
import img1 from "../../assets/image1.jpg";
import img2 from "../../assets/image3.jpg";
import img3 from "../../assets/image4.jpg";

const MainComponent = () => {
  return (
    <div className="main-content">
      <div className="left-column">
        <div className="side-row">hello brother</div>
        <div className="side-row">Friends</div>
        <div className="side-row">Groups</div>
        <div className="side-row">Market Place</div>
        <div className="side-row">Watch</div>
        <div className="side-row">Memories</div>
        <div className="side-row">Saved</div>
        <div className="side-row">Pages</div>
        <div className="side-row">Events</div>
        <div className="side-row">Jobs</div>
      </div>
      <div className="center-column">
        <div className="status-bar">
          <div className="status-card">
            <img src={img} alt="" width="100%" height="100%" />
          </div>
          <div className="status-card">
            <img src={img1} alt="" width="100%" height="100%" />
          </div>
          <div className="status-card">
            <img src={img3} alt="" width="100%" height="100%" />
          </div>
          <div className="status-card">
            <img src={img2} alt="" width="100%" height="100%" />
          </div>
          <div className="status-card">
            <img src={img3} alt="" width="100%" height="100%" />
          </div>
        </div>
        <div className="mid-search-bar"></div>
        <div className="mid-room-bar"> create room</div>
        <div className="story-card">
          <div></div>
          <div className="story-card-img-container">
            <div>
              <div className="profile-name-icon">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="whitesmoke"
                    class="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </div>
                <div className="p-class">
                  <div>
                    <b>Nimrod Ambetsa</b> shared a memory
                    <p>16 hrs.</p>
                  </div>
                </div>
              </div>
              <div className="post-description">
                <p>
                  I have spotted my car somewhere. I game my boys to have a road
                  test. I guess tomorrow they will be back.
                </p>
              </div>
            </div>
            <img src={img3} alt="" className="story-card-img " />
          </div>
        </div>
      </div>
      <div className="right-column">verified</div>
    </div>
  );
};

export default MainComponent;
