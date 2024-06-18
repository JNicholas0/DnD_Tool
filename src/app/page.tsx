'use client';
import Image from "next/image";
import { Hero, Navbar } from "@_index";
import Select_Campaign from "./select_campaign/page";
import { useSession, getSession } from "next-auth/react";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
  
export default function Home() {
  const { data: session } = useSession()
  const { push } = useRouter();

  
  if (session && session.user != undefined) {
    useEffect(() => {
      push('/select_campaign');
   }, []);
  }
  else {
  return (
    <main>
      {Navbar(false)}
      {Hero("Welcome to DnD Tool", "Your one-stop shop for campaign and encounter managing. Please sign in or create an account to begin.")}
    </main>
  );
  }
}
