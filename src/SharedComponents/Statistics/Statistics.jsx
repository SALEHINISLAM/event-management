import { Typography, Card } from "@material-tailwind/react";
import Stat from "./Stat";
// 100+happy user, 20+active employee, 50+successful project
const stats = [
  {
    count: "100+",
    title: "Happy Client",
    img: "https://imagizer.imageshack.com/img923/539/aqlNni.jpg"
  },
  {
    count: "20+",
    title: "Active Employees",
    img: "https://imagizer.imageshack.com/img923/112/lvBstD.jpg"
  },
  {
    count: "50+",
    title: "Successful Projects",
    img: "https://imagizer.imageshack.com/v2/640x480q70/922/jSkBtJ.jpg"
  },
];

export function Statistics() {
  return (
    <section className="lg:py-28 py-10 px-8 container mx-auto">
      <div className="lg:mb-24 mb-10">
        <Typography
          color="blue-gray"
          className="mb-4 !text-2xl font-bold lg:!text-4xl"
        >
          Turn your idea into a successful event
        </Typography>
        <Typography
          variant="lead"
          className="w-w-full !text-gray-500 max-w-xl"
        >
          We&apos;re constantly trying to express ourselves and actualize our
          dreams. 
        </Typography>
      </div>
        
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 gap-x-20">
            {
                stats.map((stat,index)=>(
                    <Stat key={index} stat={stat}/>
                ))
            }
          </div>
        </div>

    </section>
  );
}

export default Statistics;