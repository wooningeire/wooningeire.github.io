<script lang="ts">
import type { PageData } from "./$types";
import WebGalleryEntry from "$/components/WebGalleryEntry.svelte";

export let data: PageData;


// Substitute since we cannot dynamically import paths from `/lib` to dynamically import inputs
const filenameToPreviewUrl = (() => {
    const localUrlToPreviewUrlRecord: Record<string, string> = import.meta.glob('$/assets/web-screenshots/*.png', {
        eager: true,
        import: "default",
        query: "?as=screenshot",
    });

    const localFilenameToPreviewUrl = new Map();
    for (const [localPath, previewUrl] of Object.entries(localUrlToPreviewUrlRecord)) {
        const localFilename = localPath.slice(localPath.lastIndexOf("/") + 1);

        localFilenameToPreviewUrl.set(localFilename, previewUrl);
    }
    return localFilenameToPreviewUrl;
})();

</script>

{#each data.entries as entry (entry.id)}
    <WebGalleryEntry
        preview={filenameToPreviewUrl.get(entry.previewUrlLocal)}
        title={entry.title}
        url={entry.url}
    />
{/each}