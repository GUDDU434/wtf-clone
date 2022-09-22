import React from "react";
import styles from "./plan.module.css";

export const PlanCard = ({
  plan_name,
  plan_price,
  duration,
  description,
  index,
}) => {
  let rgbValue1 = Math.floor(Math.random() * 255);
  let rgbValue2 = Math.floor(Math.random() * 255);
  let rgbValue3 = Math.floor(Math.random() * 255);

  return (
    <div
      className={styles.plan}
      style={{
        backgroundColor: `rgba(${rgbValue1},${rgbValue2},${rgbValue3}, 0.59)`,
      }}
    >
      <div className={styles.planName}>
        <h3>PLAN {index + 1}</h3>
        <h2>
          {plan_name} <span>( {duration} Days)</span>
        </h2>
        <p>{description}</p>
      </div>
      <div>
        <h2>Rs. {plan_price}</h2>
      </div>
    </div>
  );
};
