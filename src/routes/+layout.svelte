<script lang="ts">
import "@/index.scss";

import {canScrollPage} from "./store";
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
main {
    width: 100vw;
    min-height: 100vh;

    background: linear-gradient(135deg, #fcfeff, #d9dde0);
}

.content-container {
    position: relative;
    padding: 16vh 18.75vw;

    @media screen and (max-width: 720px) {
        padding: 8rem 2rem;
    }
    color: var(--col-body);
    
    &:not(.can-scroll) {
        height: 100vh;
    }
}
</style>