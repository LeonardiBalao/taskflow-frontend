import { type FC, useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface PasswordInputProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  label: string;
  required?: boolean;
  showRequirements?: boolean;
  confirmValue?: string;
}

interface PasswordRequirement {
  text: string;
  met: boolean;
}

const PasswordInput: FC<PasswordInputProps> = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  label,
  required = false,
  showRequirements = false,
  confirmValue,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const passwordRequirements: PasswordRequirement[] = [
    { text: "At least 8 characters", met: value.length >= 8 },
    { text: "Contains uppercase letter", met: /[A-Z]/.test(value) },
    { text: "Contains lowercase letter", met: /[a-z]/.test(value) },
    { text: "Contains a number", met: /\d/.test(value) },
  ];

  const isConfirmPassword = name.includes('confirm') || name.includes('Confirm');
  const passwordsMatch = confirmValue !== undefined && value === confirmValue && value !== "";

  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-medium">
        <Lock className="h-4 w-4" />
        {label}
      </Label>
      <div className="relative">
        <Input
          id={id}
          name={name}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="pr-10"
          required={required}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Password Requirements */}
      {showRequirements && value && (
        <div className="mt-2 space-y-1">
          {passwordRequirements.map((req, index) => (
            <div key={index} className="flex items-center text-xs">
              <div
                className={`h-3 w-3 mr-2 rounded-full ${
                  req.met ? 'bg-green-600' : 'bg-gray-400'
                }`}
              />
              <span className={req.met ? 'text-green-600' : 'text-gray-500'}>
                {req.text}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Password Match Indicator */}
      {isConfirmPassword && confirmValue !== undefined && value && (
        <div className="flex items-center text-xs mt-1">
          <div
            className={`h-3 w-3 mr-2 rounded-full ${
              passwordsMatch ? 'bg-green-600' : 'bg-red-500'
            }`}
          />
          <span className={passwordsMatch ? 'text-green-600' : 'text-red-500'}>
            {passwordsMatch ? 'Passwords match' : 'Passwords do not match'}
          </span>
        </div>
      )}
    </div>
  );
};

export default PasswordInput;
