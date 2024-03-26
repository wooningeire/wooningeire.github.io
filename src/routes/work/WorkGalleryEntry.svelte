<script lang="ts">
export let preview: string;
export let title: string;
export let url: string;
</script>

<a
    href={url}
    target="_blank"
    tabindex="-1"
>
    <button>
        <work-gallery-entry>
            <image-container>
                <img
                    src={preview}
                    alt={title}
                />
            </image-container>
            <entry-title>{title}</entry-title>
        </work-gallery-entry>
    </button>
</a>

<style lang="scss">
work-gallery-entry {
    display: flex;
    flex-flow: column;
    gap: 0.625rem;
    width: 20ch;
    font-size: 1.5rem;

    > image-container {
        padding: 0.625em;
        outline: 2px dashed currentcolor;

        > img {
            width: 100%;
            box-shadow: 0 4px 32px -16px currentcolor;
            aspect-ratio: 2560/1600;
        }
    }
}

a {
    color: inherit;
}
</style>