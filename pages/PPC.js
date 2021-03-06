import { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import FreeAnalysis from "../components/FreeAnalysis";
import Cards from "../components/Cards";
import BannerBottom from "../components/BannerBottom";

export default function PPC() {
  const [features, setFeatures] = useState([]);
  async function fetchFeatures() {
    const res = await fetch(`/api/ppcFeatures`);
    const websiteFeatures = await res.json();
    setFeatures(websiteFeatures);
  }
  useEffect(() => {
    fetchFeatures();
  }, []);

  return (
    <>
      <Layout
        title="PPC"
        banner={
          <div className="h-96 bg-ppc-header-image bg-cover bg-center flex flex-col justify-center items-center text-black text-center">
            <h1 className="text-5xl font-bold w-1/3 text-gray-800">
              Effective PPC (AdWords) for PT &amp; Nutritionists
            </h1>
          </div>
        }
      >
        <div>
          <div className="text-xl mt-3 text-center">
            Finding the right marketing company among the multitude of choices
            available is not easy. For this reason we specialize in PTs and
            Nutrition Businesses. We aquire clients through effective online
            marketing and development. We provide the following services:
          </div>
        </div>
        <div className="w-full flex flex-col space-y-2 justify-center">
          <div className="w-full p-3 flex flex-wrap justify-center">
            <div className="w-80 h-80 bg-contain bg-center bg-ppc-laptop">
              &nbsp;
            </div>
            <div className="w-1/4 flex flex-col space-y-2 justify-center">
              <h3 className="text-3xl my-2">
                The Right Keywords + Right Ads = The Right clients
              </h3>
              <div>
                We don’t just get you clicks, we optimize the whole campaign
                around conversions that turn into clients.
              </div>
            </div>
          </div>
          <div className="w-full p-3 flex flex-wrap justify-center">
            <div className="w-80 h-80 bg-contain bg-center bg-ppc-ab-testing">
              &nbsp;
            </div>
            <div className="w-1/4 flex flex-col space-y-2 justify-center">
              <h3 className="text-3xl my-2">Landing Page Testing</h3>
              <div>
                We analyze results and make relevant design changes using AB
                tests and then optimize the pages to get even more clients.
              </div>
            </div>
          </div>
          <div className="w-full p-3 flex flex-wrap justify-center">
            <div className="w-80 h-80 bg-contain bg-center bg-ppc-management">
              &nbsp;
            </div>
            <div className="w-1/4 flex flex-col space-y-2 justify-center">
              <h3 className="text-3xl my-2">Expert PPC Management</h3>
              <div>
                With experience managing over $1,300,000 in PPC campaigns, we
                know advanced tactics to spend less and get better results.
              </div>
            </div>
          </div>
        </div>
        {/* CARDS */}
        <Cards cardData={features} />
        {/* CARDS */}
        {/* contact form */}
        <div className="w-full flex justify-around items-center mt-3">
          <ContactForm />
          <FreeAnalysis />
        </div>
        {/* contact form */}{" "}
      </Layout>
    </>
  );
}
