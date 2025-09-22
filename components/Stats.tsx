"use client"
import { useState } from "react";
import {motion} from "framer-motion";

type CounterProps = {
  end: number;
  duration?: number;
};

function Counter({end, duration= 2000}:
  CounterProps){
    const [count, setCount] = useState(0);

    const startCounting = () =>{
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration/end));

      const timer = setInterval(() =>{
        start +=1;
        setCount(start);
        if (start === end) clearInterval(timer);

      }, stepTime);
    }
     

    return ( <motion.span
    initial = {{opacity: 0}}
    whileInView={{opacity: 1}}
    onViewportEnter={startCounting}
    viewport={{once: true}}
    >{count}</motion.span>);
  }


export default function Stats() {
  const stats = [
    { label: "Enfants soutenus", value: 50 },
    { label: "Bénévoles actifs", value: 10 },
    { label: "Projets en cours", value: 2 }
  ];
  return (
    <section className="container grid sm:grid-cols-3 gap-4">
      {stats.map(s => (
        <motion.div key={s.label}
        initial = {{opacity: 0, y:50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        viewport={{once: true}}
        className="card text-center">
          <div className="text-3xl font-bold"><Counter end={s.value} duration={2000}/>+</div>
          <div className="text-gray-600">{s.label}</div>
        </motion.div>
      ))}
    </section>
  );
}