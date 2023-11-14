import React from 'react'
import limit from '../css/limit.module.css';
import age from '../img/icons/age.svg'
import gender from '../img/icons/gender.svg'
import muscle from '../img/icons/muscle.svg'
import pregnance from '../img/icons/pregnancy.svg'
import race from '../img/icons/race.svg'


function Limitations() {
    return (
        <div className={limit.wrapper}>
            <div className={limit.wrapItem}>
                <h3 className={limit.genTitle}>Limitations of BMI</h3>
                <p className={limit.descr}>Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
            </div>
            <div className={limit.wrapItem1}>
                <div className={limit.flexItems}>
                    <img className={limit.image} src={gender} alt='gender' />
                    <h3 className={limit.title}>Gender</h3>
                </div>
                <p className={limit.descr}>The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.</p>
            </div>
            <div className={limit.wrapItem2}>
                <div className={limit.flexItems}>
                    <img className={limit.image} src={age} alt='age' />
                    <h3 className={limit.title}>Age</h3>
                </div>
                <p className={limit.descr}>In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.</p>
            </div>
            <div className={limit.wrapItem3}>
                <div className={limit.flexItems}>
                    <img className={limit.image} src={muscle} alt='muscle' />
                    <h3 className={limit.title}>Muscle</h3>
                </div>
                <p className={limit.descr}>BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.</p>
            </div>
            <div className={limit.wrapItem4}>
                <div className={limit.flexItems}>
                    <img className={limit.image} src={pregnance} alt='pregnance' />
                    <h3 className={limit.title}>Pregnancy</h3>
                </div>
                <p className={limit.descr}>Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.</p>
            </div>
            <div className={limit.wrapItem5}>
                <div className={limit.flexItems}>
                    <img className={limit.image} src={race} alt='race' />
                    <h3 className={limit.title}>Race</h3>
                </div>
                <p className={limit.descr}>Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.</p>
            </div>


        </div >
    )
}

export default Limitations

