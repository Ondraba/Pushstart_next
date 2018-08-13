/* tslint:disable */
import {GraphQLResolveInfo} from 'graphql';

export type Resolver<Result, Args = any> = (parent: any, args: Args, context: any, info: GraphQLResolveInfo) => Promise<Result> | Result;

export interface Query {
    me?: Account | null;
}

export interface Account {
    id: string;
    firstName: string;
    lastName: string;
}

export interface Mutation {
    updateMe?: Account | null;
}

export interface Game {
    id: string;
    title: string;
    perex: string;
    ranking?: number | null;
    platform: string;
}

export interface MeUpdateInput {
    id: string;
    firstName?: string | null;
    lastName?: string | null;
}
export interface UpdateMeMutationArgs {
    input?: MeUpdateInput | null;
}

export namespace QueryResolvers {
    export interface Resolvers {
        me?: MeResolver;
    }

    export type MeResolver<R = Account | null> = Resolver<R>;
}

export namespace AccountResolvers {
    export interface Resolvers {
        id?: IdResolver;
        firstName?: FirstNameResolver;
        lastName?: LastNameResolver;
    }

    export type IdResolver<R = string> = Resolver<R>;
    export type FirstNameResolver<R = string> = Resolver<R>;
    export type LastNameResolver<R = string> = Resolver<R>;
}

export namespace MutationResolvers {
    export interface Resolvers {
        updateMe?: UpdateMeResolver;
    }

    export type UpdateMeResolver<R = Account | null> = Resolver<R, UpdateMeArgs>;
    export interface UpdateMeArgs {
        input?: MeUpdateInput | null;
    }
}

export namespace GameResolvers {
    export interface Resolvers {
        id?: IdResolver;
        title?: TitleResolver;
        perex?: PerexResolver;
        ranking?: RankingResolver;
        platform?: PlatformResolver;
    }

    export type IdResolver<R = string> = Resolver<R>;
    export type TitleResolver<R = string> = Resolver<R>;
    export type PerexResolver<R = string> = Resolver<R>;
    export type RankingResolver<R = number | null> = Resolver<R>;
    export type PlatformResolver<R = string> = Resolver<R>;
}
