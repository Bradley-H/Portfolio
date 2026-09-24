<script lang="ts">
    import Button from "@/lib/Buttons/Button.svelte";
    import Card from "@/lib/Card/Card.svelte";
    import Metrics from "@/lib/Sections/Metrics.svelte";
    import Section from "@/lib/Sections/Section.svelte";

    const info1 =
        "Passionate about eliminating race conditions, minimizing overhead, and engineering resilient backend architectures.";
</script>

<main>
    <div
        class="fixed -top-40 -left-40 w-96 h-96 bg-rust-orange opacity-20 rounded-full blur-3xl pointer-events-none"></div>
    <div class="fixed bottom-10 -right-40 w-96 h-96 bg-rust-orange opacity-20 rounded-full blur-3xl pointer-events-none"></div>
    <div class="fixed -bottom-10 left-1/2 w-96 h-96 bg-rust-copper opacity-20 rounded-full blur-3xl pointer-events-none"></div>

    <section
        id="hero"
        class="relative min-h-svh max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <!-- Left Info Column -->
        <div class="w-full max-w-7xl mx-auto space-y-6 text-center">
            <!-- Tag / Status Badge -->
            <div
                class="inline-flex items-center space-x-2 bg-rust-copper font-bold border border-rust-orange px-3 py-1.5 rounded-md font-mono text-xs text-rust-orange"
            >
                <i class="fa-solid fa-shield-halved"></i>
                <span>Memory-Safe & High Performance Systems</span>
            </div>

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
                class="grid grid-cols-3 gap-4 pt-6 border-t-2 border-slate-800/80 font-mono"
            >
                <Metrics symbol=">" amount={7} metric="Yrs" text="Experience" />
                <Metrics symbol=">" amount={40} metric="+" text="Projects" />
                <Metrics
                    symbol="<"
                    amount={1}
                    metric="ms"
                    text="Latency Focus"
                />
            </div>
        </div>
    </section>

    <Section section="hello" id={1} info={info1} title1="About" title2="Me">
        <div class="text-lg w-full font-primary md:text-body-text">
            <h1>
                Hello, I'm someone, a software engineer with 5 years
                experience in low-level programming. For the past 4 years rust has been my primary language of choice
                for building networking tools, and high performance
                applications.
            </h1>
        </div>

        <div class="mt-5 mb-10 md:text-body-text">
            <p class="text-slate-200">
                I specialize in navigating the intricacies of borrow checking,
                lifetime annotations, and concurrency primitives to build
                applications that operate with absolute stability under heavy
                load. Whether writing low-latency trading engine components,
                custom async runtimes, or WASM modules for browsers, my focus
                remains on safety, speed, and clean design
            </p>
        </div>


            <!-- first row -->
            <div class="flex flex-col md:flex-row gap-7">
                 <Card>
            <div class="flex flex-col items-center">
            <!-- ICON -->
                    <div class="flex bg-rust-copper border border-rust-orange w-10 h-10 rounded-md justify-center items-center">
                    <i class="fa-solid fa-microchip text-rust-orange text-md"></i>
                </div>
                <!-- TEXT -->
            </div>  
            <div class="text-left">
                <h1 class="font-mono font-bold text-lg">Systems Architecture</h1>
                <p class="text-slate-400 text-sm">Designing Async runtimes, Tokio-based Microservices, and lock-free data structures</p> 
            </div>
            </Card>

          <Card>
            <div class="flex flex-col items-center">
            <!-- ICON -->
                    <div class="flex bg-rust-copper border border-orange-400 w-10 h-10 rounded-md justify-center items-center">
                    <i class="fa-solid fa-microchip text-orange-400 text-md"></i>
                </div>
                <!-- TEXT -->
            </div>  
            <div class="text-left">
                <h1 class="font-mono font-bold text-lg">Systems Architecture</h1>
                <p class="text-slate-400 text-sm">Designing Async runtimes, Tokio-based Microservices, and lock-free data structures</p> 
            </div>
            </Card>
            </div>



            <!-- Second row -->
            <div class="flex flex-col mt-7 md:flex-row gap-7 ">
                     <Card>
            <div class="flex flex-col items-center">
            <!-- ICON -->
                    <div class="flex bg-rust-copper border border-rust-orange w-10 h-10 rounded-md justify-center items-center">
                    <i class="fa-solid fa-microchip text-rust-orange text-md"></i>
                </div>
                <!-- TEXT -->
            </div>  
            <div class="text-left">
                <h1 class="font-mono font-bold text-lg">Systems Architecture</h1>
                <p class="text-slate-400 text-sm">Designing Async runtimes, Tokio-based Microservices, and lock-free data structures</p> 
            </div>
            </Card>

            <Card>
            <div class="flex flex-col items-center">
            <!-- ICON -->
                    <div class="flex bg-rust-copper border border-orange-400 w-10 h-10 rounded-md justify-center items-center">
                    <i class="fa-solid fa-microchip text-orange-400 text-md"></i>
                </div>
                <!-- TEXT -->
            </div>  
            <div class="text-left">
                <h1 class="font-mono font-bold text-lg">Systems Architecture</h1>
                <p class="text-slate-400 text-sm">Designing Async runtimes, Tokio-based Microservices, and lock-free data structures</p> 
            </div>
            </Card>
            </div>
             
    </Section>
    <!-- <Section section="hello" id={2} /> -->
</main>
