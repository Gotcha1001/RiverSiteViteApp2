import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory for Vite
import { auth, createUserWithEmailAndPassword } from '../firebaseconfig/firebase';
import { updateProfile, sendEmailVerification } from 'firebase/auth';
import { FiEye, FiEyeOff } from 'react-icons/fi'; // Import eye icons

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle confirm password visibility
    const navigate = useNavigate(); // Use useNavigate instead of useHistory for Vite

    const handleRegister = async (event) => {
        event.preventDefault();
        if (!email || !password || !name || !confirmPassword) {
            alert('Please enter all fields');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await updateProfile(user, {
                displayName: name,
            });

            await sendEmailVerification(user); // Send email verification

            setEmail(''); // Clear email field
            setPassword(''); // Clear password field
            setConfirmPassword(''); // Clear confirm password field
            setName(''); // Clear name field
            setErrorMessage(''); // Clear error message

            alert('Registered successfully');
            navigate('/'); // Redirect to home page after successful registration
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Email is already registered');
            } else {
                setErrorMessage('Error registering user: ' + error.message);
            }
        }
    };

    useEffect(() => {
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setName('');
    }, []);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-black via-teal-500 to-purple-900">
            <div className="register-form p-8 rounded-lg shadow-lg text-center max-w-md w-full bg-black">
                <h2 className="mb-6 text-2xl font-bold text-white">Register</h2>
                {errorMessage && <p className="mb-4 text-sm text-red-500">{errorMessage}</p>}
                <form onSubmit={handleRegister} autoComplete="off">
                    <div className="mb-4 text-left">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="new-name" // Use a unique name attribute
                            className="w-full p-2 border border-gray-300 rounded-md"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            autoComplete="off" // Disable browser autocomplete
                        />
                    </div>
                    <div className="mb-4 text-left">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="new-email" // Use a unique name attribute
                            className="w-full p-2 border border-gray-300 rounded-md"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete="off" // Disable browser autocomplete
                        />
                    </div>
                    <div className="mb-4 text-left">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="new-password" // Use a unique name attribute
                                className="w-full p-2 border border-gray-300 rounded-md pr-10"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                autoComplete="off" // Disable browser autocomplete
                            />
                            <button
                                type="button"
                                className="absolute top-2 right-2"
                                onClick={toggleShowPassword}
                            >
                                {showPassword ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>
                    </div>
                    <div className="mb-4 text-left">
                        <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-white">Confirm Password</label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                id="confirm-password"
                                name="confirm-password" // Use a unique name attribute
                                className="w-full p-2 border border-gray-300 rounded-md pr-10"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                autoComplete="off" // Disable browser autocomplete
                            />
                            <button
                                type="button"
                                className="absolute top-2 right-2"
                                onClick={toggleShowConfirmPassword}
                            >
                                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-gray-800 text-white rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-gray-900"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}
