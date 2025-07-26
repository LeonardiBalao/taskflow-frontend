import { type FC } from "react";
import { Link } from "react-router-dom";
import { Mail, User, UserPlus } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import FormField from "./FormField";
import PasswordInput from "./PasswordInput";
import SocialLogin from "./SocialLogin";
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
          Join my app and check it out!
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
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
          {/* Email Field */}
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

          {/* Password Field */}
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

          {/* Confirm Password Field */}
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

          {/* Terms and Newsletter */}
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <input
                id="agreeToTerms"
                name="agreeToTerms"
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
                required
              />
              <Label htmlFor="agreeToTerms" className="text-sm text-gray-600 leading-relaxed">
                I agree to the{" "}
                <Link to="/terms" className="text-blue-600 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>
              </Label>
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
              <Label htmlFor="subscribeNewsletter" className="text-sm text-gray-600">
                Subscribe to our newsletter for productivity tips
              </Label>
            </div>
          </div>

          {/* Submit Button */}
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

        <SocialLogin type="register" />

        {/* Sign In Link */}
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

        {/* Benefits Badge */}
        <div className="text-center">
          <Badge variant="secondary" className="text-xs">
            ✨ Start your free 14-day trial immediately
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
