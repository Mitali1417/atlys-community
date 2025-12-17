import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { useAuth } from "../../context/AuthContex";

export default function Header() {
  const { user, logout } = useAuth();

  // console.log({ user });

  return (
    <header className="sticky top-0 z-50 h-16 border-b bg-white/95 backdrop-blur">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center">
            <img src="/logo.png" alt="logo" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-secondary-foreground group-hover:text-primary transition-colors">
              atlys
            </span>
            <span className="text-xs text-muted-foreground -mt-1">
              Community Discussions
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <div className="hidden sm:flex items-center gap-3 px-2">
                <div className="w-8 h-8 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-white font-semibold text-sm">
                      {user.name?.slice(0, 1).toUpperCase() || "U"}
                    </span>
                  )}
                </div>
                <div className="flex flex-col pr-2">
                  <span className="text-sm font-medium text-secondary-foreground line-clamp-1 max-w-[120px]">
                    {user.name || "User"}
                  </span>
                  <span className="text-xs text-gray-500">Member</span>
                </div>
              </div>

              <Button variant="destructive" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <Link to="/auth" className="hidden md:inline">
              <Button className="group  pl-3">
                Get Started
                <span className="text-xl group-hover:translate-x-0.5 -translate-x-0.5 transition-all duration-500 ease-in-out">
                  &#10138;
                </span>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
