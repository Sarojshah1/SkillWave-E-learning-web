import React from 'react';
import background from "../../../assets/background.png";

const Header = () => {
    return (
        <div className="bg-hero-pattern bg-cover bg-center h-screen flex items-center justify-center px-8">
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
                <div className="md:w-1/2 text-center md:text-left text-white">
                    <h1 className="text-primary text-5xl font-bold mb-4">
                        <span className="text-orange">Studying</span> Online is now much
                        easier
                    </h1>
                    <p className="text-lg mb-8 text-primary">
                        SkillWave is an interesting platform that will teach you in a more interactive way.
                    </p>
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                        <a
                            href="#join"
                            className="bg-primary text-white py-3 px-6 rounded-full shadow-lg hover:bg-secondary hover:shadow-xl transition-transform transform hover:scale-105 duration-300 ease-in-out"
                        >
                            Join for Free
                        </a>
                        <a
                            href="#how-it-works"
                            className="bg-transparent border-2 border-white text-primary py-3 px-6 rounded-full shadow-lg hover:bg-secondary hover:border-secondary transition-transform transform hover:scale-105 duration-300 ease-in-out"
                        >
                            Watch How It Works
                        </a>
                    </div>
                </div>
                <div className="md:w-1/2 mb-4 md:mb-0">
                    <img
                        src={background}
                        alt="Learning Illustration"
                        className="w-2/4 md:w-3/4 h-auto rounded-lg object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
