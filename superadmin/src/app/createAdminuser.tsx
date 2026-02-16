import Navigation from "./common/navigation";


export default function Adminuser() {
  return (
        <div className="bg-gray-100">
            <div className="flex h-screen bg-gray-200">
            s <Navigation/>
                {/* Main content */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Header */}
                    <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-blue-500">
                        <div className="flex items-center">
                            <h1 className="text-xl font-semibold text-gray-800">User Management</h1>
                        </div>
                        <div className="flex items-center">
                            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">
                                Add New User
                            </button>
                        </div>
                    </header>

                    {/* Content */}
                    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                        <div className="container mx-auto px-6 py-8">
                            <div className="bg-white rounded-lg shadow-md">
                                <div className="px-6 py-4 border-b border-gray-200">
                                    <h3 className="text-lg font-medium text-gray-700">All Users</h3>
                                </div>
                                <div className="p-4">
                                    <table className="min-w-full bg-white">
                                        <thead>
                                            <tr>
                                                <th className="py-2 px-4 border-b text-left">Name</th>
                                                <th className="py-2 px-4 border-b text-left">Email</th>
                                                <th className="py-2 px-4 border-b text-left">Role</th>
                                                <th className="py-2 px-4 border-b text-center">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="py-2 px-4 border-b">John Doe</td>
                                                <td className="py-2 px-4 border-b">john.doe@example.com</td>
                                                <td className="py-2 px-4 border-b">Admin</td>
                                                <td className="py-2 px-4 border-b text-center">
                                                    <button className="text-indigo-600 hover:text-indigo-900 text-sm mr-2">Edit</button>
                                                    <button className="text-red-600 hover:text-red-900 text-sm">Delete</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border-b">Jane Smith</td>
                                                <td className="py-2 px-4 border-b">jane.smith@example.com</td>
                                                <td className="py-2 px-4 border-b">Editor</td>
                                                <td className="py-2 px-4 border-b text-center">
                                                    <button className="text-indigo-600 hover:text-indigo-900 text-sm mr-2">Edit</button>
                                                    <button className="text-red-600 hover:text-red-900 text-sm">Delete</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border-b">Sam Wilson</td>
                                                <td className="py-2 px-4 border-b">sam.wilson@example.com</td>
                                                <td className="py-2 px-4 border-b">Viewer</td>
                                                <td className="py-2 px-4 border-b text-center">
                                                    <button className="text-indigo-600 hover:text-indigo-900 text-sm mr-2">Edit</button>
                                                    <button className="text-red-600 hover:text-red-900 text-sm">Delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
  
}