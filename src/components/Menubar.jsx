import {useState} from "react";
import {assets} from "../assets/assets.js";
import {Menu,X} from "lucide-react";

const Menubar=()=>{

    const [menuOpen,setMenuOpen]=useState(false);

    return (
        <nav className="bg-white px-8 py-4 flex justify-between items-center">
            {/* left side logo and text*/}
             <div className="flex items-center space-x-2">
                <img src={assets.logo} alt="logo" className="h-8 w-8 object-contain cursor-pointer"/>
                <span className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent cursor-pointer">
                Clear<span className="text-gray-400 cursor-pointer">Cut</span>

                </span>

            </div>
            {/* Right side Action button */}
            <div className="hidden md:flex items-center space-x-4">
                <button className="text-gray-700 font-medium cursor-pointer
                                    hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-600
                                    hover:bg-clip-text hover:text-transparent transition-all duration-300">
                    Login
                </button>
                <button className="bg-gray-100 cursor-pointer hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-full transition-all duration-150 ease-in-out">
                    Sign up
                </button>
            </div>
            {/*mobile hamburger*/}
            <div className="flex md:hidden">
                <button onClick={()=>setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={28} />:<Menu size={28}/> }
                </button>

            </div>
            {/*mobile menu*/}
            {
                menuOpen && (
                    <div className="absolute top-16 right-8 bg-white shadow-md rounded-md flex flex-col space-y-4 p-4 w-40">
                    <button className="text-gray-700 hover:text-blue-500 font-medium">Login</button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-full text-center">Signup</button>
                    </div>

            )}
            
        </nav>
    )
}
export default Menubar;