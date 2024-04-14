<script>
import { onMount } from "svelte";
import { canScrollPage } from "../store";
import BackButton from "../BackButton.svelte";
import WebGalleryEntry from "$/components/WebGalleryEntry.svelte";

import r4itumPreviewSrc from "$/assets/web-screenshots/r4itum.png?as=screenshot";
import colorspacesPreviewSrc from "$/assets/web-screenshots/colorspaces.png?as=screenshot";
import condgen3PreviewSrc from "$/assets/web-screenshots/condgen3.png?as=screenshot";
import soloyyinProtoPreviewSrc from "$/assets/web-screenshots/soloyyin.proto.png?as=screenshot";
import familyEmojiBuilderPreviewSrc from "$/assets/web-screenshots/family-emoji-builder.png?as=screenshot";
import r4itum2020PreviewSrc from "$/assets/web-screenshots/r4itum.2020.png?as=screenshot";

onMount(() => {
    $canScrollPage = true;
});
</script>

<BackButton />

<gallery->
    <WebGalleryEntry
        preview={r4itumPreviewSrc}
        title="ℝ⁴itum"
        url="/4d-webgl-test/"
    />
    <WebGalleryEntry
        preview={colorspacesPreviewSrc}
        title="Color space explorer"
        url="/colorspaces/"
    />
    <WebGalleryEntry
        preview={condgen3PreviewSrc}
        title="Conditional generator"
        url="/condgen3/"
    />
    <WebGalleryEntry
        preview={soloyyinProtoPreviewSrc}
        title="Soloyyin"
        url="/soloyyin.proto/"
    />
    <WebGalleryEntry
        preview={familyEmojiBuilderPreviewSrc}
        title="Family emoji builder"
        url="/family-emoji-builder/"
    />
    <WebGalleryEntry
        preview={r4itum2020PreviewSrc}
        title="ℝ⁴itum 2020"
        url="/r4itum/"
    />
</gallery->