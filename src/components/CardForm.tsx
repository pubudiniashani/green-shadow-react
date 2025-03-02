import "../assets/styles/CardForm.css"

export function CardForm() {
    return (
        <div className="container mx-auto mt-8 p-4">
            <div className="bg-white rounded-lg shadow-md max-w-xl mx-auto p-6 border border-gray-300">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                    Field Details
                </h2>
                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="location"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Location
                            </label>
                            <input
                                type="text"
                                id="location"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="extentSize"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Extent Size
                            </label>
                            <input
                                type="text"
                                id="extentSize"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                    </div>

                </form>
            </div>
        </div>
    );
}

