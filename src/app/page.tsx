"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const email = (e.target as any).email.value;
    const password = (e.target as any).password.value;

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Login failed");
      }

      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="h-screen bg-muted w-full">
      <div className="flex h-full items-center justify-center">

        <div className="flex w-full max-w-lg flex-col gap-y-6 rounded-xl border border-border bg-card px-8 py-10 shadow-lg">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <form onSubmit={handleLogin} className="flex w-full flex-col gap-2">
            <div className="flex w-full flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Email"
                required
                type="email"
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="Password"
                required
                type="password"
              />
            </div>
            <Button type="submit" className="w-full mt-2">
              Login
            </Button>
          </form>
          <div className="flex justify-center gap-1 text-sm text-muted-foreground">
            <p>Need an account?</p>
            <Link href="https://shadcnblocks.com" className="font-medium text-primary hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
