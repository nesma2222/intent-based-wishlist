"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    if (!isLogin && !name) {
      setError("Please enter your name.");
      return;
    }

    // Store in localStorage (no real auth — frontend only)
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userName", isLogin ? email.split("@")[0] : name);

    // Redirect to home
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-slate-50">
      <Card className="w-full max-w-sm border border-slate-100 shadow-sm">
        <CardContent className="p-8">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center">
              <Heart size={16} className="text-white fill-white" />
            </div>
            <span className="text-xl font-bold text-teal-600">Wishly</span>
          </div>

          <h1 className="text-xl font-bold text-slate-800 mb-1">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-sm text-slate-400 mb-6">
            {isLogin
              ? "Login to access your wishlists."
              : "Join Wishly and start saving."}
          </p>

          {/* Error */}
          {error && (
            <div className="bg-red-50 text-red-500 text-xs px-3 py-2 rounded-lg mb-4">
              {error}
            </div>
          )}

          {/* Fields */}
          <div className="flex flex-col gap-3">
            {!isLogin && (
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                suppressHydrationWarning
                className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              suppressHydrationWarning
              className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              suppressHydrationWarning
              className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
            />

            <Button
              onClick={handleSubmit}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white mt-1"
            >
              {isLogin ? "Login" : "Register"}
            </Button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-slate-100" />
            <span className="text-xs text-slate-400">or</span>
            <div className="flex-1 h-px bg-slate-100" />
          </div>

          {/* Google */}
          <Button variant="outline" className="w-full">
            <span className="font-bold text-base mr-1">G</span>
            Continue with Google
          </Button>

          {/* Toggle */}
          <p className="text-xs text-slate-400 text-center mt-4">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => { setIsLogin(!isLogin); setError(""); }}
              className="text-teal-600 font-medium hover:underline"
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </p>

          {/* Guest */}
          <div className="mt-3 text-center">
            <Link href="/" className="text-xs text-slate-400 hover:text-teal-600">
              Continue as Guest →
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}