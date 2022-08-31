import React from 'react'
import styles from './card.module.css'

export const ResultCard = ({gym_name,address1,city,plan_price,plan_name,distance_text}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageDiv}><img src="" alt="Image of the gym" /></div>
      <div className={styles.info}>
        <h2>{gym_name}</h2>
        <p>{"4 star"}</p>
        <p>{address1},{city}</p>

        {/* <h3>{plan_price}, for {plan_name}</h3> */}
      </div>
      <div className={styles.btnDiv}>
        <button>Book Now</button>
      </div>
    </div>
  )
}
