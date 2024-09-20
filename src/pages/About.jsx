// About.jsx
import React from 'react';
import '../styles/About.css';
import jewel from "../assets/JEWEL.jpg"
// import profile from '../assets/profile.jpg'; // Ensure you have a profile.jpg in assets

const About = () => {
  return (
    // <div className="about">
    //   <h2>About Me</h2>
    //   {/* <img src={profile} alt="Your Name" className="profile-pic" /> */}
    //   <p>
    //     Hello! I'm [Your Name], a [Your Profession] with a passion for creating
    //     innovative solutions and enhancing user experiences. With expertise in
    //     [Your Skills], I strive to deliver high-quality projects that make a
    //     difference.
    //   </p>
    //   <a href="/resume.pdf" download className="resume-link">Download Resume</a>
    // </div>
    <div className="container">
        <div className="text-section">
            <h1>So, who am I?</h1>
            <p className="about-text">My name is Lorenzo, and I’ve spent the last 15 years honing my technical skills as a user support engineer in Singapore. This experience has equipped me with a deep understanding of user needs and the ability to troubleshoot complex issues efficiently. As I embark on my journey to become a software engineer in Canada, I’m excited to leverage my IT background to create innovative solutions. By combining my hands-on experience with the theoretical knowledge I’ll gain from my studies, I’m confident in my ability to develop high-quality software that meets the evolving demands of today’s digital landscape.</p>
            <a href="../src/assets/resume.pdf" class="btn">Download Resume</a>
        </div>
        <div className="image-section">
            <img src={jewel} alt="Social Media Bestie"/>
        </div>
    </div>
  );
};

export default About;
