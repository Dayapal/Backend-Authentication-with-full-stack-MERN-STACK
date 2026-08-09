
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

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-blue-50 to-indigo-100 px-4 py-10">

      {/* Header */}
      <div className="mx-auto mb-10 max-w-7xl text-center">

        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-3xl shadow-lg">
          📱
        </div>

        <h1 className="text-3xl font-bold text-slate-800 md:text-4xl">
          All Mobiles
        </h1>

        <p className="mt-2 text-slate-500">
          Explore all available mobile phones
        </p>

      </div>

      {/* Loading */}
      {loading ? (
        <div className="flex min-h-75 items-center justify-center">

          <div className="text-center">

            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600"></div>

            <p className="mt-4 text-slate-500">
              Loading mobiles...
            </p>

          </div>

        </div>
      ) : mobile.length === 0 ? (

        /* Empty State */
        <div className="mx-auto max-w-xl rounded-3xl bg-white p-10 text-center shadow-xl">

          <div className="mb-4 text-6xl">
            📱
          </div>

          <h2 className="text-2xl font-bold text-slate-800">
            No Mobiles Found
          </h2>

          <p className="mt-2 text-slate-500">
            There are currently no mobile phones available.
          </p>

        </div>

      ) : (

        /* Mobile Grid */
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {mobile.map((item) => (

            <div
              key={item._id}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg shadow-slate-200/60 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Card Header */}
              <div className="flex items-center justify-between bg-linear-to-r from-indigo-600 to-blue-600 p-6">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-3xl backdrop-blur">
                  📱
                </div>

                <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur">
                  {item.companyName}
                </span>

              </div>

              {/* Card Content */}
              <div className="p-6">

                <h2 className="mb-5 text-2xl font-bold text-slate-800">
                  {item.name}
                </h2>

                {/* Price */}
                <div className="mb-5 rounded-2xl bg-indigo-50 p-4">
                  <p className="text-sm text-slate-500">
                    Price
                  </p>

                  <p className="mt-1 text-2xl font-bold text-indigo-600">
                    ₹{item.price}
                  </p>
                </div>

                {/* Specifications */}
                <div className="space-y-4">

                  {/* Color */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-slate-500">
                      🎨 Color
                    </span>

                    <span className="font-semibold text-slate-700">
                      {item.color}
                    </span>
                  </div>

                  {/* RAM */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-slate-500">
                      💾 RAM
                    </span>

                    <span className="font-semibold text-slate-700">
                      {item.ram}
                    </span>
                  </div>

                  {/* Camera */}
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">
                      📷 Camera
                    </span>

                    <span className="font-semibold text-slate-700">
                      {item.camera}
                    </span>
                  </div>

                </div>

                {/* Button */}
                <button
                  className="mt-6 w-full rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition duration-200 hover:bg-indigo-600"
                >
                  View Details
                </button>

              </div>

            </div>

          ))}

        </div>
      )}

      {/* Mobile Count */}
      {!loading && mobile.length > 0 && (
        <div className="mx-auto mt-8 max-w-7xl text-center">

          <span className="rounded-full bg-white px-5 py-2 text-sm font-medium text-slate-600 shadow">
            {mobile.length} Mobile{mobile.length > 1 ? "s" : ""} Available
          </span>

        </div>
      )}

    </div>
  );
};

export default MobileFetch;

