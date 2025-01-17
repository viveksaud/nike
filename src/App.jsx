import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Suscribe,
  Footer,
} from "./sections";
import Nav from "./components/Nav";

const App = () => (
  <main className="relative">

    <Nav />

    <section className="padding-b wide:padding-r xl:padding-l">
      <Hero />
    </section>

    <section className="padding">
      <PopularProducts />
    </section>

    <section className="padding">
      <SuperQuality />
    </section>

    <section className="padding">
      <Services />
    </section>

    <section className="padding">
      <SpecialOffer />
    </section>

    <section className="padding bg-pale-blue">
      <CustomerReviews />
    </section>

    <section className="padding-x w-full py-16 sm:py-32 ">
      <Suscribe />
    </section>
    
    <section className="padding-x padding-t pb-8 bg-black">
      <Footer />
    </section>
  </main>
);

export default App;
