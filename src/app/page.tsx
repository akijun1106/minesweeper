'use client';

import { useState } from 'react';
import styles from './page.module.css';

const calcTotalPoint = (arr: number[], counter: number) => {
  let result = 0;
  for (const item of arr) {
    result += item;
  }
  return result + counter;
};
const down = (n: number) => {
  if (n < 0) {
    return;
  } else {
    console.log(n);
    down(n - 1);
  }
};
down(10);
const sum1 = (n: number): number => {
  if (n === 0) return 0; ///return 0は終了を表す///
  return n + sum1(n - 1);
}; ///22行目から24行目は合計を出すのに最短///
console.log(sum1(10));
const sum2 = (n: number, m: number): number => {
  return n <= m ? n + sum2(n + 1, m) : 0;
};
console.log(sum2(4, 10));
const sum3 = (x: number, y: number): number => {
  return ((y + 1 - x) * (x + y)) / 2;
};
console.log(sum3(4, 10));
export default function Home() {
  const [samplePoints, setSamplePoints] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  console.log(samplePoints);
  const [sampleCounter, setSampleCounter] = useState(0);
  console.log(sampleCounter);
  const clickHandler = () => {
    const totalPoint = calcTotalPoint(samplePoints, sampleCounter);
    console.log(totalPoint);
    const newSamplePoint = structuredClone(samplePoints);
    newSamplePoint[sampleCounter] += 1;
    setSamplePoints(newSamplePoint);
    setSampleCounter((sampleCounter + 1) % 14);
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.sampleCell}
        style={{ backgroundPosition: `${sampleCounter * -30}px` }}
      />
      <button onClick={clickHandler}>クリック</button>
    </div>
  );
}
