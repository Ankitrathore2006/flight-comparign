import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { LogOut, User } from "lucide-react";
import toast from 'react-hot-toast';

const Navbar = () => {
  const { authUser, logout } = useAuthStore();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogoutt= async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error("Error logging out:", error);
      toast.error('Failed to logout. Please try again.');
    }
  };

  // Function to handle image loading
  const handleImageError = (e) => {
    e.target.src = "/avatar.png";
  };

  return (
    <nav>
      <div className="nav__logo">FlightHunt.</div>
      <ul className="nav__links">
        <li className="link"><Link to="/">Home</Link></li>
        <li className="link"><Link to="/flight">Flights</Link></li>
        <li className="link"><Link to="/about">About</Link></li>
        <li className="link"><Link to="/offers">Offers</Link></li>
        <li className="link"><Link to="/destinations">Destinations</Link></li>
        <li className="link"><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="nav__auth">
        {authUser ? (
          <div className="relative" ref={dropdownRef}>
            <div 
              className="profile-pic-container"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <img 
                src={ authUser.profilePic || "/avatar.png"}
                alt="Profile" 
                className="profile-pic"
                onError={handleImageError}
              />
              {showDropdown && (
                <div className="profile-dropdown">
                  <Link to="/profile" className="dropdown-item" onClick={() => setShowDropdown(false)}>
                    <User size={16} />
                    Profile
                  </Link>
                  <a onClick={handleLogoutt} className="dropdown-item">
                    <LogOut size={16} />
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            <Link to="/auth" className="btn">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 