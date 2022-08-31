import React from "react";
import styles from "./home.module.css";
import background from "./background.JPG";
import { useState } from "react";
import { useEffect } from "react";
import { getBycity, getData } from "../redux/action";
import {useDispatch, useSelector} from 'react-redux'
import { ResultCard } from "./ResultCard";

export const Home = () => {
    const dispatch = useDispatch()



    const { nearByGym,isLoading,isError} = useSelector((state)=>state)

    // console.log(nearByGym,isLoading,isError)
  useEffect(() => {

  }, []);

  const handleLocation = () => {
    initGeolocation();
  };

  function initGeolocation() {
    if (navigator.geolocation) {
      // Call getCurrentPosition with success and failure callbacks
      navigator.geolocation.getCurrentPosition(success);
    } else {
      alert("Sorry, your browser does not support geolocation services.");
    }
  }

  function success(position) {
    console.log(position.coords.longitude);
    console.log(position.coords.latitude);
    let payload={lat:position.coords.latitude,long:position.coords.longitude}
    getData(dispatch,payload);
  }

  return (
    <div>
      <div
        className={styles.heading}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <h1>WTF</h1>
          </div>
          <div className={styles.navbar__btn}>
            <button>Fitness</button>
            <button>Nutriyion</button>
            <button>Gyms</button>
            <button>Become wtf partner</button>
            <button className={styles.login}>Login</button>
          </div>
        </div>
      </div>
      <div className={styles.Search}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search gym name here" />
        <i
          className="fa-solid fa-location-dot"
          id={styles.location}
          onClick={handleLocation}
        ></i>
        <button>Clear</button>
      </div>
      <div className={styles.body}>
        <div className={styles.search__filter}>
          <div className={styles.filter_head}>
            <h1>Filter</h1>
            <button>Reset</button>
          </div>
          <div>
            <p>Location</p>
            <input type="text" placeholder="Enter location" />
          </div>
          <div className={styles.price}>
            <p>Price</p>
            <input type="number" placeholder="Min" />
            <input type="number" placeholder="Max" />
          </div>
          <div>
            <p>Cities</p>
            <input type="text" placeholder="Enter city name" />
          </div>
        </div>
        <div className={styles.search__result}>
            {isLoading ? <h1>Loading....</h1> : isError ? <h1>Error while fatching data</h1>:
            nearByGym.map((elem)=>(
                <ResultCard key={elem.user_id} {...elem}/>
            ))}
        </div>
      </div>
    </div>
  );
};
