<script lang="ts">
import { FxReveal } from "@zerodevx/svelte-img";
import { onMount, type ComponentProps } from "svelte";
import { cubicOut } from "svelte/easing";
import type { EasingFunction } from "svelte/transition";

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


<image-container>
    <FxReveal
        bind:imgRef
        on:load={() => imgLoaded = true}
        {...$$restProps}
    />

    {#if !imgLoaded}
        <blur-filter out:unblur />
    {/if}
</image-container>


<style lang="scss">
image-container {
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
</style>