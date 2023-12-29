import Li from "../ui/li";

export default function NaveBar() {
const studentlist = [
  '김우진',
  '김현',
  '방승희',
  '변호녕',
  '소사무엘',
  '송영준',
  '신동현',
  '오승민',
  '유승민',
  '윤준현',
  '이민구',
  '이유안',
  '이채이',
  '정영식',
  '최성민',
  '최은철',
  '홍문기'
]

 
  return (
    <nav className="border-solid border-2 w-1/5 h-full flex flex-col justify-around">
      
      {studentlist.map((student, index) => (
        <Li key ={index} classvalue={student} />
      ))}
    </nav>
  )
}
// map함수, 배열을 활용하여 17개를 직접생성하지 않도록 조정
// 각각의 value값이 변동사항이 될 것임

