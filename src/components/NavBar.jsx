import React, { useState } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import {Link} from "react-scroll"
const NavBar = () => {

    const [nav, setNav]=useState(false);

// we create an array of objects, objects having id and links we'll run a loop on this array(map) to display in our nav bar
    const links=[
        {
            id:1,
            link:'home'
        },
        {
            id:2,
            link:'about'
        },
        {
            id:3,
            link:'portfolio'
        },
        {
            id:4,
            link:'experience'
        },
        {
            id:5,
            link:'contact'
        }
    ]
  
    return (

    // so idhar ham flexbox layout le aaye justify bw jisse saare elemnts navabar me evenly spavced ho items center se vertically center honge child elements  full width lega height lega 20 or xside padding is 4(px) fixed se jab tum scroll bhi agar karte ho toh vahi ka vahi rahega navbar
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2 hover:animate-rainbow">Pratham</h1>
      </div>

      {/* here we use the map function to traverse thru all the ids and links and hdden md:flex means for medium screens like laptop the links will get displayed ow default is hidden as by default tailwind adopts mobile first approach */}
      <ul className='hidden md:flex'>
        {
            links.map(({id,link})=>(
            <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-110 duration-200"><Link to={link} smooth duration={500}>{link}</Link></li>))
        }
      </ul>

      <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-400 md:hidden'>
      {/* md:hidden se medium screen devices like laptops me ye(bar or cross vala sign) hidden rahega */}
        {nav?<FaTimes size={30}/>:<FaBars size={30}/>}
      </div>
      {
        nav&&(<ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-orange-800 text-gray-400'>
            {links.map(({id,link})=>(
            <li key={id} className="px-4 py-6 cursor-pointer capitalize text-4xl"><Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>{link}</Link></li>))}
        </ul>)
      }
    </div>
  )
}

export default NavBar
