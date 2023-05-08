import React from 'react'
import HeroImage from '../assets/heroImage.jpg'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {Link} from "react-scroll"
const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">

    {/* all these md and sm are breakpoint dont confuse them as medium or small screens so unprefixed jab tu likhta hai kuch bhi itsz for mobile devices as its mobile first approach and when you use sm it means you target 640px and above screens where md means 768px and more width of screens */}

       <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
          <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Web Developer</h2>
            <p className='text-gray-400 py-4 max-w-md'>
              Looking for a challenging role to utilize my engineering skills that can contribute to the company’s growth as well as enhance my knowledge
            </p>
          <div>
          <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            MdKeyboardArrowRight
          </div>
        </div>
        <div>
          <img src={HeroImage} alt='myProfile' className='rounded-2xl mx-auto w-2/3 md:w-full'/>
        </div>
      </div>

    </div>
  )
}

export default Home
