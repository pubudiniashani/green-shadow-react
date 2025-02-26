import {DashboardHeader} from "../components/DashboardHeader.tsx";
import {NavigationBar} from "../components/NavigationBar.tsx";
import {CardForm} from "../components/CardForm.tsx";
import {Button} from "../components/Button.tsx";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {addField} from "../reducers/FieldSlice.ts";


export function Field() {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [extentSize, setExtentSize] = useState(0);
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");


    const add = () => {
        console.log("Button clicked!");
        const newField = {
            name,
            location,
            extentSize,
            image1,
            image2,
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
                <Button
                    text="Add"
                    onClick={add}
                    styles="bg-blue-400 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 active:bg-blue-700
                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 mt-4"

                    setName={setName}
                    setLocation={setLocation}
                    setExtentSize={setExtentSize}
                    setImage1={setImage1}
                    setImage2={setImage2}
                />
            </div>


        </div>
    );
}
