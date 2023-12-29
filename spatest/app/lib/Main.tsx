import DownMain from "../ui/DownMain";
import UpMain from "../ui/UpMain";

export default function Main() {
  return (
    <main className="w-4/5 h-full border-solid border-2 ml-5">
      <UpMain />
      <DownMain />
    </main>
  )
}