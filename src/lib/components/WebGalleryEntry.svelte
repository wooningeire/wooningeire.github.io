<script lang="ts">
import { marked } from "marked";
import {FxReveal} from "@zerodevx/svelte-img";
import { onMount } from "svelte";
import type { Transition } from "svelte/types/compiler/interfaces";
import type { EasingFunction } from "svelte/transition";
import { cubicOut } from "svelte/easing";

import infoSrc from "$/assets/icons/info.svg";
import openSrc from "$/assets/icons/open.svg";

export let preview: string;
export let title: string;
export let url: string;

let imgRef: FxReveal;
let imgLoaded = false;
onMount(() => {
    imgLoaded = imgRef?.complete ?? false;
});

const unblur = (node: HTMLElement, {delay=0, duration=300, easing=cubicOut}: {delay?: number, duration?: number, easing?: EasingFunction}={}) => {
    return {
        delay,
        duration,
        easing,
        css: (t: number) => `backdrop-filter: blur(${8 * t}px)`,
    };
};
</script>

<a
    href={url}
    rel="external"
    target="_blank"
    tabindex="-1"
>
    <button>
        <web-gallery-entry class="clickable">
            <image-container>
                <FxReveal
                    src={preview}
                    alt={title}
                    bind:imgRef
                    on:load={() => imgLoaded = true}
                />

                {#if !imgLoaded}
                    <blur-filter out:unblur />
                {/if}
            </image-container>
            <entry-title>{marked.parseInline(title)}</entry-title>
            <entry-controls>
                <button>
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
        </web-gallery-entry>
    </button>
</a>

<style lang="scss">
@import "@/mixins.scss";

web-gallery-entry {
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
            height: auto;
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

    > entry-controls {
        display: flex;
        gap: 0.5ch;

        > button {
            width: 2.5ch;
            border: 0;
            display: flex;

            background: var(--col-body);
            padding: 3.5px;

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
}

a {
    color: inherit;
}

button {
    padding: 0;
}

</style>