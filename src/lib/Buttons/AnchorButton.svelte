<script lang="ts">
    const { text, href = null, icon = null } = $props();
</script>

<a
    {href}
    class="bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-mono
            text-sm px-6 py-2 rounded-lg font-medium border-2 border-slate-700 transition-all
            flex items-center active:bg-rust-orange">
    <i class="fa-regular fa-{icon}"></i>
    {text}
</a>
