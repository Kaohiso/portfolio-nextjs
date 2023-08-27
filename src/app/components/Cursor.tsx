// components/Cursor.js
import React, { useState, useEffect } from "react";
import styles from "./Cursor.module.css";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updatePosition);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <div className={styles['custom-cursor']} style={{ left: position.x, top: position.y }} />
  );
};

export default Cursor;
