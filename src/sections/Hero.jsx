import { useState } from "react";

import ShoeCard from "../components/ShoeCard";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1,bigShoe2, bigShoe3 } from "../assets/images";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe3);

  return (
    <section
      id="home"
      className="w-full flex  flex-col xl:flex-row justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative w-full xl:w-2/5 flex flex-col justify-center items-start  max-xl:padding-x pt-28">
        <p className="text-coral-red font-montserrat text-xl">
          Our Summer Collections
        </p>

        <h1 className="font-bold font-palanquin text-8xl mt-10 max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="relative z-10 pr-10 xl:bg-white xl:whitespace-nowrap">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>

        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full gap-16 mt-20">
          {statistics.map((item) => (
            <div key={item.label}>
              <p className="font-palanquin font-bold text-4xl">{item.value}</p>

              <p className="font-montserrat text-slate-gray leading-7">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center bg-primary bg-hero bg-cover bg-center xl:min-h-screen max-xl:py-40">
        <img
          src={bigShoeImg}
          alt="hero image"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute bottom-[-5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgUrl={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
