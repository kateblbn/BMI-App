import React, { useState } from 'react'
import disc from '../img/icons/game-icon.svg'
import calc from '../css/calculator.module.css'
import '../css/css.css'


function Calculator() {
    const [radio, setRadio] = useState(false);
    console.log(radio);
    const [cm, setCm] = useState(0)
    const [kg, setKg] = useState(0)
    const [inMeas, setInMeas] = useState(0)
    const [lbs, setlbs] = useState(0)
    //result
    const [resMetric, setResmetric] = useState(false)
    const [resImper, setResImper] = useState(false)

    // METRIC
    let m = cm / 100;
    const calcMetric = () => {
        let res = kg / Math.pow(m, 2)
        return setResmetric(res.toFixed(2))
    }

    //IMPERIAL
    const calcImperial = () => {
        let res = 703 * (lbs / (inMeas * inMeas))
        return setResImper(res.toFixed(2))
    }

    const minWeightMetric = (18.5 * Math.pow(m, 2)).toFixed(1)
    const maxWeightMetric = (24.9 * Math.pow(m, 2)).toFixed(1)

    const minWeightImper = ((18.5 / 703) * Math.pow(inMeas, 2)).toFixed(1)
    const maxWeightImper = ((24.9 / 703) * Math.pow(inMeas, 2)).toFixed(1)

    const hiddenImp = (radio === 'imperial') ? '' : 'hidden';
    const hiddenMetr = (radio === 'metric') ? '' : 'hidden';

    const resultTemplate =
        (resMetric < 18.5 && resImper < 18.5) ? <div>Your BMI suggests you’ve underweight. Your ideal weight is between <span className={hiddenMetr}> {minWeightMetric} - {maxWeightMetric} kg</span> <span className={hiddenImp}> {minWeightImper} - {maxWeightImper} lb</span></div>
            : ((resMetric >= 18.5 && resMetric <= 25) || (resImper >= 18.5 && resImper < 25)) ? <div>Congratulation! Your BMI suggests you’re a healthy weight. Your ideal weight is between <span className={hiddenMetr}> {minWeightMetric} - {maxWeightMetric} kg</span> <span className={hiddenImp}> {minWeightImper} - {maxWeightImper} lb</span>  </div>
                : ((resMetric > 25 && resMetric <= 39.9) || (resImper >= 25 && resImper < 39.9)) ? <div> Your BMI suggests you’ve overweight. Your ideal weight is between <span className={hiddenMetr}> {minWeightMetric} - {maxWeightMetric} kg</span> <span className={hiddenImp}> {minWeightImper} - {maxWeightImper} lb</span> <span><a className={calc.mail} href='mailto:michael.jordany@clubmetrousa.com'>Contact me</a> and I'll help you </span> </div>
                    : (resMetric >= 40 || resImper >= 40) ? <div>Your BMI suggests you’ve obese. Your ideal weight is between <span className={hiddenMetr}> {minWeightMetric} - {maxWeightMetric} kg</span> <span className={hiddenImp}> {minWeightImper} - {maxWeightImper} lb</span> <span><a className={calc.mail} href='mailto:michael.jordany@clubmetrousa.com'>Contact me</a> and I'll help you </span> </div> : '';

    const displayResImpMetr = (radio === 'metric') ? resMetric : resImper;

    console.log(resMetric);

    const checkImperOrMetr = () => (radio === 'metric') ? calcMetric() : calcImperial()

    const enter = (e) => {
        if (e.key === 'Enter') {
            return checkImperOrMetr()
        }
    }
    const showParamsMetric = (radio === 'metric') ? 'active' : 'hidden';
    const showParamsImperial = (radio === 'imperial') ? 'active' : 'hidden';
    const showWelcome = (radio === false) ? 'active' : 'hidden';;
    const showResult = (radio !== false) ? 'active' : 'hidden';
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
                                <input onChange={(e) => { setRadio(e.target.value) }} checked={radio === 'metric'} className={calc.radio} id='metric' name='metric' value='metric' type='radio' />
                                <label for='metric' className={calc.label}>Metric</label>
                            </div>
                            <div className={calc.MI}>
                                <input onChange={(e) => { setRadio(e.target.value) }} checked={radio === 'imperial'} className={calc.radio} id='imperial' name='imperial' value='imperial' type='radio' />
                                <label for='imperial' className={calc.label}>Imperial</label>
                            </div>
                        </div>
                        <div className={showParamsMetric}>
                            <div className={calc.flexMetric}>
                                <div className={calc.height}>
                                    <label className={calc.label}>Height</label>
                                    <input onKeyDown={enter}
                                        onChange={(e) => setCm(e.target.value)}
                                        className={calc.InputNumber} type='number' placeholder='0' />
                                    <div className={calc.measure}>cm</div>
                                </div>
                                <div className={calc.weight}>
                                    <label className={calc.label}>Weight</label>
                                    <input onKeyDown={enter}
                                        onChange={(e) => setKg(e.target.value)}
                                        className={calc.InputNumber} type='number' placeholder='0' />
                                    <div className={calc.measure}>kg</div>
                                </div>
                            </div>

                        </div>
                        <div className={showParamsImperial} >
                            <div className={calc.flexImperial}>
                                <div className={calc.height}>
                                    <label className={calc.label}>Height</label>
                                    <input onKeyDown={enter}
                                        onChange={(e) => setInMeas(e.target.value)}
                                        className={calc.InputNumber} type='number' placeholder='0' />
                                    <div className={calc.measure}>in</div>
                                </div>
                                <div className={calc.weight}>
                                    <label className={calc.label}>Weight</label>
                                    <input onKeyDown={enter}
                                        onChange={(e) => setlbs(e.target.value)}
                                        className={calc.InputNumber} type='number' placeholder='0' />
                                    <div className={calc.measure}>ibs</div>
                                </div>
                            </div>
                        </div>
                        <div className={(radio === false) ? 'hidden' : ''}>
                            <button onKeyDown={enter} onClick={checkImperOrMetr} className={calc.btn}>check</button>
                        </div>

                        <div className={showWelcome}>
                            <div className={calc.result}>
                                <h4 className={calc.result__title}>Welcome!</h4>
                                <p className={calc.result__descr}>Enter your height and weight and you’ll see your BMI result here</p>
                                <span></span>
                            </div>
                        </div>
                        <div className={showResult}>
                            <div className={calc.wrapResult}>
                                <div className={calc.item}>
                                    <h3 className={calc.name}>Your BMI is...</h3>
                                    <span className={calc.number}>{displayResImpMetr}</span>
                                </div>

                                <p className={calc.expl}> {resultTemplate} </p>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Calculator