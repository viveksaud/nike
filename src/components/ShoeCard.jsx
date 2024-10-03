const ShoeCard = ({ imgUrl, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`border-2 ${
        bigShoeImg === imgUrl.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } rounded-xl cursor-pointer max-sm:flex-1`}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgUrl.thumbnail}
          alt="shoe collection"
          width={130}
          height={105}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
