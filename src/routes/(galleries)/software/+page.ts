import type { PageLoad } from "./$types";
import entries from "$/data/entries";


export const load: PageLoad = ({params}) => {
    return {
        pageTitle: "Software & web projects",
        entries: entries.software,
    };
};