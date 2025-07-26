import { type FC } from "react";
import { AuthLayout, LoginForm } from "../../components/auth";

const Login: FC = () => {
  return (
    <AuthLayout subtitle="Welcome back! Please sign in to continue.">
      <LoginForm />
      
      {/* Features List */}
      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500 mb-2">What you get with Taskflow:</p>
        <div className="flex justify-center space-x-4 text-xs text-gray-600">
          <span>✓ Unlimited tasks</span>
          <span>✓ Team collaboration</span>
          <span>✓ Calendar sync</span>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
