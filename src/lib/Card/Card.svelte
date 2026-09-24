<script lang="ts">
    const {children} = $props();
</script>

<div class="bg-card w-full rounded-2xl p-6 max-w-md shadow-lg flex flex-col border border-slate-800 hover:border-rust-orange transition-colors duration-400">
    {@render children()}
</div>