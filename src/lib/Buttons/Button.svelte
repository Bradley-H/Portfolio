<script lang="ts">
    const { type="secondary", text, href = null, icon = null } = $props();
</script>


{#if type == "primary"}
<button
    class="bg-rust-orange font-bold hover:bg-rust-copper-light text-white font-mono
                 text-xs px-3 py-2 rounded-md border border-rust-copper transition-all shadow-sm
                 hover:shadow-rust-copper active:translate-y-0.5">
    {text}
    {#if icon}
        <i class="fa-regular fa-{icon}"></i>
    {/if}
</button>
{:else}
<button
    class="bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-mono
            text-sm px-6 py-3 rounded-lg font-medium border border-slate-700 transition-all
            flex items-center gap-2">
    {text}
    <i class="fa-regular fa-{icon}"></i>
</button>
{/if}