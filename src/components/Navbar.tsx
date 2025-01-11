import {
  menuIcon,
  logoIcon,
  searchIcon,
  voiceSearchIcon,
  plusIcon,
  notificationIcon,
} from "../utils";

export default function Navbar() {
  return (
    <header className="header">
      <div className="max-screen-width">
        <div className="flex items-center gap-4">
          {/* Menu */}
          <div className="flex items-center">
            <div className="mr-5">
              <img
                src={menuIcon}
                alt="Menu Icon"
                width={30}
                height={30}
                className="cursor-pointer"
              />
            </div>
          </div>
          {/* Logo */}
          <a href="#">
            <img src={logoIcon} alt="Youtube Logo" className="w-28 h-28" />
          </a>
          {/* SearchBar */}
          <div className="flex flex-1 mx-4">
            <div className="flex flex-1 border border-gray-500 rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Search"
                className="outline-none border-none px-4 py-3 text-white bg-black flex-1"
              />
              <button className="search-button bg-gray-700 px-4">
                <img src={searchIcon} alt="Search" width={20} height={20} />
              </button>
            </div>
          </div>
          {/* Voice Icon */}
          <div className="flex items-center">
            <button className="bg-gray-700 p-2 rounded-full">
              <img
                src={voiceSearchIcon}
                alt="Mic"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </button>
          </div>
          {/* Create */}
          <div className="flex items-center">
            <div className="flex items-center gap-1 bg-gray-700 py-2 px-4 rounded-full cursor-pointer">
              <img
                src={plusIcon}
                alt="Add"
                width={30}
                height={30}
                className="cursor-pointer"
              />
              <div>
                <span className="text-[16px] text-white font-bold">Create</span>
              </div>
            </div>
          </div>
          {/* Notification */}
          <div className="flex items-center">
            <div className="flex items-center cursor-pointer">
              <img
                src={notificationIcon}
                alt="Notifications"
                width={30}
                height={30}
                className="cursor-pointer"
              />
            </div>
          </div>
          {/* Profile */}
          <div className="flex items-center">
            <div className="rounded-full h-10 w-10 bg-gray-500 cursor-pointer"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
