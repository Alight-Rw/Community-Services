import React from "react";
import { FaShieldAlt, FaBell, FaLock } from "react-icons/fa";

const SettingsCard = () => {
    return (
        <div className=" bg-gray-100 py-2 px-4 sm:px-6 lg:px-8   " >



            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


                <div className="bg-white rounded-2xl shadow-sm p-6 border">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                            <FaShieldAlt className="text-secondary text-xl" />
                        </div>
                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold">
                                Security
                            </h2>
                            <p className="text-gray-500 text-sm">
                                Password and security settings
                            </p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <button className="w-full flex items-center gap-2 border rounded-lg px-4 py-3 hover:bg-gray-50 transition">
                            <FaLock className="text-gray-500" />
                            Change Password
                        </button>

                        <button className="w-full flex items-center gap-2 border rounded-lg px-4 py-3 hover:bg-gray-50 transition">
                            <FaShieldAlt className="text-gray-500" />
                            Two-Factor Authentication
                        </button>
                    </div>
                </div>


                <div className="bg-white rounded-2xl shadow-sm p-6 border">
                    <div className="flex items-center gap-3 mb-4 mr-[300px]">
                        <div className="bg-blue-100 p-3 rounded-full">
                            <FaBell className="text-secondary text-xl " />
                        </div>
                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold">
                                Notifications
                            </h2>
                            <p className="text-gray-500 text-sm">
                                Email and notification preferences
                            </p>
                        </div>
                    </div>

                    <div className="space-y-3 px-4">
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                defaultChecked
                                className="accent-secondary w-4 h-4"
                            />
                            Email notifications
                        </label>

                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                defaultChecked
                                className="accent-secondary w-4 h-4"
                            />
                            SMS notifications
                        </label>

                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className="accent-secondary w-4 h-4"
                            />
                            Marketing emails
                        </label>
                    </div>
                </div>
            </div>


            <div className="mt-10 border-2 border-red-400 bg-red-50 rounded-2xl p-6">
                <h2 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                    Danger Zone
                </h2>
                <p className="text-red-500 text-sm sm:text-base mb-4">
                    These actions cannot be undone. Please proceed with caution.
                </p>

                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition w-full sm:w-auto">
                    Delete Account
                </button>
            </div>


        </div>
    );
};

export default SettingsCard;
