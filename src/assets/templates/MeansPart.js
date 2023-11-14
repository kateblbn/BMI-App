import React from 'react'
import man from '../img/bd-man.png'
import means from '../css/means.module.css'
import line from '../img/icons/line-mean.svg'

function MeansPart() {
    return (
        <div className={means.wrap}>
            <div className={means.moveLine}>
                <img src={line} alt='line' />
            </div>
            <div className={means.image}>
                <div className={means.gradient}></div>
                <img className={means.img} src={man} alt='man' />
            </div>
            <div className={means.explain}>
                <h2 className={means.title}>What your BMI result means</h2>
                <p className={means.descr}>A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
                    Maintaining a healthy weight may lower your chances of experiencing health issues later on,
                    such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content,
                    incorporating ample fruits and vegetables. Additionally, strive for regular physical activity,
                    ideally about 30 minutes daily for five days a week.</p>
            </div>
        </div>
    )
}

export default MeansPart