import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={imgURL}
        alt={customerName}
        width={130}
        height={200}
        className="object-cover rounded-full"
      />

      <p className="text-center font-montserrat text-slate-gray leading-7 mt-5 max-w-sm">
        {feedback}
      </p>
      <div className="flex gap-2.5 mt-3">
        <img src={star} alt="rating icon" width={25} height={25} />
        <p className="font-montserrat text-xl text-slate-gray leading-7 lg:max-w-lg text-wrap">
          ({rating})
        </p>
      </div>
      <h3 className="font-semibold font-palanquin text-3xl leading-7 text-center text-wrap my-2 ">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
