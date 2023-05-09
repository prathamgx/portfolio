import React from 'react'
import todo from '../assets/portfolio/todo.png'
import covidmv from '../assets/portfolio/covidmv.jpg'
import spotify from '../assets/portfolio/spotify.jpg'
import restaurant from '../assets/portfolio/restaurant.jpg'
const Portfolio = () => {

    
    const portfolios =[
        {
            id:1,
            src:todo,
            link:"https://prathamgx.github.io/todo-list/",
            code:"https://github.com/prathamgx/todo-list"
        },
        {
            id:2,
            src:spotify,
            link:"https://prathamgx.github.io/fiesta/",
            code:"https://github.com/prathamgx/fiesta"
        },
        {
            id:3,
            src:restaurant,
            link:"https://pgsrestaurant.netlify.app/",
            code:"https://github.com/prathamgx/restaurant"
        },
        {
            id:4,
            src:covidmv,
            link:"###",
            code:"###"
        }
    ]
    
    const demo = (id) => {
        const portfolioItem = portfolios.find((item) => item.id === id);
        if (portfolioItem && portfolioItem.link!=="###") {
          window.open(portfolioItem.link, '_blank');
        }
        else if (portfolioItem && portfolioItem.link==="###") {
            alert("I haven't deployed it yet, try again later.");
          }
      };    

    const code =(id) =>{
        const portfolioItem=portfolios.find((item)=>item.id===id);
        if(portfolioItem&&portfolioItem.code!=="###"){
            window.open(portfolioItem.code, '_blank');
        }
        else if (portfolioItem && portfolioItem.code==="###") {
            alert("I haven't pushed it in github yet, try again later.");
          }
    }
    
    return (
        <div name='portfolio' className="bg-gradient-to-b from-black via-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>Check out some of  my work</p>
        </div>

                <div className=' grid grid-cols-2 py-8 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                
                portfolios.map(({id,src})=>(
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img src={src} 
                alt="todo_proj" 
                className="rounded-md duration-200 hover:scale-105"
                />
                <div key={id} className='flex items-center justify-center'>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => demo(id)}>Demo</button>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={()=> code(id)}>Code</button>
                </div>
            </div>
        
            ))
        }
        </div>
      </div>
    </div>
  )
}

export default Portfolio
