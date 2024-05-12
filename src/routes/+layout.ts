export const trailingSlash = "always";
export const prerender = true;

import type { PageLoad } from "./(galleries)/software/$types";


export const load: PageLoad = () => {
    return {
        pageTitle: "",
        entries: [],
    };
};