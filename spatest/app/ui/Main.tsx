'use client'

import { useState, useEffect } from "react"
export default function MainP() {

  
  const [currentState, setCurrentState] = useState<string>('김우진 장점');
  const [inputText, setInputText] = useState<string>("");
  const [classroomArray, setClassroomArray] = useState<string>([]);

  useEffect(() => {
    // 외부 JSON 파일을 가져오는 비동기 함수
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const classroomarray = await response.json();
        console.log(classroomarray)
        setClassroomArray(classroomarray);
      } catch (error) {
        console.error('데이터를 불러오는 중 에러 발생:', error);
      }
    };

    fetchData(); // useEffect 안에서 함수 호출

  },
  []);


  const changeState = () => {

    const foundPerson = classroomArray.find(person => person.name === inputText);
    // 입력된 텍스트가 배열에 포함된 이름인지 확인
    if (foundPerson) {
      // 포함된 경우에만 상태 업데이트
      setCurrentState(inputText);
    } else {
      // 포함되지 않은 경우에는 공백으로 설정
      setCurrentState("");
    }
  };


  return (
    <>
      <div className="h-4/5">{
        currentState &&
        <h1 className="h-1/6 text-6xl b-">{`${currentState}장점`}</h1>
      }
        <p className="h-2/6" >{classroomArray.find(person => person.name === currentState)?.content || ''}</p>
        {
          currentState &&
          <h2 className="h-1/6 text-5xl">{`${currentState}소개`}</h2>
        }
        <p className="h-2/6">{classroomArray.find(person => person.name === currentState)?.merit || ''}</p>
      </div>
      <div className="h-1/5">
        <input type="text" placeholder="Write your name." value={inputText} onChange={(e) => setInputText(e.target.value)} className="border-solid border-2 w-full mb-5 h-1/5" />
        <input type="submit" value='Show' onClick={changeState} className="border-solid border-2 w-full h-4/5" />
      </div>
    </>
  )
}
