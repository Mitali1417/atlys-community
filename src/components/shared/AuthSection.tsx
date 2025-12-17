import { useState } from "react";
import Login from "../../pages/Login";
import Signup from "../../pages/SignUp";
import { Card, CardContent } from "../ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs";

const benefits = [
  "Post your own content",
  "Like and save favorites",
  "Personalized experience",
  "Secure and privacy-first by design",
];

export const AuthSection = () => {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <div className="grid w-full max-w-5xl grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="hidden md:flex flex-col justify-center px-6">
          <img src="/logo.png" alt="logo" className="w-30 mb-6" />
          <h1 className="text-3xl font-bold font-inter">Atlys Community</h1>

          <p className="text-muted-foreground mt-3 leading-relaxed">
            Share your thoughts, engage with the community, and express yourself
            freely — all in one beautifully designed space.
          </p>

          <ul className="mt-6 space-y-3 text-sm">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-2 mt-1">
                <span className="text-primary">✓</span>
                <li>{benefit}</li>
              </div>
            ))}
          </ul>

          <em className="mt-8 text-xs text-muted-foreground">
            Built with performance and usability in mind.
          </em>
        </div>

        <Card className="w-full max-w-md mx-auto">
          <div className="p-8 text-center">
            <h2 className="text-xl font-semibold">
              {activeTab === "login" ? "Welcome back" : "Create your account"}
            </h2>

            <p className="text-muted-foreground mt-1 text-sm">
              {activeTab === "login"
                ? "Log in to continue where you left off"
                : "Join the community in just a few steps"}
            </p>
          </div>

          <CardContent className="p-8 pt-0">
            <Tabs
              defaultValue="login"
              value={activeTab}
              onValueChange={(value) =>
                setActiveTab(value as "login" | "signup")
              }
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-6">
                <Login />
              </TabsContent>

              <TabsContent value="signup" className="space-y-6">
                <Signup />
              </TabsContent>
            </Tabs>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-xs text-center text-muted-foreground">
                Your information is securely encrypted and protected
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
