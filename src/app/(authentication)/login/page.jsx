import LoginForm from "@/components/LoginForm";
import { Suspense } from "react";

export const metadata = {
    title: "Log In || SparkNest",
    description: "Log in to SparkNest to keep building on the ideas you've started.",
};

const LoginPage = () => {
    return (
        <div className='min-h-screen w-11/12 max-w-7xl mx-auto py-30'>
            <h2 className='text-center text-2xl md:text-3xl font-semibold tracking-wide'>Welcome Back</h2>
            <p className='max-w-sm mx-auto text-center text-sm  text-[#6C696D] mt-1'>Your ideas missed you.</p>
            <Suspense fallback={<h2>Loading...</h2>}>
                <LoginForm/>
            </Suspense>
        </div>
    );
};

export default LoginPage;