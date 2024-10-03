import { Button } from "../components";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";

const SuperQuality = () => {
  return (
    <section className="flex justify-between items-center w-full gap-10 max-container max-xl:flex-col-reverse">
      <div className="flex-1">
        <img
          src={offer}
          alt="Shoe Promotion"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-bold font-palanquin lg:max-w-lg">
          <span className="text-coral-red"> Special</span> Offer
        </h2>

        <p className="mt-6 lg:max-w-lg font-montserrat text-slate-gray text-lg leading-7">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>

        <p className="mt-6 lg:max-w-lg font-montserrat text-slate-gray text-lg leading-7">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className="mt-11 flex flex-wrap-reverse gap-4">
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
