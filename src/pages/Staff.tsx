import {DashboardHeader} from "../components/DashboardHeader.tsx";
import {NavigationBar} from "../components/NavigationBar.tsx";

import {StaffForm} from "../components/StaffForm.tsx";


export function Staff() {
    return (
        <div className="min-h-screen bg-gray-100">
            <DashboardHeader/>

            <div className="flex justify-center items-center pt-10">
                <NavigationBar/>
            </div>

            <div className="flex flex-col justify-center items-center pt-10 md:pl-20 mx-auto">

                <StaffForm/>


            </div>

        </div>
    )
}