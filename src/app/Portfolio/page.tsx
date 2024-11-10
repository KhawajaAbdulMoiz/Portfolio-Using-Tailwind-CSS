import React from 'react'
import Image from 'next/image';
import './style.css';

function Portfolio(){
    return (
        <div>
            <h1 className='skls text-white ml-[47%] font-poppins font-[42px] pt-[9%] text-[46px]' id='portfolio'>Portfolio</h1>
            <div className="prt-container flex flex-row gap-[2%] rounded-[20px] justify-center mt-[6%] ml-[8%] pr-[9%]">
                <div className="prt1">
                    <a href="https://resume-builder-rose-eight.vercel.app/">
                    <Image
                        src="/Resume Builder.png"
                        alt="resume-builder"
                        width={600}
                        height={600}
                        className="prt-img-rb rounded-[22px] mt-[9%] h-[75%]"
                        
                    />
                    </a>
                     <h2 className='prt-text text-white text-center text-[19px] font-[Franklin Gothic Medium], sans-serif'>Resume Builder</h2>
                     <h3 className='prt-subtext text-white text-center text-[20px]'>Created using Typescript</h3>
                </div>
                
                <div className="prt1">
                    <a href="">
                        <Image
                            src="/Ams.png"
                            alt="apartment management system"
                            width={600}
                            height={700}
                            className="prt-img rounded-[22px] mt-[9%]"
                            
                        />
                    </a>
                    <h2 className='prt-text text-white text-center text-[19px] font-[Franklin Gothic Medium], sans-serif'>Apartment Management System
                    </h2>
                     <h3 className='prt-subtext text-white text-center text-[20px]'>Created Using Python(Flask)</h3>
                </div>
                <div className="prt1">
                    <a href="https://bmi-calculator-30-projects.vercel.app/">
                        <Image
                            src="/BMI.jpg"
                            alt="bmi calculator"
                            width={600}
                            height={700}
                            className="prt-img rounded-[22px] mt-[9%]"
                            
                        />
                    </a>
                    <h2 className='prt-text text-white text-center text-[19px] font-[Franklin Gothic Medium], sans-serif'>BMI Calculator
                    </h2>
                     <h3 className='prt-subtext text-white text-center text-[20px]'>Created Using Next JS</h3>
                </div>
               
            </div>
            <div className="prt-container flex flex-row gap-[2%] rounded-[20px] justify-center mt-[6%] ml-[8%] pr-[9%]">
                <div className="prt1">
                    <a href="https://github.com/KhawajaAbdulMoiz/NEXT-JS-PROJECTS">
                    <Image
                        src="/Weather App.jpg"
                        alt="image"
                        width={600}
                        height={600}
                        className="prt-img rounded-[22px] mt-[9%]" 
                        
                    />
                    </a>
                     <h2 className='prt-text text-white text-center text-[19px] font-[Franklin Gothic Medium], sans-serif'>Weather App
                     </h2>
                     <h3 className='prt-subtext text-white text-center text-[20px]'>Created Using Next JS</h3>
                </div>
                
                <div className="prt1">
                    <a href="https://calculat0r-r.vercel.app/">
                        <Image
                            src="/Calculator.jpg"
                            alt="simple calculator"
                            width={600}
                            height={700}
                            className="prt-img rounded-[22px] mt-[9%]"
                            
                        />
                    </a>
                    <h2 className='prt-text text-white text-center text-[19px] font-[Franklin Gothic Medium], sans-serif'>Calculator
                    </h2>
                     <h3 className='prt-subtext text-white text-center text-[20px]'>Created Using HTML/CSS</h3>
                </div>
                <div className="prt1">
                    <a href="">
                        <Image
                            src="/Encryption (1).jpg"
                            alt="secret message app"
                            width={600}
                            height={700}
                            className="prt-img rounded-[22px] mt-[9%]"
                            
                        />
                    </a>
                    <h2 className='prt-text text-white text-center text-[19px] font-[Franklin Gothic Medium], sans-serif'>Secret Message App
                    </h2>
                     <h3 className='prt-subtext text-white text-center text-[20px]'>Created Using Python(Tkinter)</h3>
                </div>
               
            </div>
            <div className="prt-container flex flex-row gap-[2%] rounded-[20px] justify-center mt-[6%] ml-[8%] pr-[9%]">
                <div className="prt1">
                    <a href="https://github.com/KhawajaAbdulMoiz/GIAIC-45-Assignments">
                    <Image
                        src="/GIAIC.png"
                        alt="giaic 45 assignments"
                        width={600}
                        height={600}
                        className="prt-img rounded-[22px] mt-[9%]"
                        
                    />
                    </a>
                     <h2 className='prt-text text-white text-center text-[19px] font-[Franklin Gothic Medium], sans-serif'>GIAIC-45-Assignments
                     </h2>
                     <h3 className='prt-subtext text-white text-center text-[20px]'>Completed My 45 Tasks at GIAIC</h3>
                </div>
                
                <div className="prt1">
                    <a href="https://github.com/KhawajaAbdulMoiz/TIC_TAC_TOE-in-C-">
                        <Image
                            src="/TicTacToe.jpg"
                            alt="tic-tac-toe"
                            width={600}
                            height={700}
                            className="prt-img rounded-[22px] mt-[9%]"
                            
                        />
                    </a>
                    <h2 className='prt-text text-white text-center text-[19px] font-[Franklin Gothic Medium], sans-serif'>TIC TAC TOE</h2>
                     <h3 className='prt-subtext text-white text-center text-[20px]'>Created Using C++</h3>
                </div>
                <div className="prt1">
                    <a href="https://github.com/KhawajaAbdulMoiz/CLI-SIMPLE_CALCULATOR">
                        <Image
                            src="/Cli-TS.png"
                            alt="cli-simple-calculator"
                            width={600}
                            height={700}
                            className="prt-img rounded-[22px] mt-[9%]"
                            
                        />
                    </a>
                    <h2 className='prt-text text-white text-center text-[19px] font-[Franklin Gothic Medium], sans-serif'>CLI Calculator
                    </h2>
                     <h3 className='prt-subtext text-white text-center text-[20px]'>Using Typescript/Inquirer/Chalk</h3>
                </div>
               
            </div>
            <div className="prt-container flex flex-row gap-[2%] rounded-[20px] justify-center mt-[6%] ml-[8%] pr-[9%]">
                <div className="prt1">
                    <a href="https://github.com/KhawajaAbdulMoiz/CLI_Number_Guessing_Game">
                    <Image
                        src="/Number-Guessing-Game.png"
                        alt="cli-number-guessing-game"
                        width={600}
                        height={600}
                        className="prt-img rounded-[22px] mt-[9%]"
                        
                    />
                    </a>
                     <h2 className='prt-text text-white text-center text-[19px] font-[Franklin Gothic Medium], sans-serif'>CLI Number Guessing Game
                     </h2>
                     <h3 className='prt-subtext text-white text-center text-[20px]'>Using Typescript/Inquirer/Chalk</h3>
                </div>
                
                <div className="prt1">
                    <a href="https://github.com/KhawajaAbdulMoiz/CLI-ATM_PROJECT">
                        <Image
                            src="/Atm-Project.jpg"
                            alt="cli-atm-project"
                            width={600}
                            height={700}
                            className="prt-img rounded-[22px] mt-[9%]"
                            
                        />
                    </a>
                    <h2 className='prt-text text-white text-center text-[19px] font-[Franklin Gothic Medium], sans-serif'>CLI ATM project
                    </h2>
                     <h3 className='prt-subtext text-white text-center text-[20px]'>Using Typescript/Inquirer/Chalk</h3>
                </div>
                <div className="prt1">
                    <a href="https://github.com/KhawajaAbdulMoiz/Transcript-Generator">
                        <Image
                            src="/tg.png"
                            alt="cli-transcript-generator"
                            width={600}
                            height={700}
                            className="prt-img rounded-[22px] mt-[9%]"
                            
                        />
                    </a>
                    <h2 className='prt-text text-white text-center text-[19px] font-[Franklin Gothic Medium], sans-serif'>Transcript-Generator
                    </h2>
                     <h3 className='prt-subtext text-white text-center text-[20px]'>Created Using C++</h3>
                </div>
               
            </div>
            
            
        </div>
        
    )
}

export default Portfolio
