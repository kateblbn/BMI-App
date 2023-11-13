import React from 'react'
import disc from '../img/icons/game-icon.svg'
import calc from '../css/calculator.module.css'


function Calculator() {
    return (
        <div className={calc.wrapper}>
            <div className={calc.logo}>
                <img src={disc} alt='disc' />
            </div>
            <div className={calc.wrap}>
                <h1 className={calc.title}>Body Mass Index Calculator</h1>
                <p className={calc.descr}>Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
            </div>
            <div className={calc.wrapForm}>
                <h3 className={calc.titleForm}>Enter your details below</h3>
                <div className={calc.flex}>
                    <div className={calc.MI}>
                        <input type='radio' />
                        <label>Metric</label>
                    </div>
                    <div className={calc.MI}>
                        <input type='radio' />
                        <label>Imperial</label>
                    </div>
                </div>
                <div className={calc.flex}>
                    <div className={calc.height}>
                        <label>Height</label>
                        <input type='number' />
                    </div>
                    <div className={calc.weight}>
                        <label>Weight</label>
                        <input type='number' />

                    </div>
                </div>

                <div className={calc.result}>
                    <h4 className={calc.result__title}>Welcome!</h4>
                    <p className={calc.result__descr}>Enter your height and weight and you’ll see your BMI result here</p>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Calculator