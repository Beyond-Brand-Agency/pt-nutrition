import Layout from "../components/Layout";
import FreeAnalysis from "../components/FreeAnalysis";
import BannerBottom from "../components/BannerBottom";
import FreeAnalysisBanner from "../components/FreeAnalysisBanner";

export default function Portfolio() {
  return (
    <Layout
      title="Portfolio"
      banner={
        <div className="h-96 bg-portfolio-header-image bg-cover bg-center flex flex-col justify-center items-center text-gray-800 text-center">
          <h1 className="text-5xl font-bold w-1/3">
            Our Work for PTs &amp; Nutritionists
          </h1>
        </div>
      }
    >
      <div>
        <div className="text-xl text-center justify-center m-5">
          Finding the right marketing agency is not easy... there are so many
          choices to choose from. This is why we ONLY work with PT &amp;
          Nutritionist business. We get more clients through effective online
          marketing and development.
        </div>
        <div className="text-5xl text-red-500 m-80 ">
          Portfolio cards/examples/gallery goes here.
        </div>
        <FreeAnalysis />
      </div>
      <FreeAnalysisBanner />
      <BannerBottom />
    </Layout>
  );
}
