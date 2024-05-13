import { writable } from "svelte/store";

export const canScrollPage = writable(false);

export type EntryJson = {
    id: string,
    assetsPreviewUrlLocal: string,
    title: string,
    url: string,
    desc: string,
};