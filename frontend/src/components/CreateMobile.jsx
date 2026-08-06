import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const CreateMobile = () => {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        color: "",
        ram: "",
        camera: "",
        companyName: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const mobileData = {
                ...formData,
                price: Number(formData.price),
            };
            const res = await axios.post("http://localhost:3000/mobile", mobileData)
            console.log(res.data)
            alert("Mobile Create succcesfully");
            setFormData({
                name: "",
                price: "",
                color: "",
                ram: "",
                camera: "",
                companyName: ""
            })
        } catch (error) {
            console.log("Failed to create Mobile", error.message || res.error.message)

        }
    }

    return (
        <div>
            <h1>Create Mobile</h1>
            <form onSubmit={handleSubmit}>

                <input type="text" name="name" placeholder="name"
                    onChange={handleChange}
                    value={formData.name}
                    className='p-5 bg-amber-300 m-2'
                />
                <input type="text" name="price" placeholder="price"
                    onChange={handleChange}
                    value={formData.price}
                    className='p-5 bg-amber-300 m-2'
                />
                <input type="text" name="color" placeholder="color"
                    onChange={handleChange}
                    value={formData.color}
                    className='p-5 bg-amber-300 m-2'
                />
                <input type="text" name="ram" placeholder="ram"
                    onChange={handleChange}
                    value={formData.ram}
                    className='p-5 bg-amber-300 m-2'
                />
                <input type="text" name="camera" placeholder="camera"
                    onChange={handleChange}
                    value={formData.camera}
                    className='p-5 bg-amber-300 m-2'
                />
                <input type="text" name="companyName" placeholder="companyName"
                    onChange={handleChange}
                    value={formData.companyName}
                    className='p-5 bg-amber-300 m-2'
                />

                <button className='w-50 bg-amber-500 p-5'>
                    Create Mobile
                </button>
            </form>

        </div>
    )
}

export default CreateMobile
