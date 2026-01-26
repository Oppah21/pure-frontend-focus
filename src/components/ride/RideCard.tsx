import { Link } from "react-router-dom";
import { Clock, Users, ArrowRight } from "lucide-react";
import { format } from "date-fns";

interface RideCardProps {
  ride: {
    id: string;
    origin_address: string;
    destination_address: string;
    departure_date: string;
    departure_time: string;
    price: number;
    seats_available: number;
  };
}

const RideCard = ({ ride }: RideCardProps) => {
  return (
    <Link to={`/ride/${ride.id}`}>
      <div className="card-ride p-5 hover:border-primary/50">
        {/* Route */}
        <div className="flex items-start gap-4 mb-4">
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <div className="w-0.5 h-12 bg-border" />
            <div className="w-3 h-3 rounded-full bg-accent" />
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <p className="font-semibold text-foreground">{ride.origin_address}</p>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {ride.departure_time}
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">{ride.destination_address}</p>
            </div>
          </div>
          <ArrowRight className="h-5 w-5 text-muted-foreground mt-2" />
        </div>

        {/* Date & Seats */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <span>{format(new Date(ride.departure_date), "EEE, MMM d")}</span>
          <span className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {ride.seats_available} seats left
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="text-sm text-muted-foreground">Price per seat</div>
          <div className="text-right">
            <p className="text-2xl font-bold text-primary">${ride.price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RideCard;
