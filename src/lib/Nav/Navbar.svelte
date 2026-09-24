<script lang="ts">
    import Button from "../Buttons/Button.svelte";
    import HamburgerMenu from "./HamburgerMenu.svelte";
    import NavLinks from "./NavLinks.svelte";
    import { LINKS } from "@/global/global.svelte";
</script>

<header
    class="h-16 w-full  border-2 border-b-border-subtle border-t-0 border-x-0 z-10 bg-bg-base
            flex fixed top-0 backdrop-blur-lg opacity-95
            ">
    <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div class="w-24">
            <a
                href="##"
                aria-label="anchor"
                class="flex items-center space-x-1 group">
                <div
                    class="relative min-w-10 h-9 flex items-center justify-center bg-rust-copper border border-rust-copper-light rounded-lg group-hover:border-rust-orange transition-colors">
                    <i
                        class="fa-solid fa-gear text-rust-orange text-lg animate-spin-slow"></i>
                    <span
                        class="absolute text-xs font-bold font-mon translate-x-0.4 translate-y-0.4">R</span>
                </div>
                <div class="font-mono flex md:flex-col lg:flex-row">
                    <span class="text-white font-bold tracking-wider"
                        >FERRIS</span>
                    <span class="text-rust-orange font-medium">.rs</span>
                </div>
            </a>
        </div>

        <!-- LINKS -->
        <nav
            class="hidden md:flex items-center justify-center space-x-1 font-mono text-sm md:ml-5 lg:ml-10">
            {#each LINKS as link (link.id)}
                <NavLinks {...link} />
            {/each}

            <div class="flex justify-center items-center lg:ml-5">
               <Button text="Hire me()" type="primary"/>
            </div>
        </nav>
    </div>

    <aside class="grid items-center mr-10">
        <HamburgerMenu />
    </aside>
</header>
