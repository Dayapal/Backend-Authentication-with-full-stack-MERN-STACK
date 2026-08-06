import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const MobileFetch = () => {
    const [mobile, setMobile] = useState([]);
    const fetchMobile = async () => {
        try {
            const res = await axios.get("http://localhost:3000/mobiles");
            console.log("mobile here ", res.data.data)
            setMobile(res.data.data)
        } catch (error) {
            console.log("Failed to fetch Mobile ", error.message)
        }
    }
    useEffect(() => {
        fetchMobile()
    }, [])


    

    return (
        <div>
            <h1 className='text-center text-2xl bg-amber-300 p-3'>All Mobiles here</h1>

            {mobile.length === 0 ? 
            (<h1 className='text-center text-2xl bg-pink-700 p-5'>
            Mobile not Fetch Yet
            </h1>) : (
                <div className='grid grid-cols-3 bg-amber-200  p-5 m-5 gap-1'>
                    {mobile.map((item,index) =>(
                        <div key={item._id}
                        className=' bg-gray-700 text-white text-2xl p-5 m-5'
                        >
                            <h1>Mobile Name: {item.name}</h1>
                            <h1>Mobile Price: {item.price}</h1>
                            <h1>Mobile Price: {item.color}</h1>
                            <h1>Mobile Price: {item.ram}</h1>
                            <h1>Mobile Price: {item.companyName}</h1>
                            <h1>Mobile Price: {item.camera}</h1>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default MobileFetch
