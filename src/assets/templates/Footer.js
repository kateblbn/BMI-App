import React, { useState } from 'react'
import footer from '../css/footer.module.css'
import calc from '../css/calculator.module.css'


function getDate() {
  const today = new Date();
  const year = today.getFullYear();
  return year
}

function Footer() {
  const [currentDate, setCurrentDate] = useState(getDate())

  return (
    <footer className={footer.wrap}>
      <div>
        <p> <span><a className={calc.mail__footer} href='mailto:michael.jordany@clubmetrousa.com'>Contact me</a> </span></p>
      </div>
      <div className={footer.ftr}>
        &copy; {currentDate}  &hearts; <a className={footer.mail} href="mailto:kate.blbn@gmail.com">Kate Blbn</a>  - Built with React
      </div>
    </footer>
  )
}

export default Footer