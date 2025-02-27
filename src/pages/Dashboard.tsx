
import {DashboardHeader} from "../components/DashboardHeader.tsx";
import {NavigationBar} from "../components/NavigationBar.tsx";
import { Card } from "../components/Card";

export function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-100">
            <DashboardHeader/>

            <div className="flex justify-center items-center pt-10 ml-[70px]">
                <NavigationBar/>
            </div>

            <div className="flex justify-center items-center pt-10 md:pl-20 mx-auto  ml-[150px]">
                <Card
                    title="Fields"
                    text="The farm boasts a wide variety of crops, ranging from grains and vegetables to fruits."
                />
                <Card
                    title="Staff"
                    text="The farm boasts a wide variety of crops, ranging from grains and vegetables to fruits."
                />
                <Card
                    title="Crops"
                    text="The farm boasts a wide variety of crops, ranging from grains and vegetables to fruits."
                />
            </div>

            <div className="flex justify-center items-center pt-10 mx-auto gap-8 flex-wrap">
                {/* First Bar Graph */}
                <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                        Crop Yield Over Time
                    </h3>
                    <img
                        src="../assets/field.jpg"
                        alt="Crop Yield Bar Graph"
                        className="w-full"
                    />
                </div>

            </div>


            </div>


            );
            }