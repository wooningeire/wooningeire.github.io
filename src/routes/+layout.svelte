<script lang="ts">
import "@/index.scss";
</script>

<main>
    <div class="content-container">
        <slot />
    </div>
</main>

<style lang="scss">
main {
    width: 100vw;
    height: 100vh;
}

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
</style>