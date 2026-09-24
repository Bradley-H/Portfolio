<script lang="ts">
    import Navbar from '@/lib/Nav/Navbar.svelte';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" /></svelte:head>
<Navbar/>
{@render children()}

