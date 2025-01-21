import "../assets/styles/CardForm.css"

export function CardForm() {
        return (
            <div className="container mx-auto mt-8">
                <div className="bg-gray-100 max-w-lg mx-auto rounded-lg shadow-lg p-6">
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                                    Name
                                </label>
                                <input type="text" id="name"
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="location" className="block text-gray-700 font-medium mb-1">
                                    Location
                                </label>
                                <input type="text" id="location"
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="extentSize" className="block text-gray-700 font-medium mb-1">
                                    Extent Size
                                </label>
                                <input type="text" id="extentSize"
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="image1" className="block text-gray-700 font-medium mb-1">
                                    Image 1
                                </label>
                                <input type="file" id="image1" accept="image/*"
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="image2" className="block text-gray-700 font-medium mb-1">
                                Image 2
                            </label>
                            <input type="file" id="image2" accept="image/*"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }

