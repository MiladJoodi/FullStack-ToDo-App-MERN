"use client"
import { SessionProvider } from "next-auth/react"

interface propsType {
    children: React.ReactNode;
}

const AuthProvider = ({ children }: propsType) => {
    return <SessionProvider>{children}</SessionProvider>
};

export default AuthProvider;