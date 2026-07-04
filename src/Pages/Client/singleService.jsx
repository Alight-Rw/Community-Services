/** @format */

import React, { useEffect, useState } from "react";
import DefaultImage from "../../../public/ServicesImage/ServiceImg4.png";
import {
  MapPin,
  Phone,
  Clock,
  Star,
  Info,
  Banknote,
} from "lucide-react";
import {
  getRandomRating,
  getRandomReviews,
} from "../../Utils/SharedUtils";
import {
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import { APIsRequestService } from "../../Services/APIsRequestService";
import { toast } from "react-toastify";

export default function SingleService() {
  const navigate = useNavigate();

  const [rating] = useState(getRandomRating());
  const [reviews] = useState(getRandomReviews());
  const fullStars = Math.floor(rating);

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  const [loading, setLoading] = useState(true);
  const [service, setService] = useState(null);

  const fetchService = async () => {
    try {
      setLoading(true);

      const response = await APIsRequestService.SerchServiceAPI(search);
      const result = await response.json();

      console.log("API Response:", result);

      if (!response.ok) {
        toast.error(result.message);
        return;
      }

      if (result.data.length === 0) {
        setService(null);
        return;
      }

      setService(result.data[0]);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch service");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (search) {
      fetchService();
    } else {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    console.log("Updated service:", service);
  }, [service]);

  const handleBooking = () => {
    if (!service?.isActive) return;

    localStorage.setItem(
      "SELECTED-SERVICE",
      JSON.stringify(service)
    );

    const isLoggedIn = localStorage.getItem("IS_LOGGED-IN");

    if (isLoggedIn === "true") {
      const slugName = service.name
        .toLowerCase()
        .replace(/\s+/g, "-");

      navigate(`/confirm-booking/${slugName}`, {
        state: service,
      });
    } else {
      navigate("/login");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        Loading...
      </div>
    );
  }

  if (!service) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        Service not found.
      </div>
    );
  }

  return (
    <div className="p-20">
      <h1 className="text-4xl font-bold">{service.name}</h1>

      <div className="py-10 flex gap-10">

        <div className="w-3/4 flex gap-10">

          <div className="w-1/2">

            <img
              className="w-full h-[400px] rounded-xl object-cover"
              src={service.avatar || DefaultImage}
              alt={service.name}
            />

          </div>

          <div className="flex-1">

            <h2 className="font-bold text-3xl mb-6">
              {service.name}
            </h2>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <MapPin />
                <span className="text-xl">
                  {service.location}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone />
                <span className="text-xl">
                  {service.providerId.phone}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Clock />
                <span className="text-xl">
                  {service.timeFrom} - {service.timeTo}
                </span>
              </div>

              <div className="flex items-center gap-3 text-secondary font-bold">
                <Banknote />
                <span className="text-xl">
                  {service.price.toLocaleString()} RWF
                </span>
              </div>

            </div>

            <div className="flex items-center gap-2 mt-6">

              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i <= fullStars ? "#FFC107" : "none"}
                    color={i <= fullStars ? "#FFC107" : "#D1D5DB"}
                  />
                ))}
              </div>

              <span>
                {rating} ({reviews} reviews)
              </span>

            </div>

          </div>

        </div>

        <div className="w-1/4">

          <div className="flex gap-2 mb-5">

            <h3 className="text-3xl font-bold">
              About
            </h3>

            <h3 className="text-3xl font-bold text-secondary">
              {service.category?.categoryName}
            </h3>

          </div>

          <p className="text-lg leading-8">
            {service.description}
          </p>

          <div
            className={`flex items-center gap-2 px-3 py-3 rounded-xl mt-6 ${
              service.isActive
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            <Info size={16} />

            <span>
              {service.isActive
                ? "Available Service"
                : "Unavailable Service"}
            </span>
          </div>

          <button
            disabled={!service.isActive}
            onClick={handleBooking}
            className="w-full bg-secondary text-white py-3 rounded-xl mt-6 disabled:bg-gray-400"
          >
            Book now
          </button>

        </div>

      </div>
    </div>
  );
}