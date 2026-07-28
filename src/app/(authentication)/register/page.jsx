
export const metadata = {
    title: "Create Account || SparkNest",
    description: "Join SparkNest and turn your startup idea into something people can see, discuss, and help you shape.",
};

import RegisterForm from "@/components/RegisterForm";

const RegisterPage = () => {
 
    return (
        <div className='min-h-screen w-11/12 max-w-7xl mx-auto py-30'>
            <h2 className='text-center text-2xl md:text-3xl font-semibold tracking-wide'>Let's build your nest</h2>
            <p className='max-w-sm mx-auto text-center text-sm  text-[#6C696D] mt-1'>Share your idea. Get real feedback. Start today.</p>
            <RegisterForm/>
        </div>
    )
};


export default RegisterPage;