import { reviews } from "../constants";
import {ReviewCard} from "../components"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold font-palanquin text-center text-wrap">
          What Our <span className="text-coral-red">Customers</span> Say?
        </h2>
        <p className="text-slate-gray font-montserrat text-center text-wrap leading-7 m-5 sm:max-w-lg ">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div className="flex flex-1 max-lg:flex-col gap-14 lg:px-16 justify-between mt-5">
        {reviews.map((review,index)=>(
          <ReviewCard key={index} {...review}/>
        ))}
      </div>
    </section>
  );
}

export default CustomerReviews