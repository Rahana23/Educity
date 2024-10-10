import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setShowVideo }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img 
          src={play_icon} 
          alt="" 
          className="play-icon" 
          onClick={() => setShowVideo(true)}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT EDUCITY</h3>
        <h2>Empowering Future Leaders</h2>
        <p>
          Educity is a comprehensive digital platform designed to cater to a
          variety of users, including prospective students, current students,
          faculty, and alumni. The homepage features an intuitive layout,
          showcasing key aspects such as academic programs, admissions
          information, and university news. With a focus on user-friendly
          navigation, visitors will easily access crucial resources, explore
          course offerings, and gain insights into campus life, all with a
          modern, visually appealing design.
        </p>
        <p>
          We offer a personalized portal where users can log in to access
          services such as course registration, academic schedules, library
          resources, and communication tools. This will ensure that students
          have all the necessary information to manage their academic journey
          seamlessly. We will also integrate support services, including
          financial aid, mental health resources, and career guidance, helping
          students maintain a balanced and successful university experience.
        </p>
        <p>
          Additionally, we will strengthen connections with alumni and external
          partners through dedicated sections for alumni networking, events, and
          donation opportunities. Showcasing research achievements, community
          outreach, and collaborative projects. Overall, we will serve as a
          dynamic, multifunctional platform that enhances engagement, supports
          academic success, and reflects the university's commitment to
          innovation and excellence.
        </p>
      </div>
    </div>
  );
};

export default About;
