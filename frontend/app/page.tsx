
import { createClient } from "next-sanity";

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

  const titleStyle = "font-bold text-2xl";
  const paraStyle = "mb-3.5 leading-tight";
  return (
    <div className="container">
      <h3 className={titleStyle}>Campaign architect, communications conduit, detail spelunker.</h3>
      <p className={paraStyle}>I am a self-starting, fastidious individual. I thrive in a team environment, can work independently and also carry great project management skills.</p>

      <h2 text-3xl> Past Work</h2>
      <h3 className={titleStyle}>2016-present</h3>
      <p className={paraStyle}>Align and drive company strategy and external brand preference through effective communications and marketing project execution.</p>

      <h3 className={titleStyle}>2011-2016</h3>
      <p className={paraStyle}>Communicated to our customers to drive sales leads and improve profit. </p>
      <p className={paraStyle}>Used creative methods to deliver communications to 21,000 employees through traditional and innovating channels.</p>

      <h3 className={titleStyle}>2007-2011</h3>
      <p className={paraStyle}>Provided developmental support to the Executive Director in multiple and various roles to our local chapter of the American Red Cross. </p>
      <p className={paraStyle}>Aided our chapter to become one of three chapters in the state of Ohio to receive the Highly Performing Chapter award for the 2008-2009 fiscal year.</p>
    </div>
  )
}
