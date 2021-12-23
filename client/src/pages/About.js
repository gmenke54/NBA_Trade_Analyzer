import React from 'react';
import '../css/About.css';

const About = () => {
  return (
    <div>
      <div className="about">
        <h3>This a fantasy basketball hub and trade analyzer for the NBA.</h3>
        <div className="our-about">
          <h3>
            This full CRUD MERN application was built by
            <a
              className="linked-in-link"
              href="https://www.linkedin.com/in/grantmenke/"
            >
              Grant Menke
            </a>
          </h3>
        </div>
      </div>
      <div className="credits">
        <div className="resources">Resources</div>
        <div className="links">
          <a
            className="linked-in"
            href="https://www.balldontlie.io/#introduction"
          >
            NBA Stats API
          </a>
          <a className="linked-in" href="https://www.canva.com/">
            Canva
          </a>
          <a
            className="linked-in"
            href="https://material.io/design/color/dark-theme.html"
          >
            Dark Theme Inspiration
          </a>
          <a
            className="linked-in"
            href="https://www.nba.com/stats/alltime/#!?SeasonType=Regular%20Season&PerMode=PerGame"
          >
            NBA Historical Stats
          </a>
          <a
            className="linked-in"
            href="https://medium.com/@avinash.sarguru/getting-nba-player-pictures-for-you-application-6106d5530943"
          >
            NBA Player Pictures
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
