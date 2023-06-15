import React, { useState } from "react";
import moment from "moment";
import styles from './Calendar.module.css'
import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill} from 'react-icons/bs'

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  
  const daysInMonth = currentDate.daysInMonth();
  const firstDayOfMonth = moment(currentDate).startOf("month").day();
  const weeksInMonth = Math.ceil((daysInMonth + firstDayOfMonth) / 7);

  const handlePrevMonth = () => {
    setCurrentDate(moment(currentDate).subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentDate(moment(currentDate).add(1, "month"));
  };

  const renderCalendarDays = () => {
    const calendarDays = [];

    for (let i = 0; i < weeksInMonth; i++) {
      const weekDays = [];

      for (let j = 0; j < 7; j++) {
        const dayOfMonth =
          i * 7 + j - firstDayOfMonth + 1;

        if (dayOfMonth < 1 || dayOfMonth > daysInMonth) {
          weekDays.push(<td key={j}></td>);
        } else {
          weekDays.push(<td key={j}>{dayOfMonth}</td>);
        }
      }

      calendarDays.push(<tr key={i}>{weekDays}</tr>);
    }

    return calendarDays;
  };

  return (
    <div className={styles.container}>
          <div className={styles.header}>
          <button onClick={handlePrevMonth}><BsFillArrowLeftCircleFill/></button>
      <h3>{currentDate.format("MMMM YYYY")}</h3>
      <button onClick={handleNextMonth}><BsFillArrowRightCircleFill/></button>
     </div>
      <table >
        <thead >
          <tr >
            <th className={styles.sun} >Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody >{renderCalendarDays()}</tbody>
      </table>
    </div>
  );
};

export default Calendar;
