import Navigation from "./common/navigation";
import React, { useState } from 'react';
import {postTenent } from './api/superAdmin'

export default function TenentUser() {
    
const [formData, setFormData] = useState<{
  email: string;
  password: string;
}>({
  email: '',
  password: '',
});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await postTenent(formData);
    console.log('Form submitted with data:', formData);
   
  };
 const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>
): void => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

    return (

        <div className="bg-gray-100">
            <div className="flex h-screen bg-gray-200">
                {/* Sidebar */}
                <Navigation />


                <div className="flex-1 flex flex-col overflow-hidden">

                    <header className="flex justify-between items-center p-6 bg-white border-b-2 border-gray-200">
                        <h1 className="text-3xl font-bold text-gray-800">Add New User</h1>
                    </header>


                    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
                        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl mx-auto">
                           <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label
                                        htmlFor="email"
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                    >
                                        Tenent Name
                                    </label>
                                    <input
                                        type="text"
                                        id="text"
                                        name="tenentname"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Enter Tenent name"
                                        required
                                        onChange={handleChange}

                                    />                        </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="username"
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                    >
                                        User Name
                                    </label>
                                    <input type="email" id="email"
                                     name="username"
                                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                       required
                                       onChange={handleChange}
                                        placeholder="Enter user's email" />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="password"
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                    >
                                        Password
                                    </label>
                                    <input type="password" id="password" 
                                    name="password"
                                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                      required
                                      onChange={handleChange}s
                                       placeholder="Enter password" />
                                </div>
                               
                                <div className="flex items-center justify-end">
                                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                        Add User
                                    </button>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            </div>
        </div>

    )
}