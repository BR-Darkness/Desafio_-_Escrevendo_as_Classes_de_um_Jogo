import { CircleUserIcon, FlaskConicalIcon, LeafIcon, SwordsIcon } from "lucide-react";
import { IHero, IHeroType } from "../../ts/interfaces/hero-interface";
import { EHeroClasses } from "../../ts/enums/hero-classes";
import { ElementType } from "react";

const HeroTypes: Record<EHeroClasses, IHeroType> = {
    Guerreiro: {
        icon: SwordsIcon,
        attackTechnique: 'Espada',
    },
    Mago: {
        icon: FlaskConicalIcon,
        attackTechnique: 'Magia',
    },
    Monge: {
        icon: CircleUserIcon,
        attackTechnique: 'Artes Marciais'
    },
    Ninja: {
        icon: LeafIcon,
        attackTechnique: 'Shuriken'
    }
}

export function HeroCard({ name:heroName, age:heroAge, type:heroType } : IHero) {
    const Icon: ElementType = HeroTypes[heroType].icon;

    function showHeroAttack() {
        alert(`O ${heroType} atacou usando ${HeroTypes[heroType].attackTechnique}`)
    }

    return (
    <div className="select-none flex flex-col p-4 gap-4 bg-borderColor min-w-64 rounded-[8px]">
        <p>{heroType}</p>
        <Icon className="self-center m-4" size={64} strokeWidth={1.25} />
        <div>
            <h3 className="truncate text-lg font-semibold">{heroName}</h3>
            <p className="text-sm">{heroAge} Ano(s)</p>
        </div>
        <button onClick={showHeroAttack} className="bg-inputColor w-fit px-12 py-2 self-center rounded-[8px] font-semibold">Ataque</button>
    </div>
  )
}
