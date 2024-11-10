import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
  return (
    <div id="mainDivAbout">
      <div><Image src={'/aboutImage.jpeg'} alt='' width={1000} height={700}/></div>

    <div id='mainDivAbout1'>
      <h2 id='abouth2'>About Me</h2>
      <p id='aboutPara'>
        Hi, I'm <span id="aboutSpan">Maila Khan</span>, a passionate web developer with a focus on creating user-friendly and visually appealing websites.
      </p>
      <p  id='aboutPara2'>
        I specialize in web development using modern frameworks like Next.js, with a strong focus on responsive design using Tailwind CSS.
      </p>
      <p id='aboutPara3'>
        I have worked on multiple projects, including creating a beauty salon website and a personal portfolio, showcasing my ability to transform ideas into functional and beautiful designs.
      </p>
      <p id='aboutPara4'>
        My goal is to continuously grow as a developer, taking on challenging projects that push my creativity and technical skills.
      </p>
      <p id='aboutPara5'>
        Feel free to reach out to me if you’d like to discuss a project or just want to connect!
      </p>
      <div id='abotDiv'></div>
    </div>
    </div>
  );
};

export default AboutUs;
