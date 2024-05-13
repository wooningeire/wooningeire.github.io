<script lang="ts">
import "@/index.scss";

import {canScrollPage} from "@/store";
</script>

<main>
    <div
        class="content-container"
        class:can-scroll={$canScrollPage}
    >
        <slot />
    </div>
</main>

<style lang="scss">   
@import "@/constants.scss";

main {
    min-width: min-content;
    min-height: 100vh;

    background: linear-gradient(135deg, #fcfeff, #d9dde0);
}

.content-container {
    min-width: min-content;
    position: relative;
    padding: 16vh 18.75vw;

    @media screen and (max-height: $small-padding-max-height) {
        padding-top: 8rem;
        padding-bottom: 8rem;
    }
    @media screen and (max-width: $small-layout-max-width) {
        padding-left: 2rem;
        padding-right: 2rem;
    }
    color: var(--col-body);
    
    &:not(.can-scroll) {
        height: 100vh;
    }
}
</style>