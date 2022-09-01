import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styles from './plan.module.css'

export const PlanCard = ({plan_name,plan_price,duration,description,index}) => {
    const [rgbValue,setrgbValue] = useState(0)
    
    useEffect(()=>{
        setrgbValue(Math.floor(Math.random()* 0, 255))    
    },[])

    return (
    <div className={styles.plan} style={{backgroundColor:`rgba(${rgbValue}, ${rgbValue}, ${rgbValue}, 0.5)`}}>
       <div className={styles.planName}>
       <h3>PLAN {index+1}</h3>
        <h2>{plan_name} <span>( {duration} Days)</span></h2>
        <p>{description}</p>
       </div>
       <div>
        <h2>Rs. {plan_price}</h2>
       </div>

    </div>
  )
}
