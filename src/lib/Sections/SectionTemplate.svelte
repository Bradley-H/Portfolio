<script lang="ts">

    const {children} = $props();
</script>

<section class="h-full w-full py-25 border-t border-slate-800/60 odd:bg-slate-950/40 opacity-90">
    {@render children()}
</section>