
import Image from "next/image";
import Hub from "../public/icons/hub.svg";
import Insights from "../public/icons/insights.svg";
import Awesome from "../public/icons/awesome.svg";

export default async function Home() {
  const titleStyle = "font-light text-3xl";
  const paraStyle = "mb-2.5 leading-tight";
  return (
    <div className="container px-4 md:px-0">
      <div className="my-16">
        <h3 className="font-bold text-2xl md:text-4xl leading-tight">Campaign architect, communications conduit, detail spelunker.</h3>
        <p className="text-lg font-light ">I am a self-starting, fastidious individual. I thrive in a team environment, can work independently and also carry great project management skills.</p>
      </div>

      <h2 className="text-3xl md:text-4xl mt-8 mb-3 font-bold"> Past Work</h2>

      <div className="grid mt-1 gap-6 md:gap-4">
        <div className="grid grid-cols-12">
          <div className="col-span-2 md:col-span-1 self-center justify-self-center pr-4 md:p-0">
            <Image
              src={Hub}
              alt="hub"
            />
          </div>
          <div className="col-span-10 md:col-span-11">
            <h3 className={titleStyle}>2016-present</h3>
            <p className={paraStyle}>Align and drive company strategy and external brand preference through effective communications and marketing project execution.</p>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-2 md:col-span-1 self-center justify-self-center pr-4 md:p-0">
            <Image
              src={Insights}
              alt="Insights"
            />
          </div>
          <div className="col-span-10 md:col-span-11">
            <h3 className={titleStyle}>2011-2016</h3>
            <p className={paraStyle}>Communicated to our customers to drive sales leads and improve profit. </p>
            <p className={paraStyle}>Used creative methods to deliver communications to 21,000 employees through traditional and innovating channels.</p>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-12">
            <div className="col-span-2 md:col-span-1 self-center justify-self-center pr-4 md:p-0">
              <Image
                src={Awesome}
                alt="Awesome"
              />
            </div>
            <div className="col-span-10 md:col-span-11">
              <h3 className={titleStyle}>2007-2011</h3>
              <p className={paraStyle}>Provided developmental support to the Executive Director in multiple and various roles to our local chapter of the American Red Cross. </p>
              <p className={paraStyle}>Aided our chapter to become one of three chapters in the state of Ohio to receive the Highly Performing Chapter award for the 2008-2009 fiscal year.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
