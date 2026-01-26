import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/ride/Header";
import Footer from "@/components/ride/Footer";
import RideSearchForm from "@/components/ride/RideSearchForm";
import RideCard from "@/components/ride/RideCard";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { Filter, SortAsc, Loader2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface Ride {
  id: string;
  origin_address: string;
  destination_address: string;
  departure_date: string;
  departure_time: string;
  price: number;
  seats_available: number;
  driver_id: string;
}

const Search = () => {
  const [searchParams] = useSearchParams();
  const [rides, setRides] = useState<Ride[]>([]);
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [minSeats, setMinSeats] = useState(1);
  const [sortBy, setSortBy] = useState<"price" | "time" | "date">("date");

  const origin = searchParams.get("origin") || "";
  const destination = searchParams.get("destination") || "";
  const date = searchParams.get("date") || "";
  const passengers = parseInt(searchParams.get("passengers") || "1");

  useEffect(() => {
    fetchRides();
  }, [origin, destination, date, passengers, priceRange, minSeats, sortBy]);

  const fetchRides = async () => {
    setLoading(true);
    try {
      let query = supabase
        .from("rides")
        .select("*")
        .eq("status", "scheduled")
        .gte("seats_available", minSeats)
        .gte("price", priceRange[0])
        .lte("price", priceRange[1]);

      // Apply search filters
      if (origin) {
        query = query.ilike("origin_address", `%${origin}%`);
      }
      if (destination) {
        query = query.ilike("destination_address", `%${destination}%`);
      }
      if (date) {
        query = query.eq("departure_date", date);
      }

      // Apply sorting
      if (sortBy === "price") {
        query = query.order("price", { ascending: true });
      } else if (sortBy === "time") {
        query = query.order("departure_time", { ascending: true });
      } else {
        query = query.order("departure_date", { ascending: true });
      }

      const { data, error } = await query;

      if (error) throw error;
      setRides(data || []);
    } catch (error) {
      console.error("Error fetching rides:", error);
    } finally {
      setLoading(false);
    }
  };

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Price Range */}
      <div className="space-y-4">
        <Label className="text-base font-semibold">Price Range</Label>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={200}
          step={5}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Minimum Seats */}
      <div className="space-y-4">
        <Label className="text-base font-semibold">Minimum Seats</Label>
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((num) => (
            <Button
              key={num}
              variant={minSeats === num ? "default" : "outline"}
              size="sm"
              onClick={() => setMinSeats(num)}
            >
              {num}+
            </Button>
          ))}
        </div>
      </div>

      {/* Sort By */}
      <div className="space-y-4">
        <Label className="text-base font-semibold">Sort By</Label>
        <div className="space-y-2">
          {[
            { value: "date", label: "Departure Date" },
            { value: "price", label: "Price (Low to High)" },
            { value: "time", label: "Departure Time" },
          ].map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <Checkbox
                id={option.value}
                checked={sortBy === option.value}
                onCheckedChange={() => setSortBy(option.value as typeof sortBy)}
              />
              <Label htmlFor={option.value} className="text-sm cursor-pointer">
                {option.label}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Form */}
          <div className="mb-8">
            <RideSearchForm variant="compact" />
          </div>

          <div className="flex gap-8">
            {/* Filters - Desktop */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-24 card-ride p-6">
                <h3 className="font-display text-lg font-semibold mb-6">Filters</h3>
                <FilterContent />
              </div>
            </aside>

            {/* Results */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-2xl font-bold">
                  {loading ? (
                    "Searching..."
                  ) : (
                    <>
                      {rides.length} ride{rides.length !== 1 ? "s" : ""} found
                    </>
                  )}
                </h2>

                {/* Mobile Filter Button */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden gap-2">
                      <Filter className="h-4 w-4" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-80">
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                      <SheetDescription>Refine your search results</SheetDescription>
                    </SheetHeader>
                    <div className="mt-6">
                      <FilterContent />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              {loading ? (
                <div className="flex items-center justify-center py-20">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : rides.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-muted-foreground text-lg mb-4">
                    No rides found matching your criteria
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Try adjusting your filters or search for a different route
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {rides.map((ride) => (
                    <RideCard key={ride.id} ride={ride} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Search;
