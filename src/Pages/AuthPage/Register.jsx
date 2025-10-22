// import React, { useContext, useState } from "react";

// import { Link, useNavigate, useLocation } from "react-router-dom";
// import Lottie from "lottie-react";
// import login from "../../assets/register.json";
// import { MdHelpCenter } from "react-icons/md";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import { AuthContext } from "../../Provider/AuthProvider";
// import { toast } from "react-toastify";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import app from "../../Firebase/firebase.config";

// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// const Register = () => {
//     const { createUser, setUser } = useContext(AuthContext);
//     const [loading, setLoading] = useState(false);
//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//     const navigate = useNavigate();
//     const location = useLocation();
//     const from = location.state?.from?.pathname || "/";

//     const inputStyle =
//         "w-full px-6 py-4 border text-lg rounded-md focus:outline-none " +
//         "focus:ring-2 text-orange-500 border-orange-400 focus:ring-orange-600 " +
//         "bg-gray-800 placeholder-orange-300";

//     const validatePassword = (password) => {
//         const hasUppercase = /[A-Z]/.test(password);
//         const hasLowercase = /[a-z]/.test(password);
//         const isValidLength = password.length >= 6;

//         if (!hasUppercase) {
//             toast.error("Password must include at least one uppercase letter.");
//             return false;
//         }
//         if (!hasLowercase) {
//             toast.error("Password must include at least one lowercase letter.");
//             return false;
//         }
//         if (!isValidLength) {
//             toast.error("Password must be at least 6 characters long.");
//             return false;
//         }

//         return true;
//     };

//     const handleRegister = (e) => {
//         e.preventDefault();
//         const form = e.target;
//         const username = form.username.value;
//         const email = form.email.value;
//         const password = form.password.value;
//         const confirmPassword = form.confirmPassword.value;
//         const photoURL = form.photoURL.value;

//         if (password !== confirmPassword) {
//             toast.error("Passwords do not match!");
//             return;
//         }

//         if (!validatePassword(password)) {
//             return;
//         }

//         setLoading(true);
//         createUser(email, password)
//             .then((result) => {
//                 const user = result.user;
//                 setUser(user);
//                 toast.success("Registration successful!");
//                 form.reset();
//                 navigate(from, { replace: true });
//             })
//             .catch((error) => {
//                 toast.error(error.message);
//             })
//             .finally(() => setLoading(false));
//     };

//     const handleGoogleLogin = () => {
//         setLoading(true);
//         signInWithPopup(auth, provider)
//             .then((result) => {
//                 const user = result.user;
//                 setUser(user);
//                 toast.success("Google sign-in successful!");
//                 navigate(from, { replace: true });
//             })
//             .catch((error) => {
//                 toast.error(error.message);
//             })
//             .finally(() => setLoading(false));
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-300 px-4 p-6">
//             <div className="bg-gray-800 p-6 sm:p-10 rounded-2xl shadow-lg w-full max-w-6xl text-orange-500">
//                 <h2 className="text-4xl font-bold text-center mb-10 text-orange-400">
//                     Create a New Account
//                 </h2>
//                 <div className="flex flex-col md:flex-row items-center gap-10">
//                     <div className="w-full md:w-1/2">
//                         <Lottie animationData={login} loop={true} />
//                     </div>

//                     <form onSubmit={handleRegister} className="w-full md:w-1/2 space-y-4">
//                         <div>
//                             <label className="block mb-2 text-lg text-orange-400">Username</label>
//                             <input type="text" name="username" placeholder="Enter your username" className={inputStyle} required />
//                         </div>
//                         <div>
//                             <label className="block mb-2 text-lg text-orange-400">Email</label>
//                             <input type="email" name="email" placeholder="Enter your email" className={inputStyle} required />
//                         </div>
//                         <div>
//                             <label className="block mb-2 text-lg text-orange-400">
//                                 <div className="flex items-center gap-2">
//                                     <span>Photo URL</span>
//                                     <Link to="/what-is-photoURL">
//                                         <MdHelpCenter size={20} className="text-orange-400" />
//                                     </Link>
//                                 </div>
//                             </label>
//                             <input type="text" name="photoURL" placeholder="Enter photo URL" className={inputStyle} />
//                         </div>
//                         <div className="relative">
//                             <label className="block mb-2 text-lg text-orange-400">Password</label>
//                             <input
//                                 type={showPassword ? "text" : "password"}
//                                 name="password"
//                                 placeholder="Create a password"
//                                 className={`${inputStyle} pr-12`}
//                                 required
//                             />
//                             <div
//                                 className="absolute right-5 top-[60px] text-orange-400 cursor-pointer"
//                                 onClick={() => setShowPassword(!showPassword)}
//                             >
//                                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//                             </div>
//                         </div>
//                         <div className="relative">
//                             <label className="block mb-2 text-lg text-orange-400">Confirm Password</label>
//                             <input
//                                 type={showConfirmPassword ? "text" : "password"}
//                                 name="confirmPassword"
//                                 placeholder="Confirm your password"
//                                 className={`${inputStyle} pr-12`}
//                                 required
//                             />
//                             <div
//                                 className="absolute right-5 top-[60px] text-orange-400 cursor-pointer"
//                                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                             >
//                                 {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//                             </div>
//                         </div>
//                         <button
//                             type="submit"
//                             disabled={loading}
//                             className={`w-full py-4 rounded-md text-xl font-semibold transition-colors text-white ${loading ? " bg-orange-300 cursor-not-allowed" : " btn py-6 bg-orange-500 hover:bg-orange-600"
//                                 }`}
//                         >
//                             Sign Up
//                         </button>

//                         <div className="flex items-center gap-4 mt-2">
//                             <hr className="flex-grow border-t border-orange-300" />
//                             <p className="text-orange-300 text-sm">or</p>
//                             <hr className="flex-grow border-t border-orange-300" />
//                         </div>

//                         <div className="mt-4 flex items-center justify-center">
//                             <button
//                                 type="button"
//                                 onClick={handleGoogleLogin}
//                                 className="flex items-center gap-2 bg-white border border-orange-300 px-5 py-6 rounded-md shadow-md hover:shadow-lg transition-shadow text-lg w-full text-black btn  font-semibold"
//                                 disabled={loading}
//                             >
//                                 <FcGoogle className="text-2xl" />
//                                 <span>Continue with Google</span>
//                             </button>
//                         </div>
//                     </form>
//                 </div>

//                 <p className="text-sm text-center text-orange-300 mt-6">
//                     Already have an account?{" "}
//                     <Link to="/login" className="text-orange-500 font-semibold hover:underline">
//                         Login
//                     </Link>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Register;


import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import loginAnim from "../../assets/register.json";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { getAuth, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import app from "../../Firebase/firebase.config";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Register = () => {
    const { createUser, setUser } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [imageFile, setImageFile] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const imgbbApiKey = import.meta.env.VITE_IMGBB_API_KEY;

    const inputStyle =
        "w-full px-6 py-4 border rounded-md text-lg bg-gray-50 border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none placeholder:text-gray-400";

    const validatePassword = (password) => {
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const isValidLength = password.length >= 6;

        if (!hasUppercase) {
            toast.error("Password must include at least one uppercase letter.");
            return false;
        }
        if (!hasLowercase) {
            toast.error("Password must include at least one lowercase letter.");
            return false;
        }
        if (!isValidLength) {
            toast.error("Password must be at least 6 characters long.");
            return false;
        }
        return true;
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const username = form.username.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password !== confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        if (!validatePassword(password)) return;

        setLoading(true);
        let imageUrl = "";

        try {
            // 1️⃣ Upload image to ImgBB
            if (imageFile) {
                const formData = new FormData();
                formData.append("image", imageFile);

                const res = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, {
                    method: "POST",
                    body: formData,
                });
                const data = await res.json();
                imageUrl = data.data.display_url;
            }

            // 2️⃣ Create user in Firebase
            const result = await createUser(email, password);
            const user = result.user;

            // 3️⃣ Update profile
            await updateProfile(user, {
                displayName: username,
                photoURL: imageUrl,
            });

            setUser({ ...user, displayName: username, photoURL: imageUrl });
            toast.success("🎉 Registration successful!");
            navigate(from, { replace: true });
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = () => {
        setLoading(true);
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                toast.success("Google sign-in successful!");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                toast.error(error.message);
            })
            .finally(() => setLoading(false));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 flex items-center justify-center px-4 py-10">
            <div className="bg-white/70 backdrop-blur-md p-8 sm:p-10 rounded-2xl shadow-2xl w-full max-w-6xl">
                <h2 className="text-4xl font-bold text-center mb-10 text-orange-500">
                    Create Your Account
                </h2>

                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Lottie Animation */}
                    <div className="w-full md:w-1/2">
                        <Lottie animationData={loginAnim} loop={true} />
                    </div>

                    {/* Form */}
                    <form
                        onSubmit={handleRegister}
                        className="w-full md:w-1/2 bg-white/80 rounded-xl p-6 shadow-inner"
                    >
                        {/* Username */}
                        <div className="mb-5">
                            <label className="block mb-2 text-lg text-gray-600 font-semibold">
                                Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Enter your name"
                                className={inputStyle}
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-5">
                            <label className="block mb-2 text-lg text-gray-600 font-semibold">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className={inputStyle}
                                required
                            />
                        </div>

                        {/* Photo Upload */}
                        <div className="mb-5">
                            <label className="block mb-2 text-lg text-gray-600 font-semibold">
                                Upload Photo
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => setImageFile(e.target.files[0])}
                                className="file-input file-input-bordered w-full border-gray-300"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="relative mb-5">
                            <label className="block mb-2 text-lg text-gray-600 font-semibold">
                                Password
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Create password"
                                className={`${inputStyle} pr-10`}
                                required
                            />
                            <div
                                className="absolute right-4 top-[54px] text-gray-500 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div className="relative mb-5">
                            <label className="block mb-2 text-lg text-gray-600 font-semibold">
                                Confirm Password
                            </label>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                placeholder="Confirm password"
                                className={`${inputStyle} pr-10`}
                                required
                            />
                            <div
                                className="absolute right-4 top-[54px] text-gray-500 cursor-pointer"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-4 rounded-md text-xl font-semibold text-white transition-transform ${loading
                                ? "bg-orange-300 cursor-not-allowed"
                                : "bg-gradient-to-r from-orange-500 to-amber-400 hover:scale-105 hover:shadow-lg"
                                }`}
                        >
                            {loading ? "Creating Account..." : "Sign Up"}
                        </button>

                        {/* Divider */}
                        <div className="flex items-center gap-4 mt-6">
                            <hr className="flex-grow border-t border-gray-300" />
                            <p className="text-gray-400 text-sm">or</p>
                            <hr className="flex-grow border-t border-gray-300" />
                        </div>

                        {/* Google Sign In */}
                        <div className="mt-6 flex items-center justify-center">
                            <button
                                type="button"
                                onClick={handleGoogleLogin}
                                disabled={loading}
                                className="flex items-center justify-center w-full  gap-3  bg-white border border-gray-300 px-5 py-3 rounded-xl shadow hover:shadow-md transition text-lg font-medium"
                            >
                                <FcGoogle className="text-2xl" />
                                Continue with Google
                            </button>
                        </div>

                        {/* Redirect */}
                        <p className="text-center text-gray-600 mt-6">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="text-orange-500 font-semibold hover:underline"
                            >
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
