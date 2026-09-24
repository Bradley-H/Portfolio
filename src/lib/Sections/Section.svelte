<script lang="ts">
    import SectionTemplate from "./SectionTemplate.svelte";

    interface sectionType {
        id: number
        section: String
        title1: String
        title2: String
        info: String,
        children: any;
    }

    const {id, section, title1, title2, info, children}: sectionType = $props();
    const even = $derived(id % 2 === 0);
</script>


<SectionTemplate>

    {#if !even}
         <div class="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                
                <div class="flex flex-col md:flex-row items-start justify-between gap-12">
                    
                    <!-- Left Section Title -->
                    <div class="w-full sm:w-2/3">
                        <div class="sticky top-24 space-y-3">
                            <div class="font-mono text-rust-orange text-sm font-bold">// 0{id}. {section.toUpperCase()}</div>
                            <h2 class="text-3xl sm:text-4xl font-extrabold text-white">
                                {title1} <span class="text-rust-orange">{title2}</span>
                            </h2>
                            <div class="w-23 h-2 bg-rust-orange rounded"></div>
                            <p class="text-slate-400 text-sm md:text-code leading-relaxed max-w-md">
                                {info}
                            </p>
                        </div>
                    </div>

                    <div>
                    {@render children()}
                </div></div>
                </div>

                
    {:else}
         <div class="text-center max-w-2xl mx-auto space-y-3">

    <div class="font-mono text-rust-500 text-sm">
        <h2 class="font-extrabold text-rust-orange">//0{id}. {section.toUpperCase()}</h2>
    </div>

    <h2 class="text-3xl sm:text-4xl font-extrabold text-white">1
        <span class="text-rust-orange">2</span>
    </h2>


<!-- {@render children()} -->
 </div>
    {/if}



                   
</SectionTemplate>