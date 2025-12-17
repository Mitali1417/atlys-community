import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "../ui/Modal";
import { CardContent } from "../ui/Card";
import { Button } from "../ui/Button";

const joiningBenefits = [
  "Post your own content",
  "Like and save favorites",
  "Join conversations",
  "Personalized experience",
];

export default function AuthModal() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const openModal = () => setOpen(true);
    window.addEventListener("open-auth-modal", openModal);
    return () => window.removeEventListener("open-auth-modal", openModal);
  }, []);

  const goTo = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <CardContent className="space-y-6 p-8">
        {/* Header with Icon */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-2">
            <span
              className="text-3xl text-secondary"
              role="img"
              aria-label="lock"
            >
              !
            </span>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">
            Authentication Required
          </h2>

          <p className="text-sm text-muted-foreground max-w-sm mx-auto">
            You need to be logged in to post, like, comment, or interact with
            content.
          </p>
        </div>

        {/* Benefits List */}
        <div className=" p-4 space-y-3">
          <p className="text-sm font-medium text-secondary-foreground/80 mb-2">
            Benefits of joining:
          </p>

          <div className="space-y-2">
            {joiningBenefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <span className="text-success">✓</span>
                <span className="text-sm text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <Button
            className="w-full py-3 text-base font-semibold"
            onClick={() => goTo("/auth")}
          >
            Log In or Sign Up to Your Account
          </Button>
        </div>

        <div className="text-center space-y-2">
          <p className="text-xs text-muted-foreground pt-2">
            By continuing, you agree to our Terms and Privacy Policy
          </p>
        </div>
      </CardContent>
    </Modal>
  );
}
