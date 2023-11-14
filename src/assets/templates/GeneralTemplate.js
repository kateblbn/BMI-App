import React from 'react'
import Calculator from './Calculator'
import MeansPart from './MeansPart'
import Health from './Health'
import Limitations from './Limitations'
import Footer from './Footer'

function GeneralTemplate() {
    return (
        <div>
            <Calculator />
            <MeansPart />
            <Health />
            <Limitations />
            <Footer/>
        </div>
    )
}

export default GeneralTemplate