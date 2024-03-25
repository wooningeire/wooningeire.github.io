<script>
import { onMount } from "svelte";
import { canScrollPage } from "../store";
import BackButton from "../BackButton.svelte";
import WorkGalleryEntry from "./WorkGalleryEntry.svelte";

onMount(() => {
    $canScrollPage = true;
});
</script>

<BackButton />

<gallery->
</gallery->

<style lang="scss">
gallery- {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 3rem;
}
</style>

