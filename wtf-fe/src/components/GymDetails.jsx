import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl, getGymDetails, gymPlan } from "../redux/action";
import styles from "./gymDetails.module.css";
import { PlanCard } from "./PlanCard";

export const GymDetails = () => {
  const [plan, setplan] = useState([]);
  const [planLoading, setplanLoading] = useState(false);
  const { gym_id } = useParams();
  const navigate = useNavigate();
  console.log(gym_id);

  const dispatch = useDispatch();
  const { gymDetails, gymPlanData, isLoading, loadingPlan, terms } =
    useSelector((state) => state);

  // console.log(terms);

  useEffect(() => {
    getGymDetails(dispatch, gym_id);
    setplanLoading(true);
    axios
      .post(`${baseUrl}/gym/plan`, { gym_id })
      .then(({ data }) => {
        console.log(data);
        setplan(data.data);
        setplanLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setplanLoading(true);
      });
  }, []);
  return (
    <div>
      <div className={styles.gymImageSlider}>
        <img src="" alt="Sliding image" />
      </div>
      <div className={styles.backBtn} onClick={() => navigate("/")}>
        <i className="fa-solid fa-chevron-left"></i> <button>Back</button>
      </div>
      <div className={styles.bodyGymdetails}>
        <div className={styles.gymInfo}>
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            gymDetails && (
              <>
                <h1>{gymDetails.gym_name}</h1>
                <p className={styles.address}>
                  <i className="fa-solid fa-location-dot"></i>{" "}
                  {gymDetails.address1},{gymDetails.city}
                </p>
                <h2>Descriptioin</h2>
                <p>
                  {gymDetails.gym_name} is one of the greatest gyms in Ashok
                  Nagar, including Aerobics, Yoga, Gym functional trainers,
                  Olympic deadlift barbells, punching bags, Tyre training, and
                  other weight loss activities. Their program includes pilates
                  that leverages the body's inherent movement patterns.
                </p>
              </>
            )
          )}
          <h2>Why to choose WTF?</h2>
          <div className={styles.terms}>
            {terms &&
              terms.map((elem) => (
                <div className={styles.term} key={elem.uid}>
                  <img height={"100px"} src={elem.icon} alt={elem.name} />
                </div>
              ))}
          </div>
        </div>
        <div className={styles.gymPlan}>
          <h2>Choose Membership</h2>
          {planLoading ? (
            <h1>Loading....</h1>
          ) : (
            plan &&
            plan.map((elem, index) => (
              <PlanCard key={elem.id} {...elem} index={index} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
