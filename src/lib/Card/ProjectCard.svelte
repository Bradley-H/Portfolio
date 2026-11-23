<script lang="ts">
  import ProjectTags from "../Tag/ProjectTags.svelte";
  import Tag from "../Tag/Tag.svelte";
  import Card from "./Card.svelte";
  import TerminalCard from "./TerminalCard.svelte";

  type Props = {
    name: string;
    description: string;
    tags?: string[];
    github?: string | null;
  };

  const {
    name,
    description,
    tags = [],
    github = null,
  }: Props = $props();
</script>

<Card>
  <div class="flex w-full items-start">
    <!-- Primary category / first tag -->
    {#if tags.length > 0}
      <Tag text={tags[0]} />
    {/if}

    {#if github}
      <div class="flex ml-auto">
        <a href={github} aria-label="View source on GitHub" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands text-3xl fa-github"></i>
        </a>
      </div>
    {/if}
  </div>

  <div class="flex flex-col my-3">
    <h1 class="text-white text-2xl text-left mb-5">{name}</h1>
    <p class="text-slate-400 text-left">{description}</p>
  </div>

  <div class="flex flex-col gap-5 text-left">
    <TerminalCard />
    <div class="flex items-center gap-3 justify-center">
      <ProjectTags text="Networking" />
      <ProjectTags text="Tokio"/>
      <ProjectTags text="Async"/>
    </div>
  </div>
</Card>