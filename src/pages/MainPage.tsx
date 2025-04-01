import CTA from "../components/CTA/CTA";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";
import Reviews from "../components/Reviews/Reviews";
import { reviews } from "../mockDB";

const MainPage = () => {
  return (
    <Layout>
      <Hero />
      <Reviews reviews={reviews} />
      <CTA />
    </Layout>
  )
}

export default MainPage
