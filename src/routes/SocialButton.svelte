<script lang="ts">
export let text: string;
export let icon: string;
export let url: string;
</script>

<a
    href={url}
    target="_blank"
>
    <button>
        <img src={icon}
            alt={`${text} icon`} />
        {text}
    </button>
</a>

<style lang="scss">
a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
}

button {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    padding: 0.625rem;
}
</style>