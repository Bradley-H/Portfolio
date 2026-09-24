<script lang="ts">
  import NavLinks from "./NavLinks.svelte";
  import { LINKS } from "@/global/global.svelte";
  let isOpen = $state(false);

  function toggleMenu() {
    isOpen = !isOpen;
  }

  function closeMenu() {
    isOpen = false;
  }
</script>

<button
  type="button"
  class="relative z-60 ml-auto shrink-0 flex h-10 w-10 items-center justify-center rounded-md border border-slate-700 bg-slate-900/60 text-slate-200 hover:border-slate-500 hover:text-rust-orange md:hidden"
  aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
  aria-expanded={isOpen}
  onclick={toggleMenu}
>
  <span class="sr-only">Toggle menu</span>
  <span class="flex h-5 w-5 flex-col items-center justify-center gap-1">
    <span
      class={`block h-0.5 w-5 rounded-full bg-current transition-all duration-200 origin-center ${
        isOpen ? "translate-y-1.5 rotate-45" : "translate-y-0"}`}
    ></span>
    <span
      class={`block h-0.5 w-5 rounded-full bg-current transition-all duration-200 origin-center ${
        isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"}`}
    ></span>
    <span
      class={`block h-0.5 w-5 rounded-full bg-current transition-all duration-200 origin-center ${
        isOpen ? "-translate-y-1.5 -rotate-45" : "translate-y-0"}`}></span>
  </span>
</button>

<div
  id="mobile-menu"
  class="fixed flex flex-col right-0 top-0 z-50 h-screen w-72 border-l border-slate-800 bg-bg-base/95 px-4 pb-4 pt-16 font-mono text-sm shadow-lg shadow-slate-950/20 backdrop-blur-md transition-transform duration-300 ease-in-out md:hidden"
  class:translate-x-full={!isOpen}
  class:translate-x-0={isOpen}
>
  {#each LINKS as links}
    <NavLinks {...links} />
  {/each}
</div>
