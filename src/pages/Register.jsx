import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

const Register = () => {
  const { signInWithGoogle } = useAuth(); // Get function from context
  const navigate = useNavigate();

  const handleGoogleRegister = async () => {
    try {
      await signInWithGoogle();
      navigate("/dashboard"); // Navigate to dashboard after login
    } catch (error) {
      console.error("Error during Google registration:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center">TaskGo Register</h2>
        <p className="text-center text-gray-400">Sign up to organize and track your tasks.</p>

        <button 
          onClick={handleGoogleRegister} 
          className="flex items-center justify-center w-full p-3 space-x-3 border rounded-lg transition bg-gray-700 hover:bg-gray-600"
        >
          <FcGoogle size={24} />
          <span>Register with Google</span>
        </button>

        <p className="text-center text-gray-400">
          Already have an account? 
          <span onClick={() => navigate("/login")} className="text-indigo-400 hover:underline cursor-pointer"> Login here</span>
        </p>
      </div>
    </div>
  );
};

export default Register;

