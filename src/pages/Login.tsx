import {Header} from "../components/Header.tsx";
import {LoginForm} from "../components/LoginForm.tsx";

export function LoginPage() {

    return (
        <div className="min-h-screen bg-gray-100">
            <Header />

            <div className="flex justify-center items-center pt-10">
                <LoginForm />
            </div>
        </div>
    );

}