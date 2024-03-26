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
    width: 20ch;
    font-size: 1.5rem;
    background: currentcolor;

    > image-container {
        > img {
            width: 100%;
            aspect-ratio: 2560/1600;
        }
    }

    > entry-title {
        color: #fff;
        font-weight: 700;
    }
}

a {
    color: inherit;
}

button {
    padding: 0;
}
</style>