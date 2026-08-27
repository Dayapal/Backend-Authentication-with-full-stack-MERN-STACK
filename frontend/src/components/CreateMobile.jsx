import axios from "axios";
import React, { useState } from "react";

const CreateMobile = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    color: "",
    ram: "",
    camera: "",
    companyName: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const mobileData = new FormData();

      mobileData.append("name", formData.name);
      mobileData.append("price", Number(formData.price));
      mobileData.append("color", formData.color);
      mobileData.append("ram", formData.ram);
      mobileData.append("camera", formData.camera);
      mobileData.append("companyName", formData.companyName);
      mobileData.append("image", image);

      await axios.post(
        "http://localhost:3000/mobile",
        mobileData
      );

      alert("Mobile created successfully");

      setFormData({
        name: "",
        price: "",
        color: "",
        ram: "",
        camera: "",
        companyName: "",
      });

      setImage(null);

    } catch (error) {
      console.log(
        "Failed to create mobile:",
        error.response?.data || error.message
      );

      alert("Failed to create mobile");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">

      <div className="mx-auto max-w-2xl">

        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-slate-800">
            Create Mobile
          </h1>

          <p className="mt-2 text-slate-500">
            Add a new mobile
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg md:p-8">

          <form onSubmit={handleSubmit}>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              {/* Mobile Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Mobile Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="e.g. iPhone 18"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
                  required
                />
              </div>

              {/* Company */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Company
                </label>

                <input
                  type="text"
                  name="companyName"
                  placeholder="e.g. Apple"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
                  required
                />
              </div>

              {/* Price */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Price
                </label>

                <input
                  type="number"
                  name="price"
                  placeholder="e.g. 70000"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
                  required
                />
              </div>

              {/* Color */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Color
                </label>

                <input
                  type="text"
                  name="color"
                  placeholder="e.g. Black"
                  value={formData.color}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
                  required
                />
              </div>

              {/* RAM */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  RAM
                </label>

                <input
                  type="text"
                  name="ram"
                  placeholder="e.g. 12GB"
                  value={formData.ram}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
                  required
                />
              </div>

              {/* Camera */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Camera
                </label>

                <input
                  type="text"
                  name="camera"
                  placeholder="e.g. 48MP"
                  value={formData.camera}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
                  required
                />
              </div>

            </div>

            {/* Image */}
            <div className="mt-5">

              <label className="mb-2 block text-sm font-medium text-slate-700">
                Mobile Image
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3"
                required
              />

            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
            >
              Create Mobile
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default CreateMobile;