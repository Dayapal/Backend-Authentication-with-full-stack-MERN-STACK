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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      data.append("image", image);

      await axios.post("http://localhost:3000/mobile", data);

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
      e.target.reset();
    } catch (error) {
      console.log(error);
      alert("Failed to create mobile");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-xl rounded-lg bg-white p-6 shadow">

        <h1 className="mb-6 text-center text-2xl font-bold">
          Create Mobile
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Mobile Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded border p-3"
            required
          />

          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full rounded border p-3"
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="w-full rounded border p-3"
            required
          />

          <input
            type="text"
            name="color"
            placeholder="Color"
            value={formData.color}
            onChange={handleChange}
            className="w-full rounded border p-3"
            required
          />

          <input
            type="text"
            name="ram"
            placeholder="RAM"
            value={formData.ram}
            onChange={handleChange}
            className="w-full rounded border p-3"
            required
          />

          <input
            type="text"
            name="camera"
            placeholder="Camera"
            value={formData.camera}
            onChange={handleChange}
            className="w-full rounded border p-3"
            required
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full rounded border p-3"
            required
          />

          <button
            type="submit"
            className="w-full rounded bg-indigo-600 p-3 font-semibold text-white hover:bg-indigo-700"
          >
            Create Mobile
          </button>

        </form>
      </div>
    </div>
  );
};

export default CreateMobile;