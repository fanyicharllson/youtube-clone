import { useRef } from "react";
import {
  menuIcon,
  logoIcon,
  searchIcon,
  voiceSearchIcon,
  plusIcon,
  notificationIcon,
} from "../utils";

export default function Navbar() {
  const inputRef = useRef<HTMLInputElement>(null); // Specify type for better TypeScript support

  const handleFocus = () => {
    inputRef.current?.focus(); // Check if inputRef.current is defined before calling focus
  };

  return (
    <header className="header">
      <div className="max-screen-width">
        {/* Menu Icon */}
        <div>
          <img
            src={menuIcon}
            alt="Menu Icon"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </div>

        {/* Logo */}
        <a href="#">
          <img
            src={logoIcon}
            alt="YouTube Logo"
            className="w-24 h-auto"
          />
        </a>

        {/* Search Bar */}
        <div className="flex flex-1">
          <div className="flex flex-1 border border-gray-500 rounded-full overflow-hidden">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search"
              className="border-none px-4 py-2 text-white bg-black flex-1"
            />
            <button
              onClick={handleFocus}
              className="bg-gray-700 px-6 flex items-center justify-center"
            >
              <img src={searchIcon} alt="Search" width={20} height={20} />
            </button>
          </div>
        </div>

        {/* Voice Search */}
        <button className="bg-gray-700 p-2 rounded-full">
          <img
            src={voiceSearchIcon}
            alt="Voice Search"
            className="cursor-pointer h-6 w-6"
          />
        </button>

        {/* Create Button */}
        <div className="flex items-center gap-2 bg-gray-700 py-2 px-4 rounded-full cursor-pointer">
          <img src={plusIcon} alt="Add" className="h-6 w-6" />
          <span className="text-sm text-white font-bold">Create</span>
        </div>

        {/* Notification Icon */}
        <button className="flex items-center">
          <img
            src={notificationIcon}
            alt="Notifications"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </button>

        {/* Profile */}
        <div className="rounded-full h-8 w-8 bg-gray-500 cursor-pointer"></div>
      </div>
    </header>
  );
}
