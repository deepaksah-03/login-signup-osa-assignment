import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {
  const [activeTab, setActiveTab] = useState("login")

  return (
    <>
      {/* Main card container */}
      <div className="card w-[420px] bg-[#2b2f36] rounded-2xl font-bold shadow-xl m-auto mt-20">

        {/* Tabs */}
        <div className="flex justify-between h-10 text-lg bg-[#23272f] rounded-t-2xl">

          {/* Login Tab */}
          <button
            onClick={() => setActiveTab("login")}
            className={`flex-1 cursor-pointer py-2 transition ${activeTab === "login"
                ? "bg-[#3a3f47] text-white rounded-br-lg rounded-tl-2xl"
                : "text-gray-400"
              }`}
          >
            Log In
          </button>

          {/* Signup Tab */}
          <button
            onClick={() => setActiveTab("signup")}
            className={`flex-1 cursor-pointer py-2 transition ${activeTab === "signup"
                ? "bg-[#3a3f47] text-white rounded-bl-lg rounded-tr-2xl"
                : "text-gray-400"
              }`}
          >
            Sign Up
          </button>
        </div>

        {/* 🔽 Component Render Area */}
        <div className="p-6">
          {activeTab === "login" ? <Login /> : <SignUp />}
        </div>

      </div>
    </>
  )
}

export default App
