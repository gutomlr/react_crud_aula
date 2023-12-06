import React from "react";
import { IconeHome, IconeLista } from "../icones/tabela";
export default function Navbar(props: any) {
    return (
        <>
            <nav className="font-bold flex flex-col text-center sm:flex-row sm:text-left
            sm:justify-between py-4 px-6 bg-gradient-to-r from-blue-500 to-black text-stone-100 shadow
            sm:items-baseline w-full">
                <div className="mb-2 sm:mb-0">SISTEMA DE FUNCIONÁRIOS</div>
                <div>
                    <a href="/" className="text-lg no-underline hover:text-gray-300 ml-2">{IconeHome}</a><a href="/funcionarios" className="text-lg no-underline hover:text-gray-300 ml-2">{IconeLista}</a>
                </div>
            </nav>
        </>);
}