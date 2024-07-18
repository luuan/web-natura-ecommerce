import React from "react";
import Header from "./header";
import Footer from "./footer";

export interface PageProps {
    children: React.ReactNode
    className?: string 
}

export default function Page(props: PageProps) {
    return (
        <div className="w-full flex flex-col min-h-screen">
            <Header />
            <main className={`w-full mx-auto flex-1 ${props?.className ?? ''} py-10`}>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}