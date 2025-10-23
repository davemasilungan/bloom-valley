import { Star } from "lucide-react";

const RatingStars = () => {
  return (
    <div className="flex items-center mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
      ))}
    </div>
  );
};

export default RatingStars;
