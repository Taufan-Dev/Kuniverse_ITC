import { Link } from "react-router-dom";

const RecommendationCard = ({ category, title }) => {
  return (
    <div>
      <p className="text-prestige-gold font-semibold text-sm mb-1">
        {category}
      </p>
      <Link to="#">
        <h5 className="font-semibold text-gray-900 hover:text-prestige-gold transition">
          {title}
        </h5>
      </Link>
    </div>
  );
};

export default RecommendationCard;
