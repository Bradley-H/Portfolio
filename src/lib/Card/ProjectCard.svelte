<script lang="ts">
    import ProjectTags from "../Tag/ProjectTags.svelte";
    import Tag from "../Tag/Tag.svelte";
    import Card from "./Card.svelte";
    import TerminalCard from "./TerminalCard.svelte";

    const {name, description} = $props();
</script>



<Card>
<div class="flex w-full">
    <Tag text="Systems"/>
    <div class="flex ml-auto">
        <a href="##" aria-label="button">
            <i class="fa-brands text-3xl fa-github"></i>
        </a>
    </div>
</div>

<div class="flex flex-col my-3">
    <h1 class="text-white text-2xl text-left mb-5">{name}</h1>
    <p class="text-slate-400 text-left">{description}</p>
</div>

<div class="flex flex-col gap-5 text-left">
    <TerminalCard/>
    <div>
        <ProjectTags/>
        <ProjectTags/>
        <ProjectTags/>
    </div>
</div>
</Card>