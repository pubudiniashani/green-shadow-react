import {DashboardHeader} from "../components/DashboardHeader.tsx";
import {NavigationBar} from "../components/NavigationBar.tsx";

export function Field() {
    return (
        <div className="min-h-screen bg-gray-100">
            <DashboardHeader/>

            <div className="flex justify-center items-center pt-10">
                <NavigationBar/>
            </div>

            <div className="flex justify-center items-center pt-10 md:pl-20 mx-auto">
                <h1>Hello</h1>
            </div>

        </div>
    );
}
