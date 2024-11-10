import React from 'react'
import './style.css';
import Link from 'next/link';


function About() {
    return (
        <div className='container2 border-4 border-[#FFCC6C] p-[1%] mt-[11%] ml-[25%] text-center h-[515px] w-[49%] rounded-[17px]' id='about'>
           <h2 className="about2 text-[33px] text-white font-poppins font-bold mt-[80px] px-[15px] ml-[44px]" >About Me</h2>
            <h2 className="about text-[20px] text-white leading-[41px] ">
                I&apos;m currently pursuing a BSCS degree at Muhammad Ali Jinnah University. My journey in technology and software development <br /> is driven by a deep passion for learning and exploring new tools and frameworks. Over the past several months, I&apos;ve expanded my <br />skill set and practical experience across a broad spectrum of programming languages and frameworks.
            </h2 >
            <Link href={"/Khawaja-Abdul-Moiz(Resume).pdf"}>
            <button className='button mr-[20%] text-center mt-[2%] ml-[20%] h-[10%] w-[23%] rounded-[19px] border-2 border-[#FFCC6C] text-[#FFCC6C]'>Resume</button>
            </Link>
        </div>
    )
}

export default About
