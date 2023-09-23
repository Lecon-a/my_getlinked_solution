import React, {useState, useEffect} from 'react'

const Time = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const getTime = () => {
        const time = Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(), 1000);
    
        return () => clearInterval(interval);
      }, []);

    return (
        <div className='timer counter'>
            <span className='counter-span'><span className='hour'>{hours}</span><span className='counter-name'>H</span></span>
            <span className='counter-span'><span className='minute'>{minutes}</span><span className='counter-name'>M</span></span>
            <span className='counter-span'><span className='second'>{seconds}</span><span className='counter-name'>S</span></span>
        </div>
    );
  };

export default Time