<script lang="ts">
import { onMount } from "svelte";
import { page } from "$app/stores";
import { canScrollPage } from "@/store";
import BackButton from "./BackButton.svelte";

onMount(() => {
    $canScrollPage = true;
});
</script>


<BackButton />

<h2>{$page.data.pageTitle}</h2>

<gallery->
    <slot />
</gallery->


<style lang="scss">
h2 {
    font-size: 2.5rem;
}
</style>