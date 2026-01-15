import { Link } from "react-router-dom";

const Card = ({ image, title, to }) => {
  return (
    <Link to={to} className="group">
      <div className="relative overflow-hidden rounded-sm cursor-pointer h-full">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-colors duration-300 group-hover:bg-black/60">
          <div className="text-center">
            <p className="text-gray-100 text-lg font-bold">{title}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
