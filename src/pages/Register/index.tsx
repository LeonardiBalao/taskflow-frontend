import { type FC } from "react";
import { AuthLayout, RegisterForm } from "../../components/auth";

const Register: FC = () => {
  return (
    <AuthLayout subtitle="Create your account and start organizing your life.">
      <RegisterForm />
      
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

export default Register;
