import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { useAuth } from "../context/AuthContex";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 800));

    const success = login(email, password);

    if (!success) {
      setError("Invalid email or password. Please try again.");
      setIsLoading(false);
      return;
    }

    navigate("/");
  };

  return (
    <div>
      {error && (
        <div className="mb-6 p-3 bg-destructive/10 border border-destructive/20 rounded-lg flex items-center gap-2">
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
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
                setError("");
              }}
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              <span className="flex items-center gap-1 text-sm font-medium text-secondary-foreground/80 mb-2">
                Password
              </span>
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              required
              disabled={isLoading}
            />
            <div className="flex justify-end mt-2">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                Forgot password?
              </Link>
            </div>
          </div>
        </div>

        <Button type="submit" className="w-full h-11" disabled={isLoading}>
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
              Logging In
            </span>
          ) : (
            <span>Log In to Your Account</span>
          )}
        </Button>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-muted-foreground/40"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button type="button" variant="outline" disabled={isLoading}>
            <span className="flex items-center justify-center gap-2">
              Google
            </span>
          </Button>
          <Button type="button" variant="outline" disabled={isLoading}>
            <span className="flex items-center justify-center gap-2">
              GitHub
            </span>
          </Button>
        </div>
      </form>
    </div>
  );
}
