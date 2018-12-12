import { Character } from 'cm-dungeon';
export class HeroModel extends Character {

    private static coreAttributes = {
        'STR' : 'Strength',
        'DEX' : 'Dexterity',
        'CON' : 'Constitution',
        'WIS' : 'Wisdom',
        'INT' : 'Intelligence',
        'CHA' : 'Charisma'
    };

    private static primaryAttributes = {
        'HP' : 'Hit Points',
        'MAX_HP' : 'Maximum Hit Points',
        'AC' : 'Armor Class'
    };

    public static get CoreAttributes() { return HeroModel.coreAttributes; }
    public static get PrimaryAttributes() { return HeroModel.primaryAttributes; }

    constructor() {
        super();
        this.attributes.add( HeroModel.CoreAttributes.STR, 0 );
        this.attributes.add( HeroModel.CoreAttributes.DEX, 0 );
        this.attributes.add( HeroModel.CoreAttributes.CON, 0 );
        this.attributes.add( HeroModel.CoreAttributes.WIS, 0 );
        this.attributes.add( HeroModel.CoreAttributes.INT, 0 );
        this.attributes.add( HeroModel.CoreAttributes.CHA, 0 );
        this.attributes.add( HeroModel.PrimaryAttributes.HP, 1);
        this.attributes.add( HeroModel.PrimaryAttributes.MAX_HP, 1);
        this.attributes.add( HeroModel.PrimaryAttributes.AC, 1);
    }
}