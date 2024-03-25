<script lang="ts">
import LinkButton from "./LinkButton.svelte";
import icosahedraSrc from "./icosahedra.png";

import gitlabIconSrc from "$/assets/social-icons/gitlab.svg";
import githubIconSrc from "$/assets/social-icons/github.svg";
import linkedinIconSrc from "$/assets/social-icons/linkedin.svg";

import config from "$/data/lander.json";
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
        <LinkButton
            text="Illustration"
            url="/art/"
        />
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
    </button-rack>
</section>

<image-positioner>
    <img
        src={icosahedraSrc}
        class="icosahedra"
        alt="Three glass icosahedra"
    />
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
    flex-flow: wrap;
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
    }
}
</style>