import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
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
            const res = await axios.post("http://localhost:3000/register", formData)
            console.log("User regiseter successfully ", res.data);
            alert("User Register successfully")
            setFormData({
                name: "",
                email: "",
                password: ""
            })
            navigate("/login")

        } catch (error) {
            console.log("Failed to Register user", error.message)
            alert("Failed to Register User")

        }
    }
    return (
        <div className='  flex flex-col  bg-amber-500 text-center'>
            <h1 className='text-2xl text-white'>Register Page</h1>
            <form onSubmit={handleSubmit} >

                <input type="text" name="name" placeholder='Enter name..'
                    onChange={handleChange}
                    value={formData.name}
                    className=' p-5 m-4 bg-amber-900'
                    required
                />
                <input type="email" name="email" placeholder='Enter email..'
                    onChange={handleChange}
                    value={formData.email}
                    className=' p-5 m-4 bg-amber-900'
                    required
                />
                <input type="password" name="password" placeholder='Enter password..'
                    onChange={handleChange}
                    value={formData.password}
                    className=' p-5 m-4 bg-amber-900'
                    required
                />
                <button type='submit' className='bg-green-800 text-white p-5 w-50 h-15 m-2 rounded-md'>Submit</button>
            </form>




        </div>
    )
}

export default Register
