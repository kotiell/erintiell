import Image from "next/image";
import FunPic from "../public/images/fun-portrait.jpg";

export default function Header() {
  return (
    <header className="container mx-auto my-8">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-3">
      <Image
        src={FunPic}
        alt="Erin Tiell"
        className="rounded-md"
      />
        </div>
        <div className="col-span-5 flex flex-col justify-center">
          <h1 className="text-8xl mt-4 font-extralight">Erin Tiell</h1>
          <p className="text-2xl font-light">Marketing and communications professional with more than 10 years of proven results.</p>
        </div>
      </div>
    </header>
  )
}