'use client'


import Li from "../ui/li";
import { useState, useEffect } from "react";

export default function NaveBar() {
  const [classstudent, setClassstudent] = useState([])

  useEffect(() => {
    // 외부 JSON 파일을 가져오는 비동기 함수
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const classstudent = await response.json();
        console.log(classstudent)
        setClassstudent(classstudent);
      } catch (error) {
        console.error('데이터를 불러오는 중 에러 발생:', error);
      }
    };

    fetchData(); // useEffect 안에서 함수 호출

  },
    []);
  return (
    <nav className="border-solid border-2 w-1/5 h-full flex flex-col justify-around">
    {classstudent.map((student) => {
      // student.name이 존재하는지 확인
      if (student.name) {
        // Li 컴포넌트를 반환하는데, 이때 classvalue prop을 통해 student.name을 전달
        return <Li key={student.name} classvalue={student.name} />;
      } else {
        return null; // 또는 다른 처리를 수행하고 싶다면 여기에 추가
      }
    })}
  </nav>
  )
}
// map함수, 배열을 활용하여 17개를 직접생성하지 않도록 조정
// 각각의 value값이 변동사항이 될 것임

