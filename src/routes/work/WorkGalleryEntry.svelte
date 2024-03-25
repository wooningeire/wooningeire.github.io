<script lang="ts">
export let preview: string;
export let title: string;
export let url: string;
</script>

<a
    href={url}
    target="_blank"
>
    <work-gallery-entry>
        <image-container>
            <img
                src={preview}
                alt={title}
            />
        </image-container>
        <div>{title}</div>
    </work-gallery-entry>
</a>

<style lang="scss">
work-gallery-entry {
    display: flex;
    flex-flow: column;
    border: 2px solid currentcolor;
    padding: 0.625rem;
    gap: 0.625rem;
    max-width: 20ch;

    > image-container {
        padding: 0.625em;
        outline: 2px dashed currentcolor;
    }
}
</style>