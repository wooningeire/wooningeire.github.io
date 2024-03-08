<script lang="ts">
import SocialButton from "./SocialButton.svelte";
import icosahedraSrc from "./icosahedra.png";

import gitlabIconSrc from "$/assets/social-icons/gitlab.svg";
import githubIconSrc from "$/assets/social-icons/github.svg";
import linkedinIconSrc from "$/assets/social-icons/linkedin.svg";

import config from "./config.json";
</script>

<div class="content-container">
    <section class="body-container">
        <header->
            <h1>{config.title}</h1>
            <headline->software developer</headline->
            <headline->digital media generalist</headline->
        </header->

        <social-buttons>
            <SocialButton
                text="GitLab"
                icon={gitlabIconSrc}
                url={config.socialUrls.gitlab}
            />
            <SocialButton
                text="GitHub"
                icon={githubIconSrc}
                url={config.socialUrls.github}
            />
            <SocialButton
                text="LinkedIn"
                icon={linkedinIconSrc}
                url={config.socialUrls.linkedin}
            />
        </social-buttons>
    </section>

    <image-positioner>
        <img
            src={icosahedraSrc}
            class="icosahedra"
            alt="Three glass icosahedra"
        />
    </image-positioner>
</div>


<style lang="scss">
.content-container {
    height: 100%;
    position: relative;
    padding: 16vh 18.75vw;

    @media screen and (max-width: 720px) {
        padding: 8rem 2rem;
    }

    background: linear-gradient(135deg, #fcfeff, #d9dde0);
    color: var(--col-body);
}

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

social-buttons {
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