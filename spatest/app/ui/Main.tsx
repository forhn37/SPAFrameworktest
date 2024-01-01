'use client'

// MainP 컴포넌트
import { useState, useEffect } from "react";

export default function MainP({ selectedStudent }) {
  const [currentState, setCurrentState] = useState('김우진 장점');
  const [inputText, setInputText] = useState("");
  const [classroomArray, setClassroomArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const classroomarray = await response.json();
        // console.log(classroomarray);
        setClassroomArray(classroomarray);
      } catch (error) {
        console.error('데이터를 불러오는 중 에러 발생:', error);
      }
    };

    fetchData();
  }, [selectedStudent]); // 의존성 배열에 selectedStudent 추가

  const changeState = () => {
    if (selectedStudent) {
      setCurrentState(selectedStudent);
    } else if (inputText) {
      setCurrentState(inputText);
    } else {
      setCurrentState("");
    }
  };

  return (
    <main className="w-4/5 h-full border-solid border-2 ml-5">
      <div className="h-4/5">
        {currentState && (
          <h1 className="h-1/6 text-6xl b-">{`${currentState}장점`}</h1>
        )}
        <p className="h-2/6">
          {classroomArray.find((person) => person.name === currentState)?.content ||
            ""}
        </p>
        {currentState && (
          <h2 className="h-1/6 text-5xl">{`${currentState}소개`}</h2>
        )}
        <p className="h-2/6">
          {classroomArray.find((person) => person.name === currentState)?.merit ||
            ""}
        </p>
      </div>
      <div className="h-1/5">
        <input
          type="text"
          placeholder="Write your name."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="border-solid border-2 w-full mb-5 h-1/5"
        />
        <input
          type="submit"
          value="Show"
          onClick={changeState}
          className="border-solid border-2 w-full h-4/5"
        />
      </div>
    </main>
  );
}