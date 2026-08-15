import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"))
  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    navigate("/login");
  }

  return (
    <div className="min-h-screen bg-slate-100">

      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-indigo-600">
          Mobile App
        </h1>

        <div className="flex items-center gap-4">

          <span>
            Welcome, {user?.name}
          </span>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>

          <button
            onClick={() => navigate("/create-mobile")}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
          >
            Create Mobile
          </button>
          <button
            onClick={() => navigate("/mobiles")}
            className="bg-orange-600 text-white px-4 py-2 rounded-lg"
          >
             Mobile
          </button>

        </div>

      </nav>

      <div className="p-6">

        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-600">
          Welcome to your dashboard.
        </p>

      </div>

    </div>
  )
}

export default Dashboard
