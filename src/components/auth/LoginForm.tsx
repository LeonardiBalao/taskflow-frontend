import { type FC } from "react";
import { Link } from "react-router-dom";
import { Mail, LogIn } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import FormField from "./FormField";
import PasswordInput from "./PasswordInput";
import SocialLogin from "./SocialLogin";
import { useLoginForm } from "../../hooks/auth/useLoginForm";

const LoginForm: FC = () => {
  const { formData, handleInputChange, handleSubmit, isValid, isLoading } = useLoginForm();

  return (
    <Card className="border-0 shadow-xl">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">

          <FormField
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            label="Email Address"
            icon={Mail}
            required
          />

          <PasswordInput
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            label="Password"
            required
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className="h-4 w-4 text-violet-600 border-gray-300 rounded focus:ring-violet-500"
              />
              <Label htmlFor="rememberMe" className="text-sm text-gray-600">
                Remember me
              </Label>
            </div>
            <Link 
              to="/forgot-password" 
              className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            size="lg"
            disabled={!isValid || isLoading}
          >
            <LogIn className="h-4 w-4 mr-2" />
            {isLoading ? "Signing In..." : "Sign In"}
          </Button>
        </form>

        <SocialLogin type="login" />

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link 
              to="/register" 
              className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
            >
              Sign up for free
            </Link>
          </p>
        </div>

        <div className="text-center">
          <Badge variant="secondary" className="text-xs">
            🎉 Free 14-day trial • No credit card required
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
