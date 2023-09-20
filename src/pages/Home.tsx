import Criteria from "../components/sections/Criteria";
import FAQs from "../components/sections/FAQs";
import Homehero from "../components/sections/Homehero";
import Intro from "../components/sections/Introduction";
import Partners from "../components/sections/Partners";
import Policies from "../components/sections/Policies";
import Reward from "../components/sections/Reward";
import Rule_reg from "../components/sections/Rule_reg";
import Timeline from "../components/sections/Timeline";

const Home = () => {
  return (
    <>
      <Homehero />
      <Intro />
      <Rule_reg />
      <Criteria />
      <FAQs />
      <Timeline />
      <Reward />
      <Partners />
      <Policies />
    </>
  );
};

export default Home;
