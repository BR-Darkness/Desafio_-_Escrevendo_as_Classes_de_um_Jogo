import { FormEvent, useState } from "react";
import { AboutSection } from "./components/about";
import { HeroCard } from "./components/hero-card";
import { EHeroClasses } from "./ts/enums/hero-classes";
import { THeroClasses } from "./ts/types/hero-classes";

class hero {
    name: string;
    age: number;
    type: EHeroClasses;

    constructor(name = 'Desconhecido(a)', age: number, type = EHeroClasses.Guerreiro){
        this.name = name;
        this.age = age;
        this.type = type;
    }
}

export function App() {

    const [heroName, setHeroName] = useState('');
    const [heroAge, setHeroAge] = useState(0);
    const [selectedHeroType, setHeroType] = useState<THeroClasses>(EHeroClasses.Guerreiro);
    const heroesTypes : THeroClasses[] = Object.keys(EHeroClasses) as THeroClasses[]; 
    const [heroesList, setHeroesList] = useState<hero[]>([]);

    function handleFormHero(event: FormEvent) {
        event.preventDefault();

        if (!heroName) return
        if (!heroAge || heroAge <= 0 || heroAge > 150) return

        setHeroesList([new hero(heroName, heroAge, EHeroClasses[selectedHeroType]), ...heroesList])
    }

    return (
    <div className="flex justify-center mx-4 max-w-full">
    <main className="max-w-[1376px] w-full mx-4 my-12 ">
        <div className="flex flex-col flex-wrap flex-1 gap-16">
            <h1 className="font-[450] text-white text-5xl lg:text-6xl max-w-xl">Escrevendo as Classes de Um Jogo</h1>
            <form className="flex flex-wrap items-end gap-6">
                <div className="flex flex-col gap-2">
                    <label htmlFor="heroName">Nome do Herói :</label>
                    <input className="select-none min-w-64 w-fit rounded-[8px] bg-inputColor border-2 border-borderColor h-12 px-4 placeholder:text-borderColor" 
                        name="heroName" id="heroName" 
                        type="text"
                        placeholder="Nome do Herói"
                        onChange={e => setHeroName(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="heroAge">Idade do Herói :</label>
                    <input className="select-none min-w-64 w-fit rounded-[8px] bg-inputColor border-2 border-borderColor h-12 px-4 placeholder:text-borderColor" 
                        name="heroAge" id="heroAge" 
                        type="number"
                        min={0}
                        max={150}
                        placeholder="Idade do Herói"
                        onChange={e => setHeroAge(e.target.valueAsNumber)}
                        required
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="heroType">Tipo de Herói :</label>
                    <select className="select-none min-w-64 w-fit rounded-[8px] bg-inputColor border-2 border-borderColor h-12 px-4"
                        name="heroType" id="heroType"
                        title="Tipo de Herói"
                        onChange={e => setHeroType(e.target.value as THeroClasses)}
                        required
                    >
                        {
                            heroesTypes.map(heroType => (
                                <option key={heroType} value={heroType}>{EHeroClasses[heroType]}</option>
                            ))
                        }
                    </select>
                </div>
                <button type="button" className="select-none min-w-64 h-12 hover:bg-legendary bg-[#6bce9a] inline-flex items-center justify-center rounded-[8px] border-2 border-borderColor text-inputColor font-bold"
                    onClick={handleFormHero}
                >
                    Novo Herói
                </button>
            </form>
        </div>

        <div className="border-2 border-borderColor rounded-md mt-16 mb-12" />

        <h2 className="text-textColor text-4xl mb-6">Lista de Heróis:</h2>

        <div className="flex overflow-auto gap-6 pb-4">
            {
                heroesList.map(hero => (
                    <HeroCard 
                        key={crypto.randomUUID()}
                        name={hero.name}
                        age={hero.age.toString()}
                        type={hero.type}
                    />
                ))
            }
        </div>

        <div className="border-2 border-borderColor rounded-md mt-16 mb-12" />

        <AboutSection />
    </main>
    </div>
    )
}