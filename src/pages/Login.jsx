import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { useAuth } from "../provider/AuthProvider";

const Login = () => {
  const { signInWithGoogle } = useAuth(); // Get function from context
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate("/dashboard"); // Navigate to dashboard after login
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center">TaskGo...</h2>
        <p className="text-center text-gray-400"> Login now</p>
        
        <button 
          onClick={handleLogin} 
          className="flex items-center justify-center w-full p-3 space-x-3 border rounded-lg transition bg-gray-700 hover:bg-gray-600"
        >
          <FcGoogle size={24} />
          <span>Sign in with Google</span>
        </button>

        <p className="text-center text-gray-400">
          New here? 
          <Link to="/register" className="text-indigo-400 hover:underline"> Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
