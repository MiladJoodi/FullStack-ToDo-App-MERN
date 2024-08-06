import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
    return (
        <div className="min-h-screen grid place-items-center">
            <button className="bg-white px-8 py-4 flex gap-2 items-center"
             onClick={()=> signIn("google")}
             >
                <FcGoogle size={30} />
                Sign In with Google
            </button>
        </div>
    );
}

export default Login;