import React, { useState, useEffect, useRef } from "react";
import "./counter.scss";

const Counter = ({ fromValue, toValue, suffix, prefix }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } 
    );

    observer.observe(counterRef.current);

    return () => observer.disconnect(); 
  }, []);

  const startCounting = () => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= toValue) {
          clearInterval(interval);
          return toValue;
        } else if (prevCount % (toValue / 5) === 0) {
          return prevCount + toValue / 5;
        } else {
          return prevCount + (Math.floor(prevCount / (toValue / 5)) + 1) * (toValue / 5);
        }
      });
    }, 200);
  };

  return (
    <div ref={counterRef}>
      {prefix}
      {Math.round(count)}
      {suffix}
    </div>
  );
};

export default Counter;