
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
                    image="background.jpg"
                    title="Fields"
                    text="The farm boasts a wide variety of crops, ranging from grains and vegetables to fruits."
                />
                <Card
                    image="assets/background.jpg"
                    title="Staff"
                    text="The farm boasts a wide variety of crops, ranging from grains and vegetables to fruits."
                />
                <Card
                    image="assets/background.jpg"
                    title="Crops"
                    text="The farm boasts a wide variety of crops, ranging from grains and vegetables to fruits."
                />
            </div>
        </div>

    );
}