'use client';
import { ButtonLink, Navbar } from "@_index";

export default function Login() {
    return(
        <main>
            {Navbar(false)}
            <div className = "relative mx-auto w-full max-w-container space-y-20 px-4 pt-20 sm:px-6 lg:px-8 pb-20">
            Welcome to Login<br></br>
            </div>
            {ButtonLink("btn btn-primary", "Log in", "./select_campaign")}
        </main>
    );
}