<script lang="ts">
  type Props = {
    text: string;
    href?: string | null;
    icon?: string | null;
    active?: boolean;
    onclick?: () => void;
  };

  const {
    text,
    href = null,
    icon = null,
    active = false,
    onclick = () => {},
  }: Props = $props();
</script>

<button
  type="button"
  class="bg-slate-900 hover:bg-rust-orange text-slate-300 hover:text-white font-mono
         text-sm px-6 py-2 rounded-lg font-medium border-2 transition-all
         duration-400 w-28 sm:w-32
         flex items-center justify-center gap-2
         hover:border-rust-orange
         {active
           ? 'bg-rust-orange border-rust-copper text-white'
           : 'border-slate-700'}"
  aria-pressed={active}
  {onclick}
>
  {#if icon}
    <i class={`fa-regular fa-${icon}`}></i>
  {/if}
  {text}
</button>