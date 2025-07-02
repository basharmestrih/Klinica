import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react"; // ✅ Lucide Icon
import CartPopup from "../ClinicStore/Components/CartPopup.jsx"; // ✅ Cart Popup Component
import { useDispatch } from "react-redux";
import { logoutUser } from  '../Login/Redux/AuthSlice.jsx';
import SidebarMenu from "../SideBarMenu/SidebarMenu.jsx"; // adjust path as needed
import { useNavigate } from 'react-router-dom';



const Header = () => {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
   const navigateTo = (route) => {
    navigate(`/${route}`);
  };

  
  const handleLogout = () => {
    dispatch(logoutUser()); // ✅ Calls Supabase logout + Redux cleanup
  };






  return (
      <header className="sticky top-0 z-50 w-full h-16 bg-[#F8F8FF] shadow-md flex items-center justify-between">
      {/* Site Name */}
      <h1 className="text-4xl ml-5 font-bold text-[#007bff]">Klinica</h1>

      {/* Cart Section */}
    

      {/* Navigation Links */}
      <nav className="flex items-center mr-10 space-x-5">
        <div
          className="relative flex items-start cursor-pointer p-2"
          onClick={() => setCartOpen(true)}
        >
 
        </div>
  <span onClick={() => navigateTo('')} className="cursor-pointer text-[#007bff] font-bold px-2 py-1 rounded-md transition duration-300 hover:bg-[#007bff] hover:text-white">Home</span>
  <span onClick={() => navigateTo('login')} className="cursor-pointer text-[#007bff] font-bold px-2 py-1 rounded-md transition duration-300 hover:bg-[#007bff] hover:text-white">Login</span>
  <span onClick={() => navigateTo('appointments')} className="cursor-pointer text-[#007bff] font-bold px-2 py-1 rounded-md transition duration-300 hover:bg-[#007bff] hover:text-white">Appointments</span>
  <span onClick={() => navigateTo('store')} className="cursor-pointer text-[#007bff] font-bold px-2 py-1 rounded-md transition duration-300 hover:bg-[#007bff] hover:text-white">Store</span>
  <span onClick={() => navigateTo('contact')} className="cursor-pointer text-[#007bff] font-bold px-2 py-1 rounded-md transition duration-300 hover:bg-[#007bff] hover:text-white">Contact Us</span>

        {/* User Avatar */}
        {isLoggedIn && user?.email && (
        <div
          className="bg-indigo-500 font-bold rounded-full w-10 h-10 flex items-center justify-center ml-2 text-white cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)} // toggle menu

        >
          {user.email.slice(0, 2).toUpperCase()}
        </div>
        )}

        

      {/* Sidebar Menu */}
      <SidebarMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
  
      </nav>

      {/* Cart Popup */}
      {isCartOpen && <CartPopup onClose={() => setCartOpen(false)} />}
    </header>
  );
};

export default Header;
