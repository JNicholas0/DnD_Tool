'use client';
import Image from "next/image";
import { Hero } from "./components/_index";

export default function Home() {
  return (
    <main>
      {Hero("Welcome to DnD Tool", "Your one-stop shop for campaign and encounter managing. Please sign in or create an account to begin.")}
    </main>
  );
}
