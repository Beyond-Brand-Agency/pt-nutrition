import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import FreeAnalysis from "../components/FreeAnalysis";
import Icon from "../components/Icon";

export default function WebDesign() {
  const [features, setFeatures] = useState([]);
  async function fetchFeatures() {
    const res = await fetch(`/api/websiteFeatures`);
    const websiteFeatures = await res.json();
    setFeatures(websiteFeatures);
  }
  useEffect(() => {
    fetchFeatures();
  }, []);

  return (
    <>
      <Layout
        title="Home"
        banner={
          <div className="h-96 bg-web-design-header-image bg-cover bg-center flex flex-col justify-center items-center text-black text-center">
            <h1 className="text-5xl font-bold w-1/3 text-gray-800">
              Web Design For PTs &amp; Nutritionalists
            </h1>
          </div>
        }
      >
        <div className="flex flex-col justify-center items-center px-3 py-5 my-3 space-y-5 w-full text-gray-700">
          {/* anchor */}
          <div className="text-3xl">
            Do you need a website that not only looks great, but also gets
            results?
          </div>
          <div className="text-xl">
            How about a website created tailored for PTs &amp; Nutritionists by
            a team who understands exactly what you're looking for?
          </div>
          {/* anchors */}
          {/* grid */}
          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <a
              href="/web-design"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <Image
                src="/images/placeholder1.jpg"
                alt="websites"
                width={300}
                height={300}
              />
              <h3 className="text-xl font-bold">
                A PT or Nutritionist Would Like To:
              </h3>
              <ul className="mt-4">
                <li>Go On Holiday</li>
                <li>Be Fully Booked</li>
                <li>Get More Clients</li>
                <li>Have a Waiting List</li>
                <li>Not Focus on Marketing</li>
                <li>Spend More Time Learning</li>
                <li>Improve Client Relationships</li>
              </ul>
              <div className="text-xs">Learn more about web design</div>
            </a>

            <Link href="PPC">
              <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                <Image
                  src="/images/placeholder2.jpg"
                  alt="ppc"
                  width={300}
                  height={300}
                />
                <h3 className="text-xl font-bold">
                  A Website Visitor Would Like To:
                </h3>
                <ul className="mt-4">
                  <li>Make a Booking</li>
                  <li>See Social Proof</li>
                  <li>Not Be Confused</li>
                  <li>Have The Right Answers</li>
                  <li>Know How You Can Help</li>
                  <li>Know How You Are Unique</li>
                  <li>See Contact &amp; Location Details</li>
                </ul>
                <div className="text-xs">Learn more about AdWords</div>
              </a>
            </Link>
          </div>
          {/* grid */}
        </div>
        {/* image */}
        <div className="flex flex-col justify-center items-center my-3">
          <Image
            src="/images/web_design_image.jpg"
            alt="ppc"
            width={1050}
            height={600}
          />
          <div className="mt-10">
            We create effective websites that are perfect for your business and
            the website visitor.
            <br />
            In order for a website to succeed in this competitive industry, it
            needs to have the following:
          </div>
        </div>
        {/* image */}
        {/* website neccessities grid */}
        <div className="container flex flex-wrap items-center justify-around max-w-5xl mt-6 sm:w-full">
          {features.map(({ icon, text, name }, i) => (
            <div
              key={i}
              className="flex flex-col justify-center items-center p-2 border w-1/3 h-20 rounded"
            >
              <Icon name={name} />
              <div>{text}</div>
            </div>
          ))}
        </div>
        {/* website neccessities grid */}
        {/* contact form */}
        <div className="w-full flex justify-around items-center mt-3">
          <ContactForm />
          <FreeAnalysis />
        </div>
        {/* contact form */}
      </Layout>
    </>
  );
}

// export async function getStaticProps(context) {
//   const res = await fetch(`/api/websiteFeatures`);
//   // const websiteFeatures = await res.json();
//   const websiteFeatures = await res.json();

//   if (!websiteFeatures) {
//     return {
//       notFound: true,
//     };
//   }

//   //   console.log(res);
//   //   console.log(websiteFeatures);

//   return {
//     props: { websiteFeatures }, // will be passed to the page component as props
//   };
// }
