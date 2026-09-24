<script lang="ts">
    const {children} = $props();
</script>

<div class="bg-card w-full rounded-2xl p-6 max-w-3xl shadow-lg flex flex-col border-2 border-slate-800 hover:border-rust-orange transition-colors duration-400">
    {@render children()}
</div>