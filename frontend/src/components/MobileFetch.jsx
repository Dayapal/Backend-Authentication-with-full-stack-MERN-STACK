import axios from "axios";
import React, { useEffect, useState } from "react";

const MobileFetch = () => {
  const [mobile, setMobile] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchMobile = async () => {
    try {
      const res = await axios.get("http://localhost:3000/mobiles");

      console.log("Mobile here:", res.data.data);

      setMobile(res.data.data);
    } catch (error) {
      console.log("Failed to fetch Mobile:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMobile();
  }, []);

  if (loading) {
    return <h2>Loading mobiles...</h2>;
  }

  if (mobile.length === 0) {
    return <h2>No mobiles found</h2>;
  }

  return (
    <div className="p-6">

      <h1 className="mb-6 text-2xl font-bold">
        All Mobiles
      </h1>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

        {mobile.map((item) => (
          <div
            key={item._id}
            className="rounded-lg border bg-white p-4 shadow"
          >
            <img
              src={item.image}
              alt={item.name}
              className="mb-4 h-52 w-full object-contain"
            />
            <h2 className="text-xl font-bold">
              {item.name}
            </h2>

            <p className="text-gray-600">
              Company: {item.companyName}
            </p>

            <p className="mt-2 text-lg font-semibold text-indigo-600">
              ₹{item.price}
            </p>

            <p>
              RAM: {item.ram}
            </p>

            <p>
              Camera: {item.camera}
            </p>

            <p>
              Color: {item.color}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
};

export default MobileFetch;