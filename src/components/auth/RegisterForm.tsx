import { type FC } from "react";
import { Link } from "react-router-dom";
import { Mail, User, UserPlus } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import FormField from "./FormField";
import PasswordInput from "./PasswordInput";
import { useRegisterForm } from "../../hooks/auth/useRegisterForm";

const RegisterForm: FC = () => {
    const {
        formData,
        handleInputChange,
        handleSubmit,
        isValid,
        isLoading
    } = useRegisterForm();

    return (
        <Card className="border-0 shadow-xl">
            <CardHeader className="space-y-1 text-center">
                <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
                <CardDescription>
                    Welcome! Test my Task Management App!
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid gap-4">
                        <FormField
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John"
                            label="Name"
                            icon={User}
                            required
                        />
                    </div>

                    <FormField
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        label="Email Address"
                        icon={Mail}
                        required
                    />

                    <PasswordInput
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Create a strong password"
                        label="Password"
                        required
                        showRequirements
                    />

                    <PasswordInput
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirm your password"
                        label="Confirm Password"
                        required
                        confirmValue={formData.password}
                    />

                    <div className="space-y-3">
                        <div className="flex space-x-2 items-center">
                            <input
                                id="agreeToTerms"
                                name="agreeToTerms"
                                type="checkbox"
                                checked={formData.agreeToTerms}
                                onChange={handleInputChange}
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
                                required
                            />
                            <span className="flex text-xs text-gray-600 leading-relaxed">
                                I agree to the Terms of Service and Privacy Policy
                            </span>
                        </div>

                        <div className="flex items-center space-x-2">
                            <input
                                id="subscribeNewsletter"
                                name="subscribeNewsletter"
                                type="checkbox"
                                checked={formData.subscribeNewsletter}
                                onChange={handleInputChange}
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="flex text-xs text-gray-600 leading-relaxed">
                                Subscribe to our newsletter for productivity tips
                            </span>
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        size="lg"
                        disabled={!isValid || isLoading}
                    >
                        <UserPlus className="h-4 w-4 mr-2" />
                        {isLoading ? "Creating Account..." : "Create Account"}
                    </Button>
                </form>

                <div className="text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
                        >
                            Sign in here
                        </Link>
                    </p>
                </div>

                <div className="text-center">
                    <Badge variant="secondary" className="text-xs">
                        ✨ Use my app for free! No credit card required.
                    </Badge>
                </div>
            </CardContent>
        </Card>
    );
};

export default RegisterForm;
