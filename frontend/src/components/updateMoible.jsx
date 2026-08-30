import axios from "../api/axios";
import React, { useEffect, useState } from "react";

const MobileFetch = () => {
  const [mobile, setMobile] = useState([]);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    price: "",
    color: "",
    ram: "",
    companyName: "",
    camera: "",
  });

 
  const fetchMobile = async () => {
    try {
      const res = await axios.get("/mobiles");

      console.log("mobile here ", res.data.data);

      setMobile(res.data.data);
    } catch (error) {
      console.log("Failed to fetch Mobile", error.message);
    }
  };

  const deleteMobile = async (id) => {
    try {
      await axios.delete(`/mobile/${id}`);

      setMobile((prev) =>
        prev.filter((item) => item._id !== id)
      );

      console.log("Mobile deleted successfully");
      alert("Delete Mobile Successfully");
    } catch (error) {
      console.log("Failed to delete Mobile", error);
      alert("Failed to delete mobile");
    }
  };

  const handleEdit = (item) => {
    setEditId(item._id);

    setForm({
      name: item.name || "",
      price: item.price || "",
      color: item.color || "",
      ram: item.ram || "",
      companyName: item.companyName || "",
      camera: item.camera || "",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updateMobile = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `/mobile/${editId}`,
        form
      );

      console.log("Updated mobile:", res.data);
      setMobile((prev) =>
        prev.map((item) =>
          item._id === editId
            ? {
                ...item,
                ...form,
              }
            : item
        )
      );

      alert("Mobile updated successfully");

   
      setEditId(null);
      setForm({
        name: "",
        price: "",
        color: "",
        ram: "",
        companyName: "",
        camera: "",
      });
    } catch (error) {
      console.log("Failed to update Mobile", error);
      alert("Failed to update mobile");
    }
  };
  const cancelUpdate = () => {
    setEditId(null);

    setForm({
      name: "",
      price: "",
      color: "",
      ram: "",
      companyName: "",
      camera: "",
    });
  };
  useEffect(() => {
    fetchMobile();
  }, []);

  return (
    <div>
      <h1 className="text-center text-2xl bg-amber-300 p-3">
        All Mobiles here
      </h1>
      {editId && (
        <div className="bg-gray-100 p-6 m-5 rounded-md shadow-md">
          <h2 className="text-2xl font-bold text-center mb-5">
            Update Mobile
          </h2>

          <form
            onSubmit={updateMobile}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Mobile Name"
              className="border p-3 rounded-md"
            />
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Price"
              className="border p-3 rounded-md"
            />
            <input
              type="text"
              name="color"
              value={form.color}
              onChange={handleChange}
              placeholder="Color"
              className="border p-3 rounded-md"
            />

            <input
              type="text"
              name="ram"
              value={form.ram}
              onChange={handleChange}
              placeholder="RAM"
              className="border p-3 rounded-md"
            />
            <input
              type="text"
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              className="border p-3 rounded-md"
            />
            <input
              type="text"
              name="camera"
              value={form.camera}
              onChange={handleChange}
              placeholder="Camera"
              className="border p-3 rounded-md"
            />


            <div className="md:col-span-2 flex justify-center gap-4">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-800"
              >
                Update Mobile
              </button>

              <button
                type="button"
                onClick={cancelUpdate}
                className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-800"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
      {mobile.length === 0 ? (
        <h1 className="text-center text-2xl bg-pink-700 text-white p-5">
          Mobile not Fetch Yet
        </h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5 m-5 gap-4">
          {mobile.map((item) => (
            <div
              key={item._id}
              className="bg-gray-200 p-5 rounded-md"
            >
              <h1>
                <span className="text-indigo-600 mr-4">
                  Name:
                </span>
                {item.name}
              </h1>

              <h1>
                <span className="text-indigo-600 mr-4">
                  Price:
                </span>
                {item.price}
              </h1>

              <h1>
                <span className="text-indigo-600 mr-4">
                  Color:
                </span>
                {item.color}
              </h1>

              <h1>
                <span className="text-indigo-600 mr-4">
                  RAM:
                </span>
                {item.ram}
              </h1>
              <h1>
                <span className="text-indigo-600 mr-4">
                  Company:
                </span>
                {item.companyName}
              </h1>

              <h1>
                <span className="text-indigo-600 mr-4">
                  Camera:
                </span>
                {item.camera}
              </h1>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => deleteMobile(item._id)}
                  className="bg-red-600 text-white p-2 text-sm m-1 w-25 rounded-md hover:bg-red-900"
                >
                  Delete
                </button>

                <button
                  onClick={() => handleEdit(item)}
                  className="bg-green-600 text-white p-2 text-sm m-1 w-25 rounded-md hover:bg-green-900"
                >
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileFetch;