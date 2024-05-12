import type { PageLoad } from "./$types";
import entries from "$/data/entries";


export const load: PageLoad = ({params}) => {
    return {
        pageTitle: "Art & illustration & digital media",
        entries: entries.software,
    };
};