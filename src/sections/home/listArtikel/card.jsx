const Card = ({
  image,
  title,
  category,
  big = false,
  className = "",
}) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl cursor-pointer ${className} ${
        big ? "h-[420px]" : "h-[200px]"
      }`}
    >
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 flex flex-col justify-end">
        <span className="mb-2 w-fit bg-black/70 px-3 py-1 text-xs text-white rounded">
          {category}
        </span>

        <h3
          className={`text-white font-semibold leading-snug ${
            big ? "text-2xl" : "text-sm"
          }`}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Card;
