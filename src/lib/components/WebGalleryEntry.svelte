<script lang="ts">
import { marked } from "marked";
import { getContext, onMount } from "svelte";
import type { EntryDetailsContext } from "@/routes/(galleries)/+layout.svelte";
import type { EntryJson } from "@/store";

import infoSrc from "$/assets/icons/info.svg";
import ImageContainer from "./ImageContainer.svelte";

export let entry: EntryJson;
export let previewUrl: string;

const entryDetailsContext: EntryDetailsContext = getContext("entryDetails");
const select = () => entryDetailsContext.selectEntry(entry, previewUrl);
</script>

<gallery-entry-container>
    <a
        href={entry.url}
        rel="external"
        target="_blank"
        tabindex="-1"
    >
        <button>
            <gallery-entry class="clickable">
                <ImageContainer
                    src={previewUrl}
                    alt={entry.title}
                />
                <entry-title>{marked.parseInline(entry.title)}</entry-title>
            </gallery-entry>
        </button>
    </a>

    <entry-controls>
        <button on:click={select}>
            <img
                src={infoSrc}
                alt={`Info icon`}
            />
        </button>

        <!--
        <button>
            <img
                src={openSrc}
                alt={`Open icon`}
            />
        </button>
        -->
    </entry-controls>
</gallery-entry-container>

<style lang="scss">
@import "@/mixins.scss";

gallery-entry-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

gallery-entry {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    gap: 2px;
    width: 24ch;
    height: 100%;
    font-size: 1.25rem;
    background: currentcolor;

    > image-container {
        display: grid;
        > :global(*) {
            grid-area: 1 / 1;
        }

        :global(.lqip) {
            z-index: 0;
        }

        :global(picture) {
            position: relative;
            z-index: 1;
    
            --reveal-transform: scale(0.8);
            --reveal-transition:
                opacity 0.2s ease-in-out,
                transform 0.5s cubic-bezier(0,1.62,.49,1);
        }

        :global(picture),
        :global(img) {
            width: 100%;
            height: 100%;
            aspect-ratio: 2560/1600;
        }


        > blur-filter {
            backdrop-filter: blur(8px);
            width: 100%;
            height: 100%;
        }
    }

    > entry-title {
        color: #fff;
        font-weight: 700;
    }
}

entry-controls {
    display: flex;
    gap: 0.5ch;

    > button {
        width: 2ch;
        border: 0;
        display: flex;

        @include clickable(1.25);
        
        &:hover,
        &:focus,
        &:active {
            filter: unset;
        }

        > * {
            width: 100%;
        }
    }
}

a {
    color: inherit;
}

button {
    padding: 0;
}

</style>