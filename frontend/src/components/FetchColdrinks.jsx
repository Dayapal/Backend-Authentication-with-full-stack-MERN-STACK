import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchColdrinks = () => {
  const [data, setData] = useState([]);

  const [form, setForm] = useState({
    name: "",
    flavour: "",
    quantity: "",
  });

  const [editId, setEditId] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/coldrinks");
      setData(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };


  const addDrink = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/coldrink",
        form
      );

      setData((prev) => [...prev, res.data.data]);

      setForm({
        name: "",
        flavour: "",
        quantity: "",
      });

      alert("Added Successfully");
    } catch (error) {
      console.log(error.message);
    }
  };


  const deleteDrink = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/coldrink/${id}`);

      setData((prev) => prev.filter((item) => item._id !== id));

      alert("Deleted Successfully");
      
    } catch (error) {
      console.log(error.message);
    }
  };


  const updateDrink = async () => {
    try {
      const res = await axios.put(
        `http://localhost:3000/coldrink/${editId}`,
        form
      );

      setData((prev) =>
        prev.map((item) =>
          item._id === editId ? res.data.data : item
        )
      );

      setForm({
        name: "",
        flavour: "",
        quantity: "",
      });

      setEditId(null);

      alert("Updated Successfully");
    } catch (error) {
      console.log(error.message);
    }
  };


  const handleSubmit = () => {
    if (editId) {
      updateDrink();
    } else {
      addDrink();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        Cold Drinks CRUD App
      </h1>


      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-6">

        <h2 className="text-2xl font-semibold mb-5">
          {editId ? "Update Cold Drink" : "Add Cold Drink"}
        </h2>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Enter Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Enter Flavour"
            value={form.flavour}
            onChange={(e) =>
              setForm({ ...form, flavour: e.target.value })
            }
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="number"
            placeholder="Enter Quantity"
            value={form.quantity}
            onChange={(e) =>
              setForm({ ...form, quantity: e.target.value })
            }
            className="w-full border p-3 rounded-lg"
          />

          <div className="flex gap-3">

            <button
              onClick={handleSubmit}
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              {editId ? "Update Drink" : "Add Drink"}
            </button>

            {editId && (
              <button
                onClick={() => {
                  setEditId(null);
                  setForm({
                    name: "",
                    flavour: "",
                    quantity: "",
                  });
                }}
                className="flex-1 bg-gray-600 text-white py-3 rounded-lg"
              >
                Cancel
              </button>
            )}

          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {data.length === 0 ? (
          <h2 className="text-center text-2xl">
            No Cold Drinks Found
          </h2>
        ) : (
          data.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-lg p-5"
            >
              <h2 className="text-2xl font-bold text-blue-700">
                {item.name}
              </h2>
              <p className="mt-2">
                <strong>Flavour:</strong> {item.flavour}
              </p>
              <p className="mb-5">
                <strong>Quantity:</strong> {item.quantity}
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setEditId(item._id);
                    setForm({
                      name: item.name,
                      flavour: item.flavour,
                      quantity: item.quantity,
                    });
                  }}
                  className="flex-1 bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteDrink(item._id)}
                  className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700">
                  Delete
                </button>

              </div>

            </div>
          ))
        )}

      </div>

    </div>
  );
};

export default FetchColdrinks;