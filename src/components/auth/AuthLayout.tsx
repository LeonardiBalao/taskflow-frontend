import { type FC } from "react";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {children}
                {/* Footer */}
                <div className="mt-8 text-center text-xs text-gray-500">
                    <p>
                        By continuing, you agree to our{" "}
                        <Link to="/terms" className="hover:text-gray-700 hover:underline">
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link to="/privacy" className="hover:text-gray-700 hover:underline">
                            Privacy Policy
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
