import {Header} from "../components/Header.tsx";
import {SignupForm} from "../components/SignupForm.tsx";

export function SignupPage(){
    console.log("Rendering SignupPage...");

    return (
        <div className="min-h-screen bg-gray-100">
            <Header/>
            <div className="flex justify-center items-center pt-10">
                <SignupForm/>
            </div>
        </div>
    );
}