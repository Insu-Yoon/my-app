"use client";
import Image from "next/image";
import 토마토 from "/public/food0.png";
import 파스타 from "/public/food1.png";
import 코코넛 from "/public/food2.png";
import { useState } from "react";
export default function List() {
  const 상품 = [
    { name: "토마토", price: "10$" },
    { name: "사과", price: "20$" },
    { name: "포도", price: "30$" },
  ];
  let arr = [];
  for (let i = 0; i < 상품.length; i++) arr.push(0);
  let [state, changeState] = useState([0, 0, 0]);
  const 이미지 = [토마토, 파스타, 코코넛];
  return (
    <div>
      <h4 className="mt-32 text-lg text-center">상품목록</h4>
      {상품.map((a, i) => {
        return (
          <div
            className="p-5 mx-auto my-5 text-black bg-white rounded-md w-52"
            key={a.name}
          >
            <Image src={이미지[i]} alt="nnooo"></Image>
            <h4>
              {a.name} {a.price}
            </h4>
            <button
              className="px-2 py-0 m-2 bg-gray-300 border rounded-md"
              onClick={() => {
                console.log("마이너스클릭");
                let copy = [...state];
                copy[i]--;
                changeState(copy);
              }}
            >
              -
            </button>
            <span>{state[i]}</span>
            <button
              className="px-2 py-0 m-2 bg-gray-300 border rounded-md"
              onClick={() => {
                let copy = [...state];
                copy[i]++;
                changeState(copy);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}
