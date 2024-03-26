<script>
import { onMount } from "svelte";
import { canScrollPage } from "../store";
import BackButton from "../BackButton.svelte";
import WebGalleryEntry from "$/components/WebGalleryEntry.svelte";

onMount(() => {
    $canScrollPage = true;
});
</script>

<BackButton />

<gallery->
</gallery->
