
import {DashboardHeader} from "../components/DashboardHeader.tsx";
import {NavigationBar} from "../components/NavigationBar.tsx";
import { Card } from "../components/Card";

export function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-100">
            <DashboardHeader/>

            <div className="flex justify-center items-center pt-10">
                <NavigationBar/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 pt-20">
                <Card
                    image="assets/background.jpg"
                    title="Crops"
                    text="The farm boasts a wide variety of crops, ranging from grains and vegetables to fruits."
                />
                <Card
                    image="assets/background.jpg"
                    title="Crops"
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