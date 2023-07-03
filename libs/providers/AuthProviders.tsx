'use client'
import { SessionProvider } from "next-auth/react";
import React from 'react';

interface AuthProviders {
    children: React.ReactNode
}
const AuthProviders = ({ children }: AuthProviders) => {
    return (
        <SessionProvider>
            {
                children
            }
        </SessionProvider>
    );
};

export default AuthProviders;