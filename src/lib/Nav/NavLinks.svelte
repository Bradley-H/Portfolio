<script lang="ts">
    const { href, id, text } = $props();
</script>

<a
    {href}
    class="px-3 py-2 text-slate-300 hover:text-rust-orange hover:bg-slate-800/50 rounded-md transition-all"
>
    <span class="text-rust-orange text-xs mr-1 hover:text-rust-copper"
        >0{id}.</span
    >//{text}
</a>
