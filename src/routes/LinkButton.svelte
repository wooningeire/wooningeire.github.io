<script lang="ts">
export let text: string;
export let icon: string = "";
export let url: string;
export let newTab: boolean = false;
</script>

<a
    href={url}
    target={newTab ? "_blank" : ""}
    tabindex="-1"
>
    <button>
        {#if icon}
        <img
            src={icon}
            alt={`${text} icon`}
        />
        {/if}
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
}
</style>