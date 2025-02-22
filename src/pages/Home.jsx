import { Link } from "react-router";
import { useAuth } from "../provider/AuthProvider";
import homebg from "../assets/home-bg.png";

const Home = () => {
    const { user } = useAuth();
    
    return (
        <div 
            className="relative min-h-screen flex items-center justify-center p-6 transition-all duration-500 ease-in-out bg-cover bg-center"
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${homebg})` }}
        >
            {/* Content on top of the overlay */}
            <div className="relative z-10 text-center px-6 max-w-3xl space-y-6">
                <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
                Manage Smarter, Accomplish More
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                Streamline your tasks with our intelligent management system and enhance your productivity with ease.
                </p>
                
                <div className="flex justify-center mt-6">
                    {user ? (
                        <Link
                            to="/dashboard"
                            className="px-6 py-6 rounded-full bg-purple-700 hover:bg-green-500 transition text-white text-xl font-bold shadow-lg transform hover:scale-105"
                        >
                            Get Started
                        </Link>
                    ) : (
                        <Link
                            to="/login"
                            className="px-6 py-6 rounded-full bg-purple-700 hover:bg-green-500 transition text-white text-xl font-bold shadow-lg transform hover:scale-105"
                        >
                            Get Started
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;


