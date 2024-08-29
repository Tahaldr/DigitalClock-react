import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import './Clock.css';

function Clock() {
  const [time, setTime] = useState("");
  
  useEffect(() => {
    const theInterval = setInterval(() => {
      const dateNow = new Date();
      
      // format Date 'hh:mm:ss'
      // padStart(): Adds padding to the start of a string, which is useful for ensuring 
      // that single-digit hours, minutes, or seconds are displayed as 09 instead of 9.

      const formatTime = (date) => {
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const seconds = date.getSeconds().toString().padStart(2, "0");

        return `${hours}:${minutes}:${seconds}`;
      }

      setTime(formatTime(dateNow));

    }, 1000);

    return () => clearInterval(theInterval); 
  }, [])

  const darkMode = () => {
    const modeElements = document.querySelectorAll(".mode");

    modeElements.forEach((Element) => {
      if (Element.classList.contains("dark")) {
        Element.classList.remove("dark");
      }
      else {
        Element.classList.add("dark");
      }
    })
  }


  return (
    <div className='mode'>
      <button onClick={darkMode} className='mode'><FontAwesomeIcon icon={faCircleHalfStroke} /></button>
      <p>{time}</p>
    </div>
  );
}

export default Clock;
