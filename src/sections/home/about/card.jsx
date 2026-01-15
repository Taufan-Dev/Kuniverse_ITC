const Card = ({ image, title }) => {
  return (
    <div className="relative group overflow-hidden rounded-sm">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-100 text-lg font-bold">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
