
import { createClient } from "next-sanity";
import Image from "next/image";
import Hub from "../public/icons/hub.svg";
import Insights from "../public/icons/insights.svg";
import Awesome from "../public/icons/awesome.svg";

export default async function Home() {

  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_APIVERSION,
    useCdn: false,
  });

  const data = await client.fetch(`
    *[_type == "pageType" ]{
      _id, _type, 
      "pageSection": *[_type == "pageElement" && references(^._id)].content
    }`);

  //const data = await client.fetch(`*[_type == "pageElement" && pageTitle1mu == "Home Page"]`);

  const titleStyle = "font-light text-3xl";
  const paraStyle = "mb-2.5 leading-tight";
  return (
    <div className="container">
      <div className="my-16">
        <h3 className="font-bold text-4xl">Campaign architect, communications conduit, detail spelunker.</h3>
        <p className="text-2xl font-light ">I am a self-starting, fastidious individual. I thrive in a team environment, can work independently and also carry great project management skills.</p>
      </div>

      <h2 className="text-4xl mt-8 mb-3 font-bold"> Past Work</h2>

      <div className="grid mt-1 gap-4">
        <div className="grid grid-cols-12">
          <div className="self-center justify-self-center">
            <Image
              src={Hub}
              alt="hub"
            />
          </div>
          <div className="col-span-11">
            <h3 className={titleStyle}>2016-present</h3>
            <p className={paraStyle}>Align and drive company strategy and external brand preference through effective communications and marketing project execution.</p>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="self-center justify-self-center">
            <Image
              src={Insights}
              alt="hub"
            />
          </div>
          <div className="col-span-11">
            <h3 className={titleStyle}>2011-2016</h3>
            <p className={paraStyle}>Communicated to our customers to drive sales leads and improve profit. </p>
            <p className={paraStyle}>Used creative methods to deliver communications to 21,000 employees through traditional and innovating channels.</p>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-12">
            <div className="self-center justify-self-center">
              <Image
                src={Awesome}
                alt="hub"
              />
            </div>
            <div className="col-span-11">
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
