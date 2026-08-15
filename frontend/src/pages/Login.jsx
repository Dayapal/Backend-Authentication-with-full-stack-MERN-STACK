
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {
    const [formData, setformData] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3000/login", formData)
            console.log(res.data)
            const token = res.data.token;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(res.data.data))
            console.log("User Login successfully");
            alert("User login successfully");
            setformData({
                email: "",
                password: ""
            })
            navigate("/dashboard");

        } catch (error) {
            console.log("Failed to login User")
            alert("Failed to Login User")
        }
    }
    return (
        <div className='text-center bg-amber-500 m-10 flex flex-col'  >
            <h1 className='m-5 text-2xl '>Login User here</h1>
            <form onSubmit={handleSubmit} >

                <input type="email" name="email" placeholder='Enter your email..'
                    onChange={handleChange}
                    value={formData.email}
                    className='w-100 h-10 bg-red-200 m-2 p-3 rounded-md'
                    required
                />
                <input type="password" name="password" placeholder='Enter your password..'
                    onChange={handleChange}
                    value={formData.password}
                    className='w-100 h-10 bg-red-200 m-2 p-3 rounded-md  '
                    required
                />
                <button type='submit'
                    className='bg-green-600 w-50 h-15 text-white m-5 '
                >Submit</button>
            </form>
            <p className="text-center mt-5 text-slate-600 block">
                Don't have an account?{" "}
                <Link
                    to="/register"
                    className="text-indigo-600 font-semibold block m-2"
                >
                    Register
                </Link>
            </p>

        </div>
    )
}

export default Login





























































