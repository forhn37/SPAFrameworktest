import styles from "../styles.module.css"
import MainPage from "./Mainpage";
import Main from "./Mainpage";
import NaveBar from "./NaveBar";

export default function SpaPage() {
  return (
    <div className='w-3/5 h-4/5 border-solid border-2 flex justify-center items-center p-5'>
      <NaveBar />
      <div className="border-solid border-2 h-full ml-5"></div>
      <MainPage />
    </div>
  )
}