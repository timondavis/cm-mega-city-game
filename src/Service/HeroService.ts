import { HeroModel } from '../Model/HeroModel';
import { DieBag } from 'cm-check';
export class HeroService {

    public GenerateRandom() : HeroModel {
        let hero = new HeroModel();

        hero.attributes.replace( HeroModel.CoreAttributes.STR, HeroService.Roll3d6() );
        hero.attributes.replace( HeroModel.CoreAttributes.DEX, HeroService.Roll3d6() );
        hero.attributes.replace( HeroModel.CoreAttributes.CON, HeroService.Roll3d6() );
        hero.attributes.replace( HeroModel.CoreAttributes.WIS, HeroService.Roll3d6() );
        hero.attributes.replace( HeroModel.CoreAttributes.INT, HeroService.Roll3d6() );
        hero.attributes.replace( HeroModel.CoreAttributes.CHA, HeroService.Roll3d6() );

        hero.attributes.replace( HeroModel.PrimaryAttributes.AC, 3 );
        hero.attributes.replace( HeroModel.PrimaryAttributes.HP, 10 );
        hero.attributes.replace( HeroModel.PrimaryAttributes.MAX_HP, 10 );

        return hero;
    }

    private static Roll3d6(): number {
        let statRoll = new DieBag();

        statRoll.add(3, 6);
        return statRoll.getTotal();
    }
}