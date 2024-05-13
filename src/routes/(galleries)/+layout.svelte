<script context="module" lang="ts">
export type EntryDetailsContext = {
    selectEntry: (entry: EntryJson, previewUrl: string) => void,
};
</script>
    
<script lang="ts">
import { onMount, setContext } from "svelte";
import { page } from "$app/stores";
import { canScrollPage, type EntryJson } from "@/store";
import BackButton from "./BackButton.svelte";
import { FxReveal } from "@zerodevx/svelte-img";
import ImageContainer from "@/lib/components/ImageContainer.svelte";
import { marked } from "marked";

onMount(() => {
    $canScrollPage = true;
});

let selectedEntry: EntryJson | null = null;
let selectedPreviewUrl: string | null = null;

const entryDetailsContext = {
    selectEntry: (entry: EntryJson, previewUrl: string) => {
        selectedEntry = entry;
        selectedPreviewUrl = previewUrl;
    },
};
setContext("entryDetails", entryDetailsContext);
</script>
    

<gallery-container>
    <header>
        <BackButton />
        
        <h2>{$page.data.pageTitle}</h2>
    </header>
    
    <gallery->
        <slot />
    </gallery->

    <entry-details>
        {#if selectedEntry === null}
            Nothing selected!
        {:else}
            <ImageContainer
                src={selectedPreviewUrl}
                alt={selectedEntry.title}
            />
    
            <h3>{selectedEntry.title}</h3>
            {@html marked.parse(selectedEntry.desc)}
        {/if}
    </entry-details>
</gallery-container>


<style lang="scss">
gallery-container {
    display: grid;
    gap: 0 1rem;
    position: relative;

    > header {
        grid-area: 1/1 / 1/3;
    }

    > gallery- {
        grid-area: 2/1;
    }

    > entry-details {
        grid-area: 2/2;
    }
}

entry-details {
    border-left: 2px solid currentcolor;
    width: 40ch;
    height: 100vh;
    padding: 2rem 0 2rem 2rem;
    position: sticky;
    top: 0;
    overflow-y: auto;

    :global(image-container) {
        border: 2px solid currentcolor;
    }
}

gallery- {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem 1rem;
}

h2 {
    font-size: 2.5rem;
}

h3 {
    font-size: 2rem;
}
</style>