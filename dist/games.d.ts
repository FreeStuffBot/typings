export declare enum GameFlag {
    TRASH = 1,
    THIRDPARTY = 2
}
/** @see GameFlag */
export declare type GameFlags = number;
export declare type Store = 'steam' | 'epic' | 'humble' | 'gog' | 'origin' | 'uplay' | 'twitch' | 'itch' | 'discord' | 'apple' | 'google' | 'switch' | 'other';
export declare type GameApprovalStatus = 'pending' | 'declined' | 'approved';
export declare type AnnouncementType = 'free' | 'weekend' | 'discount' | 'ad' | 'unknown';
export declare type ProductKind = 'game' | 'dlc' | 'software' | 'art' | 'ost' | 'book' | 'other';
/** When the scraper found a game but has not fetched the details yet */
export interface GameSource {
    store: Store;
    url: string;
    id: string;
}
/** The data that can be found by the web scrapers */
export interface ScrapeableGameInfo {
    title: string;
    org_price: {
        euro: number;
        usd: number;
    };
    price: {
        euro: number;
        usd: number;
    };
    kind: ProductKind;
    tags: string[];
    thumbnail: string;
    description: string;
    rating?: number;
    until: number;
    type?: AnnouncementType;
    store_meta?: {
        steam_subids?: string;
    };
}
/** An object with all the data needed to generate all types of announcements */
export interface GameInfo extends ScrapeableGameInfo {
    org_url: string;
    store: Store;
    flags: GameFlags;
    type: AnnouncementType;
    notice?: string;
    store_meta: {
        steam_subids: string;
    };
    proxy_url?: string;
}
/** Analytical data */
export interface GameAnalytics {
    discord: {
        /** Number of servers it got announced in */
        reach: number;
        /** Clicks in total */
        clicks: number;
    };
}
/** This is the object that gets stored long term for the following uses:
 * - Tell the proxy where to redirect the links to
 * - Contain analytics data
 * - Queue up for approval process
 *
 * @database
 */
export interface GameData {
    /** a unique number to identify the game - used by the proxy */
    _id: number;
    /** internal uuid - used for checking if a game was already announced */
    uuid: string;
    /** UNIX Timestamp in seconds - markes the last time the approval status has changed */
    published: number;
    /** User id of the moderator, responsible for checking the info and publishing the announcement */
    responsible: string;
    /** Current status of the game */
    status: GameApprovalStatus;
    /** Analytical data */
    analytics: GameAnalytics;
    /** Info about the game */
    info: GameInfo;
}
