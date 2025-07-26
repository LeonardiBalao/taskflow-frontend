import { useState } from "react";

interface RegisterFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    agreeToTerms: boolean;
    subscribeNewsletter: boolean;
}

interface UseRegisterForm {
    formData: RegisterFormData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;
    isValid: boolean;
    isLoading: boolean;
    passwordsMatch: boolean;
    passwordRequirementsMet: boolean;
}

export const useRegisterForm = (): UseRegisterForm => {
    const [formData, setFormData] = useState<RegisterFormData>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false,
        subscribeNewsletter: false,
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
            if (formData.password !== formData.confirmPassword) {
                throw new Error("Passwords do not match");
            }

            const postRequest = await fetch('http://localhost:3000/api/auth/register', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: formData.name, email: formData.email, password: formData.password }),
            });

            if (!postRequest.ok) {
                throw new Error('Registration failed');
            }
            const json = await postRequest.json();
            console.log('Registration successful:', json);

        } catch (error) {
            console.error('Registration failed:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const passwordRequirementsMet =
        formData.password.length >= 8 &&
        /[A-Z]/.test(formData.password) &&
        /[a-z]/.test(formData.password) &&
        /\d/.test(formData.password);

    const passwordsMatch =
        formData.password === formData.confirmPassword &&
        formData.confirmPassword !== "";

    const isValid =
        formData.name.trim() !== "" &&
        formData.email.trim() !== "" &&
        passwordRequirementsMet &&
        passwordsMatch &&
        formData.agreeToTerms;

    return {
        formData,
        handleInputChange,
        handleSubmit,
        isValid,
        isLoading,
        passwordsMatch,
        passwordRequirementsMet,
    };
};
