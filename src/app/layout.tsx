// src/app/layout.tsx

import { Metadata } from "next";
import "./globals.css";
<<<<<<< HEAD

import Navbar from '@/components/Navbar';  // Import the Navbar component
import AuthProvider from '../components/AuthProvider'
import React from 'react';

=======
import Navbar from "../components/Navbar";
import AuthProvider from "../components/AuthProvider";
>>>>>>> 4884aae69cdf60cfa05934141fd199d9aba7054b

export const metadata: Metadata = {
  title: "SnapZoška",
  description: "Created by students of SPŠE Zochova 9, Bratislava",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <AuthProvider>
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <main style={{ flexGrow: 1 }}>
              {children}
            </main>
          </div>
          <Navbar /> 
        </AuthProvider>
      </body>
    </html>
  );
}




