const ServiceCard = ({imgURL,label,subtext}) => {
  return (
    <div className="flex-1 w-full shadow-3xl rounded-[20px] px-6 py-10 sm:w-[350px] sm:min-w-[350px]">
      <div className="flex justify-center items-center bg-coral-red mt-4 ml-4  w-12 h-12 rounded-full">
        <img src={imgURL} alt={label} />
      </div>
      <h3 className="font-palanquin text-3xl  font-bold mt-5  ">
        {label}
      </h3>
      <p className="break-words font-montserrat mt-3 leading-7 text-lg text-slate-gray">
        {subtext}
      </p>
    </div>
  );
}

export default ServiceCard