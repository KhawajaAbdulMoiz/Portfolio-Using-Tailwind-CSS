import React from 'react'
import Header from './components/Main/page'
import Main from './Home/page'
import About from './About/page'
import Skills from './components/Main/MySkills/page'
import Portfolio from './Portfolio/page'
import Contact from './Contact/page'


function page() {
  return (
    <div>
      <Header />
      <Main />
      <About />
      <Skills />
      <Portfolio />
      <Contact/>
      
    </div>
  )
}

export default page


