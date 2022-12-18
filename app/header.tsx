import Image from "next/image";
import ProfPic from "../public/images/prof-portrait.jpg";

export default function Header() {
  return (
    <header className="container mx-auto my-8 px-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="cols-span-12 md:col-span-3 ">
      <Image
        src={ProfPic}
        alt="Erin Tiell"
        className="rounded-md"
        width="400"
      />
        </div>
        <div className="cols-span-12 md:col-span-5 flex flex-col justify-center">
          <h1 className=" text-6xl md:text-8xl mt-4 font-extralight">Erin Tiell</h1>
          <p className="text-2xl font-light">Marketing and communications professional with more than 10 years of proven results.</p>
        </div>
      </div>
    </header>
  )
}