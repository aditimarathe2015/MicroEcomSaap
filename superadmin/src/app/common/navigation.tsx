export default function Navigation() {
  return (
   <div className="w-64 bg-gray-800 text-white flex flex-col">
                    <div className="px-8 py-6 border-b border-gray-700">
                        <h2 className="text-2xl font-semibold">Dashboard</h2>
                    </div>
                    <nav className="flex-1 px-4 py-6 space-y-2">
                        <a href="#" className="flex items-center px-4 py-2 text-gray-100 bg-gray-700 rounded-md">
                            <i className="h-6 w-6 mr-3 text-gray-400"></i>
                            <span>Home</span>
                        </a>
                        <a href="#" className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-gray-100 rounded-md">
                            <i className="h-6 w-6 mr-3"></i>
                            <span>Analytics</span>
                        </a>
                        <a href="#" className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-gray-100 rounded-md">
                            <i className="h-6 w-6 mr-3"></i>
                            <span>Users</span>
                        </a>
                        <a href="#" className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-gray-100 rounded-md">
                            <i className="h-6 w-6 mr-3"></i>
                            <span>Settings</span>
                        </a>
                    </nav>
                </div>
  );
}