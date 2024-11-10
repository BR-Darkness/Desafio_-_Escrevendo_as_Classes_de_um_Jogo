import { FolderCodeIcon } from "lucide-react";
import { ExternalLink } from "../external-link";

export function Header() {
    return (
    <header className="flex justify-center mx-4 lg:px-8 py-2 h-24 max-w-full select-none">
        <div className="w-full flex flex-wrap justify-between items-center gap-y-2 gap-x-8 max-w-[1376px]">
            <FolderCodeIcon size={48} strokeWidth={1} />
            <nav className="overflow-auto py-1">
                <ul className="flex py-2 gap-6">
                    <li>
                        <ExternalLink label="Sobre o Bootcamp" link="https://www.dio.me/bootcamp/gft-start-logica-de-programacao"/>
                    </li>
                    <li>
                        <ExternalLink label="GitHub" link="https://github.com/BR-Darkness/Desafio_-_Escrevendo_as_Classes_de_um_Jogo"/>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    )
}