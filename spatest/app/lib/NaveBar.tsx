'use client'
// NaveBar 컴포넌트
import Li from "../ui/Li";
import { useState, useEffect } from "react";

export default function NaveBar({ setSelectedStudent }) {
  const [classstudent, setClassstudent] = useState([]);

  const handleLiClick = (classvalue) => {
    setSelectedStudent(classvalue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const classstudent = await response.json();
        // console.log(classstudent);
        setClassstudent(classstudent);
      } catch (error) {
        console.error('데이터를 불러오는 중 에러 발생:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <nav className="border-solid border-2 w-1/5 h-full flex flex-col justify-between">
      {classstudent.map((student) => {
        if (student.name) {
          return (
            <Li
              key={student.name}
              classvalue={student.name}
              clickname={handleLiClick}
            />
          );
        } else {
          return null;
        }
      })}
    </nav>
  );
}
