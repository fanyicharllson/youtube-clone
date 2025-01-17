type SidebarType = {
  isOpen: boolean; // Changed toggle to isOpen for clarity
  onClose: () => void; // Callback function to close the sidebar
  className?: string;
};

export default function Sidebar({ isOpen, onClose, className }: SidebarType) {
  return (
    <>
    <div className={``}></div>
    <div
      className={`fixed top-0 left-0 h-screen w-1/6 bg-purple-500 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } ${className}`}
    >
      <div className="bg-red-500 px-3 py-2 cursor-pointer">
        <button onClick={onClose}>Close Sidebar</button>
      </div>
    </div>
    </>
  );
}
