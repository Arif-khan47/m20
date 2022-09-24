import About from "../components/About"
import About_2 from "../components/About2"
import Deals from "../components/Deals"
import GetApp from "../components/Getapp"
import Hero from "../components/Hero"
import Layout from "../components/layout/Layout"
import News from "../components/News"
import Testimonial from "../components/Testimonial"
import Untitle1 from "../components/Untitle1"
import Untitle2 from "../components/Untitle2"
export default function Home() {
  return (
    <div>
    <Layout hideHeader>
    <div className="bg-[url(/img/Homepage.png)] bg-cover bg-center bg-no-repeat h-[66rem] w-full">
    <div className="container m-auto">
    <Hero/>
    </div>
    </div>
    <div className="container m-auto">
    <About/>
    <About_2/>
    <Untitle1/>
    </div>
    <Untitle2/>
    <Deals/>
    <div className="container m-auto">
    <Testimonial/>
    <News/>
    <GetApp/>
    </div>
    
    </Layout>
    </div>
  )
}
