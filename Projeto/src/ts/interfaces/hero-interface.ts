import { ElementType } from "react";
import { EHeroClasses } from "../enums/hero-classes";

export interface IHero {
    name: string,
    age: string,
    type: EHeroClasses
}

export interface IHeroType {
    icon:  ElementType,
    attackTechnique: string,
    color?: string
}