import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 via-black to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20">
        Pratham Goswami is a dedicated B.Tech student specializing in Computer Science Engineering at Jaypee Institute of Information Technology, Noida. With a strong academic background and a CGPA of 7.4 (till the 6th semester), Pratham possesses understanding of data structures and algorithms. He is proficient in web development technologies, including HTML, CSS, JavaScript, and Tailwind CSS. Pratham has intermediate-level expertise in React, allowing him to develop dynamic and interactive user interfaces. His commitment to continuous learning and growth fuels his drive to seek challenging opportunities where he can contribute to a company's success.
        </p>
        <br/>
        <p className="text-xl">
        In my free time, I enjoy playing soccer and watching psychological thrillers as well as crime documentaries. These activities allow me to unwind and stimulate my mind with new ideas and perspectives. I find that they also help me to think creatively and solve problems more effectively, which can be useful in my work as a developer.
        </p>
      </div>
    </div>
  )
}

export default About
