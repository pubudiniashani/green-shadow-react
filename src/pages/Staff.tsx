import {DashboardHeader} from "../components/DashboardHeader.tsx";
import {NavigationBar} from "../components/NavigationBar.tsx";



export function Staff() {
    return (
        <div className="min-h-screen bg-gray-100">
            <DashboardHeader/>

            <div className="flex justify-center items-center pt-10">
                <NavigationBar/>
            </div>

            <div className="flex flex-col justify-center items-center pt-10 md:pl-20 mx-auto">

                <div className="container mx-auto mt-8 p-4">
                    <div className="bg-white rounded-lg shadow-md max-w-xl mx-auto p-6 border border-gray-300">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                            Staff Details
                        </h2>
                        <form className="space-y-4">

                            {/* Grid for Two Columns */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First
                                        Name</label>
                                    <input type="text" id="firstName"
                                           className="mt-1 block w-full border border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last
                                        Name</label>
                                    <input type="text" id="lastName"
                                           className="mt-1 block w-full border border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                                </div>

                                <div>
                                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                                    <input type="text" id="gender"
                                           className="mt-1 block w-full border border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" id="email"
                                           className="mt-1 block w-full border border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                                </div>

                                <div>
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                                    <input type="text" id="address"
                                           className="mt-1 block w-full border border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                                </div>
                                <div>
                                    <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact</label>
                                    <input type="text" id="contact"
                                           className="mt-1 block w-full border border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                                </div>

                                <div>
                                    <label htmlFor="fieldId" className="block text-sm font-medium text-gray-700">Field
                                        ID</label>
                                    <select
                                        id="fieldId"
                                        className="mt-1 block w-full border border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    >
                                        <option value="">Select a Field</option>
                                        <option value="1">Field 1</option>
                                        <option value="2">Field 2</option>
                                        <option value="3">Field 3</option>
                                        {/* Add more options as needed */}
                                    </select>
                                </div>
                            </div>



                        </form>
                    </div>
                </div>


                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <button
                        type="submit"
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
                    >
                        Update
                    </button>
                    <button
                        type="button"
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
                    >
                        Delete
                    </button>
                    <button
                        type="button"
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
                    >
                        View
                    </button>
                </div>

            </div>

        </div>
    )
}