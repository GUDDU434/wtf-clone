import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './card.module.css'

export const ResultCard = ({user_id,gym_name,address1,city,plan_price,plan_name,distance_text}) => {
 const navigate = useNavigate();
const handleclick=(gym_id)=>{

  navigate(`/gym_details/${gym_id}`)

}
 
  return (
    <div onClick={()=>handleclick(user_id)} className={styles.card}>
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
