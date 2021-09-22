import { AnnouncementType, GameFlags, ProductKind, Store } from ".";
/**
 * A raw api response. Very descriptive.
 */
export interface RawApiResponse {
    success: boolean;
    error?: string;
    message?: string;
    data?: Array<any> | Object;
    _headers: Object;
    _status: number;
}
/**
 * TODO someone write this please
 */
export interface LocalizedGameInfo {
    lang_name: string;
    lang_name_en: string;
    lang_flag_emoji: string;
    platform: string;
    claim_long: string;
    claim_short: string;
    free: string;
    header: string;
    footer: string;
    org_price_eur: string;
    org_price_usd: string;
    until: string;
    until_alt: string;
    flags: string[];
}
/**
 * TODO someone write this please
 */
export interface GameInfo {
    id: number;
    urls: {
        default: string;
        browser: string;
        client?: string;
        org: string;
    };
    title: string;
    org_price: {
        euro: number;
        usd: number;
        gbp: number;
        brl: number;
        bgn: number;
        pln: number;
        huf: number;
        btc: number;
    };
    price: {
        euro: number;
        usd: number;
        gbp: number;
        brl: number;
        bgn: number;
        pln: number;
        huf: number;
        btc: number;
    };
    thumbnail: {
        org: string;
        blank: string;
        full: string;
        tags: string;
    };
    kind: ProductKind;
    tags: string[];
    description: string;
    rating?: number;
    notice?: string;
    until: Date;
    store: Store;
    flags: GameFlags;
    type: AnnouncementType;
    store_meta: {
        steam_subids: string;
    };
    localized?: {
        'en-US': LocalizedGameInfo;
        [key: string]: LocalizedGameInfo;
    };
}
/**
 * TODO someone write this please
 */
/**
 * TODO someone write this please
 */
/**
 * TODO someone write this please
 */ 
