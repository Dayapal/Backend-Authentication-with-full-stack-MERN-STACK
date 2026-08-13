// import axios from 'axios'
// import React from 'react'
// import { useState } from 'react'

// const Login = () => {
//     const [formData, setFormData] = useState({
//         email: "",
//         password: ""
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
//             const res = await axios.post("http://localhost:3000/login", formData)
//             const token = res.data.token;
//             localStorage.setItem("token", token)

//             localStorage.setItem(
//                 "user",
//                 JSON.stringify(res.data.data)
//             )

//             console.log("User login successfully")
//             alert("Login Successfully")

//         } catch (error) {
//             console.log("Failed to login User ", error.message);
//             alert("Failed to Login User")
//         }
//     }

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">


//             <form onSubmit={handleSubmit}>
//                 <input type="email" name="email" placeholder='Enter email...'
//                     onChange={handleChange}
//                     value={formData.email}
//                     className="w-full border rounded-lg px-4 m-2 py-3"
//                     required
//                 />
//                 <input type="password" name="password" placeholder='Enter password...'
//                     onChange={handleChange}
//                     value={formData.password}
//                     className="w-full border rounded-lg px-4 m-2 py-3"
//                     required
//                 />
//                 <button type='submit'
//                     className='bg-green-600 ml-80  rounded-md w-50 h-15 p-5 text-white m-2'
//                 >Login</button>

//             </form>



//         </div>
//     )
// }

// export default Login



import axios from 'axios'
import React from 'react'
import { useState } from 'react'

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

        } catch (error) {
            console.log("Failed to login User")
            alert("Failed to Login User")
        }
    }


    return (
        <div className='text-center bg-amber-500 m-10'>
            <h1>Login User here</h1>
            <form onSubmit={handleSubmit} >

                <input type="email" name="email" placeholder='Enter your email..'
                    onChange={handleChange}
                    value={formData.email}
                    className='w-100 h-10 bg-red-200 m-2 p-2'
                    required
                />
                <input type="password" name="password" placeholder='Enter your password..'
                    onChange={handleChange}
                    value={formData.password}
                    className='w-100 h-10 bg-red-200 m-2 p-2'
                    required
                />
                <button type='submit'
                    className='bg-green-600 w-50 h-15 text-white m-5 p-2'
                >Submit</button>
            </form>


        </div>
    )
}

export default Login





























































