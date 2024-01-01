
import MainP from "../ui/Main";


export default function MainPage({selectedStudent}) {

  return (
    <main className="w-4/5 h-full border-solid border-2 ml-5">
      <MainP selectedStudent={selectedStudent} />
    </main>
  )
}