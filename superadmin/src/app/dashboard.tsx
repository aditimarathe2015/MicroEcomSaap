import Navigation from "./common/navigation";

    export default function Dashboard() {
        return (
            <div className="bg-gray-100">
            <div className="flex h-screen bg-gray-200">
                {/* Sidebar */}
                <Navigation/>

                {/* Main content */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Header */}
                    <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
                        <div className="flex items-center">
                            <h1 className="text-xl font-semibold text-gray-800">Welcome, Admin!</h1>
                        </div>
                        <div className="flex items-center">
                            <div className="relative">
                                <button className="relative z-10 block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none">
                                    <img className="h-full w-full object-cover" src="https://via.placeholder.com/150" alt="Your avatar" />
                                </button>
                            </div>
                        </div>
                    </header>

                    {/* Content */}
                    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                        <div className="container mx-auto px-6 py-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-lg font-medium text-gray-700">Total Users</h3>
                                    <p className="text-3xl font-bold text-gray-900 mt-2">1,257</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-lg font-medium text-gray-700">Sales</h3>
                                    <p className="text-3xl font-bold text-gray-900 mt-2">$24,350</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-lg font-medium text-gray-700">New Orders</h3>
                                    <p className="text-3xl font-bold text-gray-900 mt-2">345</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-lg font-medium text-gray-700">Pending Tasks</h3>
                                    <p className="text-3xl font-bold text-gray-900 mt-2">12</p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <div className="bg-white rounded-lg shadow-md">
                                    <div className="px-6 py-4 border-b border-gray-200">
                                        <h3 className="text-lg font-medium text-gray-700">Recent Transactions</h3>
                                    </div>
                                    <div className="p-4">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                                <tr>
                                                    <th className="py-2 px-4 border-b">Order ID</th>
                                                    <th className="py-2 px-4 border-b">Customer</th>
                                                    <th className="py-2 px-4 border-b">Amount</th>
                                                    <th className="py-2 px-4 border-b">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border-b text-center">#1234</td>
                                                    <td className="py-2 px-4 border-b text-center">John Doe</td>
                                                    <td className="py-2 px-4 border-b text-center">$150.00</td>
                                                    <td className="py-2 px-4 border-b text-center"><span className="bg-green-200 text-green-800 py-1 px-3 rounded-full text-xs">Completed</span></td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border-b text-center">#5678</td>
                                                    <td className="py-2 px-4 border-b text-center">Jane Smith</td>
                                                    <td className="py-2 px-4 border-b text-center">$200.00</td>
                                                    <td className="py-2 px-4 border-b text-center"><span className="bg-yellow-200 text-yellow-800 py-1 px-3 rounded-full text-xs">Pending</span></td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border-b text-center">#9101</td>
                                                    <td className="py-2 px-4 border-b text-center">Sam Wilson</td>
                                                    <td className="py-2 px-4 border-b text-center">$50.00</td>
                                                    <td className="py-2 px-4 border-b text-center"><span className="bg-red-200 text-red-800 py-1 px-3 rounded-full text-xs">Cancelled</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}