<script lang="ts">
    import AnchorButton from "@/lib/Buttons/AnchorButton.svelte";
    import Button from "@/lib/Buttons/Button.svelte";
    import ButtonFiltered from "@/lib/Buttons/ButtonFiltered.svelte";
    import Card from "@/lib/Card/Card.svelte";
    import ProjectCard from "@/lib/Card/ProjectCard.svelte";
    import Footer from "@/lib/Footer/Footer.svelte";
    import Metrics from "@/lib/Sections/Metrics.svelte";
    import Section from "@/lib/Sections/Section.svelte";
    import Tag from "@/lib/Tag/Tag.svelte";
    import TimeLine from "@/Timeline/TimeLine.svelte";

    let activeFilter = $state("Any");

    const info1 =
        "Passionate about eliminating race conditions, minimizing overhead, and engineering resilient backend architectures.";

    const filters = ["Any", "Backend", "Systems", "Networking"];

    const projects = [
        {
            name: "RustOS",
            description: "Any operating System made with Rust.",
            tags: ["Systems"],
        },
        {
            name: "RustOS",
            description: "Any operating System made with Rust.",
            tags: ["Systems"],
        },
        {
            name: "APIServer",
            description: "A REST backend.",
            tags: ["Backend"],
        },
        {
            name: "PacketSniffer",
            description: "Network tool.",
            tags: ["Networking"],
        },
    ];

    let filteredProjects = $derived(
        activeFilter === "Any"
            ? projects
            : projects.filter((p) => p.tags.includes(activeFilter)),
    );
</script>

<main>
    <div
        class="fixed -top-40 -left-40 w-96 h-96 bg-rust-orange opacity-20 rounded-full blur-3xl pointer-events-none"
    ></div>
    <div
        class="fixed bottom-10 -right-40 w-96 h-96 bg-rust-orange opacity-20 rounded-full blur-3xl pointer-events-none"
    ></div>
    <div
        class="fixed -bottom-10 left-1/2 w-96 h-96 bg-rust-copper opacity-20 rounded-full blur-3xl pointer-events-none"
    ></div>

    <section
        id="hero"
        class="relative min-h-svh max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center"
    >
        <!-- Left Info Column -->
        <div class="w-full max-w-7xl mx-auto space-y-6 text-center">
            <!-- Tag / Status Badge -->
            <Tag text="Memory-Safe & High Performance Systems" />

            <!-- Main Headline -->
            <div class="space-y-2">
                <h2
                    class="font-mono text-rust-orange text-sm sm:text-base tracking-wider uppercase font-bold"
                >
                    fn get_developer() -> SystemsEngineer
                </h2>
                <h1
                    class="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight"
                >
                    Building <span
                        class="text-transparent bg-clip-text bg-linear-to-r from-rust-orange to-amber-500"
                        >blazing fast</span
                    >, concurrent systems
                </h1>
            </div>

            <p
                class="text-slate-400 font text-center text-base sm:text-lg max-w-7xl font-mono w-full leading-relaxed"
            >
                Rust Developer specializing in low-level systems architecture,
                high-frequency backend services, WebAssembly, and distributed
                infrastructure. Passionate about zero-cost abstractions and
                memory safety.
            </p>

            <!-- Action Buttons & Badges -->
            <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
                <a
                    href="#projects"
                    class="bg-rust-orange hover:bg-rust-copper-light text-white font-mono text-sm px-6 py-3 rounded-lg font-semibold border border-rust-copper transition-all shadow-lg hover:shadow-rust-copper flex items-center gap-2 group"
                >
                    <span>cargo run --bin projects</span>
                    <i
                        class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"
                    ></i>
                </a>

                <Button icon="envelope" href="#contact" text="contact.init()" />
            </div>

            <!-- Fast Metric Counters -->
            <div
                class="grid grid-cols-3 gap-4 pt-6 border-t-2 border-slate-800 font-mono"
            >
                <Metrics symbol=">" amount={7} metric="Yrs" text="Experience" />
                <Metrics symbol=">" amount={40} metric="+" text="Projects" />
                <Metrics symbol="<" amount={1} metric="ms" text="Latency" />
            </div>
        </div>
    </section>

    <Section section="hello" id={1} info={info1} title1="About" title2="Me">
        <div class="text-lg w-full font-primary md:text-body-text">
            <h1 class="text-md">
                Hello, I'm someone, a software engineer with 5 years experience
                in low-level programming. For the past 4 years rust has been my
                primary language of choice for building networking tools, and
                high performance applications.
            </h1>
        </div>

        <div class="mt-5 mb-10 md:text-body-text">
            <h1 class="text-slate-200">
                I specialize in navigating the intricacies of borrow checking,
                lifetime annotations, and concurrency primitives to build
                applications that operate with absolute stability under heavy
                load. Whether writing low-latency trading engine components,
                custom async runtimes, or WASM modules for browsers, my focus
                remains on safety, speed, and clean design
            </h1>
        </div>

        <!-- first row -->
        <div class="flex flex-col items-center md:flex-row gap-7">
            <Card>
                <div
                    class="flex flex-col items-center justify-center md:flex-row gap-7"
                >
                    <!-- ICON -->
                    <div
                        class="flex bg-rust-copper border border-rust-orange w-10 h-10 rounded-md justify-center items-center"
                    >
                        <i
                            class="fa-solid fa-microchip text-rust-orange text-md"
                        ></i>
                    </div>
                    <!-- TEXT -->
                </div>
                <div class="text-left">
                    <h1 class="font-mono font-bold text-lg">
                        Systems Architecture
                    </h1>
                    <p class="text-slate-400 text-sm">
                        Designing Async runtimes, Tokio-based Microservices, and
                        lock-free data structures
                    </p>
                </div>
            </Card>

            <Card>
                <div class="flex flex-col items-center">
                    <!-- ICON -->
                    <div
                        class="flex bg-rust-copper border border-orange-400 w-10 h-10 rounded-md justify-center items-center"
                    >
                        <i class="fa-solid fa-microchip text-orange-400 text-md"
                        ></i>
                    </div>
                    <!-- TEXT -->
                </div>
                <div class="text-left">
                    <h1 class="font-mono font-bold text-lg">
                        Systems Architecture
                    </h1>
                    <p class="text-slate-400 text-sm">
                        Designing Async runtimes, Tokio-based Microservices, and
                        lock-free data structures
                    </p>
                </div>
            </Card>
        </div>

        <!-- Second row -->
        <div class="flex flex-col items-center mt-7 md:flex-row gap-7">
            <Card>
                <div class="flex flex-col items-center">
                    <!-- ICON -->
                    <div
                        class="flex bg-rust-copper border border-rust-orange w-10 h-10 rounded-md justify-center items-center"
                    >
                        <i
                            class="fa-solid fa-microchip text-rust-orange text-md"
                        ></i>
                    </div>
                    <!-- TEXT -->
                </div>
                <div class="text-left">
                    <h1 class="font-mono font-bold text-lg">
                        Systems Architecture
                    </h1>
                    <p class="text-slate-400 text-sm">
                        Designing Async runtimes, Tokio-based Microservices, and
                        lock-free data structures
                    </p>
                </div>
            </Card>

            <Card>
                <div class="flex flex-col items-center">
                    <!-- ICON -->
                    <div
                        class="flex bg-rust-copper border border-orange-400 w-10 h-10 rounded-md justify-center items-center"
                    >
                        <i class="fa-solid fa-microchip text-orange-400 text-md"
                        ></i>
                    </div>
                    <!-- TEXT -->
                </div>
                <div class="text-left">
                    <h1 class="font-mono font-bold text-lg">
                        Systems Architecture
                    </h1>
                    <p class="text-slate-400 text-sm">
                        Designing Async runtimes, Tokio-based Microservices, and
                        lock-free data structures
                    </p>
                </div>
            </Card>
        </div>
    </Section>

    <Section
        section="Projects"
        id={2}
        info={info1}
        title1="Featured"
        title2="Projects"
    >
        <div
            id="filtered"
            class="grid grid-cols-2 place-items-center sm:flex justify-center gap-5 md:gap-10 my-5"
        >
            {#each filters as filter}
                <ButtonFiltered
                    text={filter}
                    href="##"
                    active={activeFilter === filter}
                    onclick={() => (activeFilter = filter)}
                />
            {/each}
        </div>

        <div class="grid md:grid-cols-2 justify-center items-center gap-5">
            {#each filteredProjects as project}
                <ProjectCard
                    name={project.name}
                    description={project.description}
                    tags={project.tags}
                />
            {/each}
        </div>
    </Section>

    <Section
        section="Projects"
        id={3}
        info={info1}
        title1="Work"
        title2="Experience"
    >
        <TimeLine />
    </Section>

    <Footer />
</main>
