import {Game} from '@graphql-model';

const fakeGame: Game = {
    id: '1',
    title: 'World of Warcraft: Battle of Azeroth',
    perex:
        'World of Warcraft: Battle for Azeroth is the upcoming seventh expansion pack for the massively multiplayer online role-playing game (MMORPG) World of Warcraft, following Legion. It was announced at BlizzCon 2017, and will be released on August 13, 2018.',
    ranking: 84,
    platform: 'PC',
};

export const GameService = {
    findGame(): Game {
        return fakeGame;
    },
};
