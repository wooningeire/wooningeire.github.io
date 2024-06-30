<script lang="ts">
import { onMount } from "svelte";

import LinkButton from "./LinkButton.svelte";

import icosahedraSrc from "./icosahedra.png?w=270;540;1080&as=overlay";

import gitlabIconSrc from "$/assets/social-icons/gitlab.svg";
import githubIconSrc from "$/assets/social-icons/github.svg";
import linkedinIconSrc from "$/assets/social-icons/linkedin.svg";
import kofiIconSrc from "$/assets/social-icons/kofi.svg";
import artfightIconSrc from "$/assets/social-icons/artfight.svg";

import config from "$/data/lander";

import { canScrollPage } from "./store";
import { FxReveal } from "@zerodevx/svelte-img";

onMount(() => {
    $canScrollPage = false;
});

let imgIcosahedraRef: FxReveal;
let imgIcosahedraLoaded = false;
</script>

<section class="body-container">
    <header->
        <h1>{config.title}</h1>
        <headline->software developer</headline->
        <headline->digital media generalist</headline->
    </header->

    <button-rack>
        {#if config.linkWork}
        <LinkButton
            text="Work"
            url="/work/"
        />
        {/if}
        <LinkButton
            text="Web"
            url="/web/"
        />
        <!--
        <LinkButton
            text="Illustration"
            url="/art/"
            newTab={true}
        />
        -->
    </button-rack>

    <button-rack>
        {#if config.socialUrls.gitlab}
        <LinkButton
            text="GitLab"
            icon={gitlabIconSrc}
            url={config.socialUrls.gitlab}
            newTab={true}
        />
        {/if}
        {#if config.socialUrls.github}
        <LinkButton
            text="GitHub"
            icon={githubIconSrc}
            url={config.socialUrls.github}
            newTab={true}
        />
        {/if}
        {#if config.socialUrls.linkedin}
        <LinkButton
            text="LinkedIn"
            icon={linkedinIconSrc}
            url={config.socialUrls.linkedin}
            newTab={true}
        />
        {/if}
        {#if config.socialUrls.kofi}
        <LinkButton
            text="Ko-fi"
            icon={kofiIconSrc}
            url={config.socialUrls.kofi}
            newTab={true}
        />
        {/if}
        {#if config.socialUrls.artfight}
        <LinkButton
            text="Art Fight"
            icon={artfightIconSrc}
            url={config.socialUrls.artfight}
            newTab={true}
        />
        {/if}
    </button-rack>
</section>

<image-positioner>
    <div
        class="icosahedra"
        class:loaded={imgIcosahedraLoaded}
    >
        <FxReveal
            src={icosahedraSrc}
            alt="Three glass icosahedra"
            bind:imgIcosahedraRef
            on:load={() => imgIcosahedraLoaded = true}
        />
    </div>
</image-positioner>


<style lang="scss">
.body-container {
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    gap: 4rem;
}

h1 {
    font-size: 8rem;
}

header- {
    display: flex;
    flex-flow: column;
}


headline- {
    font-size: 2.25rem;
}

button-rack {
    font-size: 2rem;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    gap: 1.25rem;
}

image-positioner {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
        
    pointer-events: none;
    user-select: none;

    .icosahedra {
        position: absolute;
        left: 50%;
        bottom: 50%;
        transform: translateY(25%);
        width: 38rem;

        --reveal-filter: none;
        --reveal-transition: opacity .2s ease-in-out;

        &.loaded :global(.lqip) {
            opacity: 0;
        }
        :global(.lqip) {
            transition: opacity .2s ease-in-out;
        }
    }
}
</style>