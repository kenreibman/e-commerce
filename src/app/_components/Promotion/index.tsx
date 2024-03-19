"use client"
import React, { useState } from 'react'

import classes from './index.module.scss'

const Promotion = () => {
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    }) 
  return (
    <section className={classes.promotion}>
        <div className={classes.textBox}>
            <h3 className={classes.title}>Deals of the Month</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error ratione rem temporibus deleniti. Aut, veritatis laborum ipsam impedit repellendus provident!</p>
            <ul className={classes.stats}>
                <StatBox label="Days" value={time.days} />
                <StatBox label="Hours" value={time.hours} />
                <StatBox label="Minutes" value={time.minutes} />
                <StatBox label="Seconds" value={time.seconds} />
            </ul>
        </div>
    </section>
  )
}

const StatBox = ({ label, value }: { label: string; value: number }) => (
    <li className={classes.statBox}>
        <h4>{value}</h4>
        <p>{label}</p>
    </li>
)

export default Promotion