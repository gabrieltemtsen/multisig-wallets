"use client";
import Navbar from "@/components/navbar";
import Providers from "@/components/providers";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <main    >
      <Providers>
    <div className="flex flex-col min-h-screen">
      <Navbar />
    <div className="grow" />
    hrloo
      <Footer />
    </div>
  </Providers>
    </main>
  )
}
