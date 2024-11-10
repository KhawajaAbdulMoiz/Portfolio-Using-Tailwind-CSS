
import React from 'react';
import Image from 'next/image';
import './style.css';
import Link from 'next/link';


export default function Main() {
    return (
        <div className='main '>
            <div className='container text-white flex flex-row'>
                <div className='home'>
                    <h1 className='ml-[20%] pt-[18%] text-[46px]'>I&apos;M <span className='name font-poppins text-[84px] text-[#FFCC6C]'>Khawaja Abdul Moiz</span></h1>
                    <h1 className='subheading  mt-[-130px]'>Full Stack Developer</h1>
                    <Link href="#contact">
                    <button className='button text-center mt-[2%] ml-[20%] h-[9%] w-[23%] rounded-[19px] border-2 border-[#FFCC6C] text-[#FFCC6C]'>Contact</button>
                    </Link>
                    <div className="social-media flex flex-row mt-[31px] ml-[20%] gap-[20px]">
                <a href="https://www.linkedin.com/in/khawaja-abdul-moiz/">
                    <Image
                        src="/linkedin.png"
                        alt="linkedin"
                        width={40}
                        height={40}
                    />
                </a>
                <a href="https://github.com/KhawajaAbdulMoiz">
                    <Image
                        src="/github.png"
                        alt="github"
                        width={40}
                        height={40}
                    />
                </a>
                <a href="contactabdulmoiz2005@gmail.com">
                    <Image
                        src="/gmail.png"
                        alt="gmail"
                        width={40}
                        height={40}
                    />
                </a>
            </div>
        </div>
                <div>
                    <Image
                        src="/moiz2.jpg"
                        alt="image"
                        width={350}
                        height={530}
                        className="my-img rounded-full ml-[50%] mt-[150px]"
                        style={{ width: 'auto', height: 'auto' }}
                        loading="lazy"
                    />
                </div>
            </div>
           
        
        </div>
    );
}
