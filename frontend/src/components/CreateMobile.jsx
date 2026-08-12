// import axios from 'axios'
// import React from 'react'
// import { useState } from 'react'

// const CreateMobile = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         price: "",
//         color: "",
//         ram: "",
//         camera: "",
//         companyName: ""
//     })

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         })
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const mobileData = {
//                 ...formData,
//                 price: Number(formData.price),
//             };
//             const res = await axios.post("http://localhost:3000/mobile", mobileData)
//             console.log(res.data)
//             alert("Mobile Create succcesfully");
//             setFormData({
//                 name: "",
//                 price: "",
//                 color: "",
//                 ram: "",
//                 camera: "",
//                 companyName: ""
//             })
//         } catch (error) {
//             console.log("Failed to create Mobile", error.message || res.error.message)

//         }
//     }

//     return (
//         <div>
//             <h1>Create Mobile</h1>
//             <form onSubmit={handleSubmit}>

//                 <input type="text" name="name" placeholder="name"
//                     onChange={handleChange}
//                     value={formData.name}
//                     className='p-5 bg-amber-300 m-2'
//                 />
//                 <input type="text" name="price" placeholder="price"
//                     onChange={handleChange}
//                     value={formData.price}
//                     className='p-5 bg-amber-300 m-2'
//                 />
//                 <input type="text" name="color" placeholder="color"
//                     onChange={handleChange}
//                     value={formData.color}
//                     className='p-5 bg-amber-300 m-2'
//                 />
//                 <input type="text" name="ram" placeholder="ram"
//                     onChange={handleChange}
//                     value={formData.ram}
//                     className='p-5 bg-amber-300 m-2'
//                 />
//                 <input type="text" name="camera" placeholder="camera"
//                     onChange={handleChange}
//                     value={formData.camera}
//                     className='p-5 bg-amber-300 m-2'
//                 />
//                 <input type="text" name="companyName" placeholder="companyName"
//                     onChange={handleChange}
//                     value={formData.companyName}
//                     className='p-5 bg-amber-300 m-2'
//                 />

//                 <button className='w-50 bg-amber-500 p-5'>
//                     Create Mobile
//                 </button>
//             </form>

//         </div>
//     )
// }

// export default CreateMobile



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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const hanldeSubmit = async (e) => {
    e.preventDefault();

    try {
      const mobileData = {
        ...formData,
        price: Number(formData.price),
      };

      await axios.post("http://localhost:3000/mobile", mobileData);

      alert("Mobile created successfully");

      setFormData({
        name: "",
        price: "",
        color: "",
        ram: "",
        camera: "",
        companyName: "",
      });
    } catch (error) {
      console.log("Failed to Create mobile", error.message);
      alert("Failed to create mobile");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-blue-50 to-indigo-100 px-4 py-10">

      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-3xl shadow-lg">
            📱
          </div>

          <h1 className="text-3xl font-bold text-slate-800 md:text-4xl">
            Create Your Mobile
          </h1>

          <p className="mt-2 text-slate-500">
            Add a new mobile product to your collection
          </p>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/60 md:p-10">

          <form onSubmit={hanldeSubmit}>

            {/* Product Information */}
            <div className="mb-8">
              <h2 className="mb-1 text-xl font-semibold text-slate-800">
                Mobile Information
              </h2>

              <p className="text-sm text-slate-500">
                Enter the basic details of the mobile
              </p>
            </div>

            {/* Form Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

              {/* Mobile Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Mobile Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="e.g. iPhone 15"
                  onChange={handleChange}
                  value={formData.name}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="companyName"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Company Name
                </label>

                <input
                  id="companyName"
                  type="text"
                  name="companyName"
                  placeholder="e.g. Apple"
                  onChange={handleChange}
                  value={formData.companyName}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                  required
                />
              </div>

              {/* Price */}
              <div>
                <label
                  htmlFor="price"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Price
                </label>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-medium text-slate-500">
                    ₹
                  </span>

                  <input
                    id="price"
                    type="number"
                    name="price"
                    placeholder="Enter price"
                    onChange={handleChange}
                    value={formData.price}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-9 pr-4 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                    required
                  />
                </div>
              </div>

              {/* Color */}
              <div>
                <label
                  htmlFor="color"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Color
                </label>

                <input
                  id="color"
                  type="text"
                  name="color"
                  placeholder="e.g. Black"
                  onChange={handleChange}
                  value={formData.color}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                  required
                />
              </div>

              {/* RAM */}
              <div>
                <label
                  htmlFor="ram"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  RAM
                </label>

                <input
                  id="ram"
                  type="text"
                  name="ram"
                  placeholder="e.g. 8GB"
                  onChange={handleChange}
                  value={formData.ram}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                  required
                />
              </div>

              {/* Camera */}
              <div>
                <label
                  htmlFor="camera"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Camera
                </label>

                <input
                  id="camera"
                  type="text"
                  name="camera"
                  placeholder="e.g. 50MP"
                  onChange={handleChange}
                  value={formData.camera}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                  required
                />
              </div>
            </div>

            {/* Divider */}
            <div className="my-8 border-t border-slate-100"></div>

            {/* Preview */}
            <div className="mb-8 rounded-2xl bg-slate-50 p-5">
              <h3 className="mb-4 font-semibold text-slate-800">
                Mobile Preview
              </h3>

              <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4">

                <div>
                  <p className="text-slate-400">Name</p>
                  <p className="mt-1 font-medium text-slate-700">
                    {formData.name || "—"}
                  </p>
                </div>

                <div>
                  <p className="text-slate-400">Company</p>
                  <p className="mt-1 font-medium text-slate-700">
                    {formData.companyName || "—"}
                  </p>
                </div>

                <div>
                  <p className="text-slate-400">Price</p>
                  <p className="mt-1 font-medium text-indigo-600">
                    {formData.price ? `₹${formData.price}` : "—"}
                  </p>
                </div>

                <div>
                  <p className="text-slate-400">RAM</p>
                  <p className="mt-1 font-medium text-slate-700">
                    {formData.ram || "—"}
                  </p>
                </div>

              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl active:translate-y-0"
            >
              + Create Mobile
            </button>

          </form>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-slate-400">
          Make sure all mobile information is correct before submitting.
        </p>

      </div>
    </div>
  );
};

export default CreateMobile;

