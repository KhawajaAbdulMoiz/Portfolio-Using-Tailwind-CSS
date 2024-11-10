
import React from 'react'
import Image from 'next/image';
import './style.css';

function Skills() {
    return (
        <div>
            <h1 className='skls text-white ml-[47%] font-poppins font-[42px] pt-[9%] text-[46px]'>My Skills</h1>
            <div className="section1 flex flex-row gap-[13%] justify-center mt-[4%]">
                <div className="skill1">
                <h2 className='lang text-[36px] font-bold text-center text-[aliceblue] font-serif'>Python</h2>
                    <Image
                        src="/python.png"
                        alt="image"
                        width={60}
                        height={60}
                        className="my-skills p-[37px] rounded-[11px] bg-[#3D3E42] "
                        style={{ width: 'auto', height: 'auto' }}
                    />
                  
                </div>
                <div className="skill1 ">
                    <h2 className='lang text-[36px] font-bold text-center text-[aliceblue] font-serif'>Flask</h2>
                    <Image
                        src="/flask.png"
                        alt="image"
                        width={60}
                        height={60}
                        className="my-skills p-[37px] rounded-[11px] bg-[#3D3E42] "
                        style={{ width: 'auto', height: 'auto' }}
                    />


                </div>
                <div className="skill1">
                    <h2 className='lang text-[36px] font-bold text-center text-[aliceblue] font-serif'>React</h2>
                    <Image
                        src="/react.png"
                        alt="image"
                        width={60}
                        height={60}
                        className="my-skills p-[37px] rounded-[11px] bg-[#3D3E42] "
                        style={{ width: 'auto', height: 'auto' }}
                    />

                </div>
                <div className="skill1">
                    <h2 className='lang text-[36px] font-bold text-center text-[aliceblue] font-serif'>C++</h2>
                    <Image
                        src="/c++.png"
                        alt="image"
                        width={60}
                        height={60}
                        className="my-skills p-[37px] rounded-[11px] bg-[#3D3E42] "
                        style={{ width: 'auto', height: 'auto' }}
                    />

                </div>

            </div>
            <div className="section1 flex flex-row gap-[13%] justify-center mt-[4%]">
                <div className="skill1">
                <h2 className='lang text-[36px] font-bold text-center text-[aliceblue] font-serif'>HTML</h2>
                    <Image
                        src="/html.png"
                        alt="image"
                        width={60}
                        height={60}
                        className="my-skills  p-[37px] rounded-[11px] bg-[#3D3E42] "
                        style={{ width: 'auto', height: 'auto' }}
                    />
                  
                </div>
                <div className="skill1">
                    <h2 className='lang text-[36px] font-bold text-center text-[aliceblue] font-serif'>CSS</h2>
                    <Image
                        src="/css.png"
                        alt="image"
                        width={60}
                        height={60}
                        className="my-skills  p-[37px] rounded-[11px] bg-[#3D3E42] "
                        style={{ width: 'auto', height: 'auto' }}
                    />


                </div>
                <div className="skill1">
                    <h2 className='lang text-[36px] font-bold text-center text-[aliceblue] font-serif'>Typescript</h2>
                    <Image
                        src="/TS.png"
                        alt="image"
                        width={60}
                        height={60}
                        className="my-skills  p-[37px] rounded-[11px] bg-[#3D3E42] "
                        style={{ width: 'auto', height: 'auto' }}
                    />

                

                </div>

            </div>
            <div className="section1 flex flex-row gap-[13%] justify-center mt-[4%]">
           
                <div className="skill1">
                    <h2 className='lang text-[36px] font-bold text-center text-[aliceblue] font-serif'>Next JS</h2>
                    <Image
                        src="/next.png"
                        alt="image"
                        width={70}
                        height={70}
                        className="my-skills  p-[37px] rounded-[11px] bg-[#3D3E42] "
                        style={{ width: 'auto', height: 'auto' }}
                    />

                </div>
              
                <div className="skill1">
                    <h2 className='lang text-[36px] font-bold text-center text-[aliceblue] font-serif'>Javascript</h2>
                    <Image
                        src="/js.png"
                        alt="image"
                        width={60}
                        height={60}
                        className="my-skills  p-[37px] rounded-[11px] bg-[#3D3E42]  "
                        style={{ width: 'auto', height: 'auto' }}
                    />

                </div>
               

            </div>
            <div className="section1 flex flex-row gap-[13%] justify-center mt-[4%]">
                
              
            <div className="skill1 ">
                <h2 className='lang text-[36px] font-bold text-center text-[aliceblue] font-serif'>My Sql</h2>
                    <Image
                        src="/mysql.png"
                        alt="image"
                        width={60}
                        height={60}
                        className="my-skills  p-[37px] rounded-[11px] bg-[#3D3E42] "
                        style={{ width: 'auto', height: 'auto' }}
                    />
                  
                </div>
               

            </div>

        </div>
    )
}

export default Skills
