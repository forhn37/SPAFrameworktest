export default function Li({classvalue, clickname}) {

  return <li className="text-left list-none" onClick={()=> clickname(classvalue)}>{classvalue}</li>
}