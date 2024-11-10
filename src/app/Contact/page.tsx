import React from 'react'
import './style.css';

function Contact() {
  return (
    <div className='cont mb-[20px]' id='contact'>
      <h1 className='skls text-white ml-[47%] font-poppins font-[42px] pt-[9%] text-[46px]'>Contact</h1>
      <form action="https://api.web3forms.com/submit" method="POST" className="form " data-form>
      <input type="hidden" name="access_key" value="75feb0f8-0081-465a-bef2-b332a86db2ab"></input>
      <input type="text" name="fullname" className="form-input px-[13px] w-[29%] p-[13px] border-[1px] border-[#FFCC6C] text-white  rounded-[14px] outline-none ml-[39%] mt-[1%]" placeholder="Full name" required data-form-input></input>
      <input type="email" name="email" className="form-input px-[13px] w-[29%] p-[13px] border-[1px] border-[#FFCC6C] text-white  rounded-[14px] outline-none ml-[39%] mt-[1%]" placeholder="Email address" required data-form-input></input>
      <div>
      <textarea name="message" className="form-input px-[13px] w-[29%] p-[13px] border-[1px] border-[#FFCC6C] text-white  rounded-[14px] outline-none ml-[39%] mt-[1%]" id='form h-[243px]' placeholder="Your Message" required data-form-input></textarea>
      </div>

      <button className='text-center mt-[2%] ml-[42%] h-[10%] w-[23%] rounded-[19px] border-2 border-[#FFCC6C] text-[#FFCC6C]'>Submit</button>
      </form>
    </div>
    
  )
}

export default Contact
