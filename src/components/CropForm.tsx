import "../assets/styles/CardForm.css"

export function CropForm() {
    return (
        <div className="container mx-auto mt-8 p-4">
            <div className="bg-white rounded-lg shadow-md max-w-xl mx-auto p-6 border border-gray-300">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                    Crop Details
                </h2>
                <form className="space-y-4">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                               Common Name</label>
                            <input type="text" id="firstName"
                                   className="mt-1 block w-full border border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                               Specific Name</label>
                            <input type="text" id="lastName"
                                   className="mt-1 block w-full border border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                        </div>

                        <div>
                            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Category</label>
                            <input type="text" id="gender"
                                   className="mt-1 block w-full border border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Season</label>
                            <input type="email" id="email"
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
    );
}

