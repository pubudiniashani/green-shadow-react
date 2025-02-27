import {DashboardHeader} from "../components/DashboardHeader.tsx";
import {NavigationBar} from "../components/NavigationBar.tsx";
import {CardForm} from "../components/CardForm.tsx";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addField} from "../reducers/FieldSlice.ts";


export function Field() {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [extentSize, setExtentSize] = useState(0);

    const fields = useSelector(state => state.field.field); // Correct state path


    const add = () => {
        console.log("Button clicked!");
        const newField = {
            name,
            location,
            extentSize
        };

        // Dispatch the action to add the field
        dispatch(addField(newField));

    };

    return (
        <div className="min-h-screen bg-gray-100">
            <DashboardHeader/>

            <div className="flex justify-center items-center pt-10">
                <NavigationBar/>
            </div>

            <div className="flex flex-col justify-center items-center pt-10 md:pl-20 mx-auto">
                <CardForm/>

                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <button
                        type="submit"
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={add}
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

            <div className="mt-10 px-10 flex justify-center">
                <div className="overflow-x-auto w-[60%]"> {/* Adjust width as needed */}
                    <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-blue-300 text-black">
                        <tr>
                            <th className="py-2 px-4 text-left">Name</th>
                            <th className="py-2 px-4 text-left">Location</th>
                            <th className="py-2 px-4 text-left">Extent Size</th>
                        </tr>
                        </thead>
                        <tbody>
                        {fields.map((field, index) => (
                            <tr key={index} className="border-b hover:bg-gray-100">
                                <td className="py-2 px-4">{field.name}</td>
                                <td className="py-2 px-4">{field.location}</td>
                                <td className="py-2 px-4">{field.extentSize}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}
