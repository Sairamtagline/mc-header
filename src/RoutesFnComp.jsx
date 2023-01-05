import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Cards from './Cards';
import Hero from './Hero'
import Home from './Home'

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="hero" element={<Hero />} />
            <Route path="cards" element={<Cards />} />
        </Routes>
    );
}

function RoutesFnComp() {
    return (
        <div className="App">
            <nav className="py-4 px-2 bg-gray-800 text-gray-100">
                <div className="container mx-auto flex space-x-12">
                    <div className="font-bold uppercase text-lg">
                        Brand
                    </div>
                    <div>
                        <NavLink className="mr-4 font-semibold" to="/" end>
                            Home
                        </NavLink>
                        <NavLink className="mr-4 font-semibold" to="/hero">Hero</NavLink>
                        <NavLink className="mr-4 font-semibold" to="/cards">Cards</NavLink>
                    </div>
                </div>
            </nav>
            <AppRoutes />
        </div>
    );
}



export default RoutesFnComp