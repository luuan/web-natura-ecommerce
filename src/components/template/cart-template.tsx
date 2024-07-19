import React from "react";
import Header from "./header";
import Footer from "./footer";

export interface CartTemplateProps {
    children: React.ReactNode
    className?: string 
}

export default function CartTemplate(props: CartTemplateProps) {
    return (
        <div className="w-full flex flex-col min-h-screen">
            <Header showCart={false}/>
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}