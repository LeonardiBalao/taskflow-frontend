import { useState } from "react";

interface LoginFormData {
    email: string;
    password: string;
    rememberMe?: boolean;
}

interface UseLoginForm {
    formData: LoginFormData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;
    isValid: boolean;
    isLoading: boolean;
}

export const useLoginForm = (): UseLoginForm => {
    const [formData, setFormData] = useState<LoginFormData>({
        email: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isValid) return;

        setIsLoading(true);
        try {
            console.log('Login attempted with:', formData);

            const postRequest = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            console.log('Response status:', postRequest.status);
            if (!postRequest.ok) {
                throw new Error('Login failed');

            }
            const json = await postRequest.json(); // On success, redirect or update app state
            console.log('Login successful:', json);

        } catch (error) {
            console.error('Login failed:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const isValid = formData.email.trim() !== "" && formData.password.length >= 6;

    return {
        formData,
        handleInputChange,
        handleSubmit,
        isValid,
        isLoading,
    };
};
