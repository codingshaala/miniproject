import React, { useState } from "react";
import { Search, Filter } from "lucide-react";
import Login from "./Login";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

export default function MiniProjectsHeader() {
    let [isLogin, setIsLogin] = useState(false)
  return (
    <header  className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 shadow-lg rounded-b-2xl">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        {/* Left: Title */}
        <div>
          <h1 className="text-3xl font-bold text-white drop-shadow-md">
            🚀 Mini Projects
          </h1>
          <p className="text-sm text-gray-100">
            Explore and practice real-world coding challenges
          </p>
        </div>

        {/* Right: Search & Filter */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              className="pl-10 pr-4 py-2 rounded-xl"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          <button
            onClick={()=> setIsLogin(true)}
            variant="secondary"
            className="flex items-center gap-2 rounded-xl shadow-md"
          >
            
            Login
          </button>
        </div>
        {/* Condtional Rendering */}
        {isLogin == true ? <Login handleLogin={setIsLogin}></Login> : null}
      </div>
    </header>
  );
}
