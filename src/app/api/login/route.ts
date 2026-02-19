import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json(
                { error: "Missing email or password" },
                { status: 400 }
            );
        }

        const GLOBAL_PASSWORD = process.env.GLOBAL_PASSWORD;
        const JWT_SECRET = process.env.JWT_SECRET;
        const COOKIE_NAME = process.env.COOKIE_NAME || "app_token";

        if (!GLOBAL_PASSWORD || !JWT_SECRET) {
            console.error("Missing env vars");
            return NextResponse.json(
                { error: "Server configuration error" },
                { status: 500 }
            );
        }

        if (password !== GLOBAL_PASSWORD) {
            return NextResponse.json({ error: "Invalid password" }, { status: 401 });
        }

        const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "8h" });

        const response = NextResponse.json({ ok: true });

        response.cookies.set({
            name: COOKIE_NAME,
            value: token,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 8 * 60 * 60,
            path: "/",
        });

        return response;
    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
