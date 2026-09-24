<script lang="ts">
    const { text, href = null, icon = null } = $props();
</script>

<button
    class="bg-slate-900 hover:bg-rust-orange text-slate-300 hover:text-white font-mono
            text-sm px-6 py-2 rounded-lg font-medium border-2 border-slate-700 transition-all
            duration-400
            flex items-center active:bg-rust-orange active:border-rust-copper hover:border-rust-orange">
    <i class="fa-regular fa-{icon}"></i>
    {text}
</button>
