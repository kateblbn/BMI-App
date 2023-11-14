import React from 'react'
import eat from '../img/icons/eating.svg'
import exercise from '../img/icons/exercise.svg'
import sleep from '../img/icons/sleep.svg'
import health from '../css/health.module.css'


function Health() {
    return (
        <div className={health.wrapper}>
            <div className={health.gradient}></div>
            <div className={health.wrapItems}>
                <div className={health.circle}>
                    <div className={health.image}>
                        <img className={health.img} src={eat} alt='icon' />
                    </div>
                </div>

                <h3 className={health.title}>Healthy eating </h3>
                <p className={health.descr}>Healthy eating promotes weight control, disease prevention,
                    better digestion, immunity, mental clarity, and mood.</p>
            </div>
            <div className={health.wrapItems}>
                <div className={health.circle2}>
                    <div className={health.image}>
                        <img className={health.img} src={exercise} alt='icon' />
                    </div>
                </div>

                <h3 className={health.title}>Regular exercise </h3>
                <p className={health.descr}>Exercise improves fitness, aids weight control, elevates mood,
                    and reduces disease risk, fostering wellness and longevity.</p>
            </div>
            <div className={health.wrapItems}>
                <div className={health.circle3}>
                    <div className={health.image}>
                        <img className={health.img} src={sleep} alt='icon' />
                    </div>
                </div>

                <h3 className={health.title}>Adequate sleep</h3>
                <p className={health.descr}>Sleep enhances mental clarity, emotional stability, and physical wellness,
                    promoting overall restoration and rejuvenation.</p>
            </div>

        </div>
    )
}

export default Health



