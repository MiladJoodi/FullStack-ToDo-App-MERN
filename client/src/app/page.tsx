"use client"

import Image from "next/image";
import Navbar from "./components/Navbar";
import { useSession } from "next-auth/react";
import Login from "./components/Login";

export default function Home() {

  const { data: session } = useSession();

  if (!session?.user){
return <Login />
  }

  return (
    <main className="max-w-[400px] mx-auto">
      <Navbar />
    </main>
  );
}
