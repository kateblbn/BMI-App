import React, { useState } from 'react'
import disc from '../img/icons/game-icon.svg'
import calc from '../css/calculator.module.css'


function Calculator() {
    const [radio, setRadio] = useState();
    console.log(radio);

    const chooseRadio = (e) => {
        setRadio(e.target.value)
    }
    return (
        <div className={calc.wrapper}>
            <div className={calc.gradient}></div>
            <div className={calc.zIndex}>
                <div className={calc.logo}>
                    <img src={disc} alt='disc' />
                </div>
                <div className={calc.flexPage}>
                    <div className={calc.wrap}>
                        <h1 className={calc.title}>Body Mass Index Calculator</h1>
                        <p className={calc.descr}>Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
                    </div>
                    <div className={calc.wrapForm}>
                        <h3 className={calc.titleForm}>Enter your details below</h3>
                        <div className={calc.flex}>
                            <div className={calc.MI}>
                                <input onChange={chooseRadio} className={calc.radio} id='metric' name='metric' value='metric' type='radio' />
                                <label for='metric' className={calc.label}>Metric</label>
                            </div>
                            <div className={calc.MI}>
                                <input onChange={chooseRadio} className={calc.radio} id='imperial' name='imperial' value='imperial' type='radio' />
                                <label for='imperial' className={calc.label}>Imperial</label>
                            </div>
                        </div>
                        <div className={calc.flexMetric}>
                            <div className={calc.height}>
                                <label className={calc.label}>Height</label>
                                <input className={calc.InputNumber} type='number' placeholder='0' />
                                <div className={calc.measure}>cm</div>
                            </div>
                            <div className={calc.weight}>
                                <label className={calc.label}>Weight</label>
                                <input className={calc.InputNumber} type='number' placeholder='0' />
                                <div className={calc.measure}>kg</div>
                            </div>
                        </div>
                        <div className={calc.flexImperial}>
                            <div className={calc.height}>
                                <label className={calc.label}>Height</label>
                                <div className={calc.flexInput}>
                                    <div className={calc.slInpt}>
                                        <input className={calc.InputNumber} type='number' placeholder='0' />
                                        <div className={calc.measureImp}>ft</div>
                                    </div>
                                    <div className={calc.slInpt}>
                                        <input className={calc.InputNumber} type='number' placeholder='0' />
                                        <div className={calc.measureImp}>in</div>
                                    </div>
                                </div>
                            </div>
                            <div className={calc.weight}>
                                <label className={calc.label}>Weight</label>
                                <div className={calc.flexInput}>
                                    <div className={calc.slInpt}>
                                        <input className={calc.InputNumber} type='number' placeholder='0' />
                                        <div className={calc.measureImp}>st</div>
                                    </div>
                                    <div className={calc.slInpt}>
                                        <input className={calc.InputNumber} type='number' placeholder='0' />
                                        <div className={calc.measureImp}>ibs</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className={calc.btn}>check</button>

                        <div className={calc.result}>
                            <h4 className={calc.result__title}>Welcome!</h4>
                            <p className={calc.result__descr}>Enter your height and weight and you’ll see your BMI result here</p>
                            <span></span>
                        </div>
                        <div className={calc.wrapResult}>
                            <div className={calc.item}>
                                <h3 className={calc.name}>Your BMI is...</h3>
                                <span className={calc.number}>24.5</span>
                            </div>
                            <p className={calc.expl}>Your BMI suggests you’re a healthy weight. Your ideal weight is between <span className={calc.span}>63.3kgs - 85.2kgs</span> <span className={calc.span}>9st 6lbs - 12st 10lbs.</span>.</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Calculator