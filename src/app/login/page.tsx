'use client';
import { ButtonLink } from "@/app/components/_index";

export default function Login() {
    return(
        <main>
            Welcome to Login<br></br>
            {ButtonLink("btn btn-primary", "Log in", "./select_campaign")}
        </main>
    );
}