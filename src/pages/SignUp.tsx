import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { useAuth } from "../context/AuthContex";

export default function Signup() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!email.includes("@") || !email.includes(".")) {
      newErrors.email = "Please enter a valid email address";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    login(email, password);
    navigate("/");
  };

  return (
      <div>
        {Object.keys(errors).length > 0 && (
          <div className="mb-6 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
            <p className="text-sm text-destructive">
              Please fix the errors below to continue
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="username">
                <span className="flex items-center gap-1 text-sm font-medium text-secondary-foreground/80 mb-2">
                  Username
                </span>
              </label>
              <Input
                id="username"
                placeholder="johndoe"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  if (errors.username) setErrors({ ...errors, username: "" });
                }}
                required
                disabled={isLoading}
              />
              {errors.username && (
                <p className="text-sm text-destructive mt-1">
                  {errors.username}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email">
                <span className="flex items-center gap-1 text-sm font-medium text-secondary-foreground/80 mb-2">
                  Email Address
                </span>
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors({ ...errors, email: "" });
                }}
                required
                disabled={isLoading}
              />
              {errors.email && (
                <p className="text-sm text-destructive mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="password">
                <span className="flex items-center gap-1 text-sm font-medium text-secondary-foreground/80 mb-2">
                  Password
                </span>
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Create a strong password"
                value={password}
                onChange={(e) => {
                  const pwd = e.target.value;
                  setPassword(pwd);
                  if (errors.password) setErrors({ ...errors, password: "" });
                }}
                required
                disabled={isLoading}
              />

              {/* Password Strength Indicator */}
              <div className="my-2">
                <p className="text-[10.5px] text-muted-foreground mt-1">
                  Use 8+ characters with uppercase, numbers & symbols
                </p>
              </div>

              {errors.password && (
                <p className="text-sm text-destructive mt-1">
                  {errors.password}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword">
                <span className="flex items-center gap-1 text-sm font-medium text-secondary-foreground/80 mb-2">
                  Confirm Password
                </span>
              </label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  if (errors.confirmPassword)
                    setErrors({ ...errors, confirmPassword: "" });
                }}
                required
                disabled={isLoading}
              />
              {errors.confirmPassword && (
                <p className="text-sm text-destructive mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg border">
            <input
              type="checkbox"
              id="terms"
              required
              className="mt-1 h-4 w-4 text-primary border-muted-foreground/30 rounded focus:ring-primary"
              disabled={isLoading}
            />
            <label
              htmlFor="terms"
              className="text-[10px] text-secondary-foreground"
            >
              I agree to the{" "}
              <Link to="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              . I understand that Foo-rum is a community platform and I will
              follow community guidelines.
            </label>
          </div>

          <Button type="submit" className="w-full h-11" disabled={isLoading}>
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
                Creating Account...
              </span>
            ) : (
              <span>Create My Account</span>
            )}
          </Button>
        </form>
      </div>
  );
}
