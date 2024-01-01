'use client'

import MainPage from "./Mainpage";
import NaveBar from "./NaveBar";
import { useState } from "react";

export default function SpaPage() {
  const [selectedStudent, setSelectedStudent] = useState("");

return (
  <div className='w-3/5 h-4/5 border-solid border-2 flex justify-center items-center p-5'>
    {/* setSelectedStudent 함수를 NaveBar 컴포넌트에 전달 */}
    <NaveBar setSelectedStudent={setSelectedStudent} />
    <div className="border-solid border-2 h-full ml-5"></div>
    {/* selectedStudent 상태를 MainPage 컴포넌트에 전달 */}
    <MainPage selectedStudent={selectedStudent} />
  </div>
);
}