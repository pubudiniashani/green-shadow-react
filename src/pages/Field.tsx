import {DashboardHeader} from "../components/DashboardHeader.tsx";
import {NavigationBar} from "../components/NavigationBar.tsx";
import {CardForm} from "../components/CardForm.tsx";
import {Button} from "../components/Button.tsx";

export function Field() {
    const handleButtonClick = () => {
        console.log("Button clicked!");
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <DashboardHeader/>

            <div className="flex justify-center items-center pt-10">
                <NavigationBar/>
            </div>

            <div className="flex justify-center items-center pt-10 md:pl-20 mx-auto">
               <CardForm/>
                <Button text="Submit" onClick={handleButtonClick}/>
            </div>



        </div>
    );
}
