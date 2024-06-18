'use client';

import ButtonLink from "./button";

export default function Hero(title: string, subtitle: string) {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="py-6">{subtitle}</p>
                    {ButtonLink("btn btn-outline btn-primary", "Log in", "./login")}
                    {ButtonLink("btn btn-primary", "Sign up", "./login")}
            </div>
        </div>
    </div>
    );
}