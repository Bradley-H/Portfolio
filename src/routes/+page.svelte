<script lang="ts">
    import AnchorButton from "@/lib/Buttons/AnchorButton.svelte";
    import Button from "@/lib/Buttons/Button.svelte";
    import ButtonFiltered from "@/lib/Buttons/ButtonFiltered.svelte";
    import Card from "@/lib/Card/Card.svelte";
    import ProjectCard from "@/lib/Card/ProjectCard.svelte";
    import Metrics from "@/lib/Sections/Metrics.svelte";
    import Section from "@/lib/Sections/Section.svelte";
    import Tag from "@/lib/Tag/Tag.svelte";
    import TimeLine from "@/Timeline/TimeLine.svelte";

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
            <Tag text="Memory-Safe & High Performance Systems"/>

            <!-- Main Headline -->
            <div class="space-y-2">
                <h2
                    class="font-mono text-rust-orange text-sm sm:text-base tracking-wider uppercase font-bold"
                >
                    fn get_developer() -> SystemsEngineer
                </h2>
                <h1
                    class="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
                    Building <span
                        class="text-transparent bg-clip-text bg-linear-to-r from-rust-orange to-amber-500"
                        >blazing fast</span>, concurrent systems
                </h1>
            </div>

            <p class="text-slate-400 font text-center text-base sm:text-lg max-w-7xl font-mono w-full leading-relaxed">
                Rust Developer specializing in low-level systems architecture,
                high-frequency backend services, WebAssembly, and distributed
                infrastructure. Passionate about zero-cost abstractions and
                memory safety.
            </p>

            <!-- Action Buttons & Badges -->
            <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
                <a
                    href="#projects"
                    class="bg-rust-orange hover:bg-rust-copper-light text-white font-mono text-sm px-6 py-3 rounded-lg font-semibold border border-rust-copper transition-all shadow-lg hover:shadow-rust-copper flex items-center gap-2 group">
                    <span>cargo run --bin projects</span>
                    <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                </a>

                <Button icon="envelope" href="#contact" text="contact.init()" />
            </div>

            <!-- Fast Metric Counters -->
            <div
                class="grid grid-cols-3 gap-4 pt-6 border-t-2 border-slate-800 font-mono">
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



    <Section  section="Projects" id={2} info={info1} title1="Featured" title2="Projects">
        <div id="filtered" class="flex justify-center gap-10 mb-10">
            <ButtonFiltered text="Any" href="##"/>
            <ButtonFiltered text="Backend" href="##"/>
            <ButtonFiltered text="Systems" href="##"/>
            <ButtonFiltered text="Networking" href="##"/>
        </div>
        <div class="flex flex-col md:flex-row w-full justify-center items-center gap-5">
            <ProjectCard name="RustOS" description="Any operating System made with Rust."/>
            <ProjectCard name="RustOS" description="Any operating System made with Rust."/>
            <ProjectCard name="RustOS" description="Any operating System made with Rust."/>
        </div>
    </Section>


    <Section section="Projects" id={3} info={info1} title1="Work" title2="Experience">
        <TimeLine/>
    </Section>


    <Section section="Contact" id={4} info={info1} title1="Initate" title2="Channel">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div class="max-w-4xl mx-auto bg-darkcard border border-slate-800 rounded-2xl overflow-hidden shadow-2xl rust-glow">
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        
                        <!-- Left Info Panel -->
                        <div class="p-8 bg-slate-900/90 border-b md:border-b-0 md:border-r border-slate-800 flex flex-col justify-between space-y-8">
                            <div class="space-y-4">
                                <div class="font-mono text-rust-500 text-xs">// 05. TRANSMIT</div>
                                <h2 class="text-2xl sm:text-3xl font-extrabold text-white">
                                    Initiate <span class="text-rust-500">Channel</span>
                                </h2>
                                <p class="text-slate-400 text-sm leading-relaxed">
                                    Interested in collaborating on high-performance Rust systems, consulting, or speaking engagements? Drop a message below.
                                </p>
                            </div>

                            <div class="space-y-4 font-mono text-xs">
                                <div class="flex items-center space-x-3 text-slate-300">
                                    <div class="w-8 h-8 rounded bg-rust-950 border border-rust-800 flex items-center justify-center text-rust-500">
                                        <i class="fa-solid fa-envelope"></i>
                                    </div>
                                    <span>alex.rivera@rustdev.io</span>
                                </div>
                                <div class="flex items-center space-x-3 text-slate-300">
                                    <div class="w-8 h-8 rounded bg-rust-950 border border-rust-800 flex items-center justify-center text-rust-500">
                                        <i class="fa-solid fa-location-dot"></i>
                                    </div>
                                    <span>San Francisco, CA (Remote)</span>
                                </div>
                                <div class="flex items-center space-x-3 text-slate-300">
                                    <div class="w-8 h-8 rounded bg-rust-950 border border-rust-800 flex items-center justify-center text-rust-500">
                                        <i class="fa-solid fa-key"></i>
                                    </div>
                                    <span>PGP Key: <span class="text-slate-500">0x4F89A2E1</span></span>
                                </div>
                            </div>

                            <div class="flex items-center space-x-4 text-lg text-slate-400">
                                <a href="##" class="hover:text-rust-400 transition-colors" title="GitHub"><i class="fa-brands fa-github"></i></a>
                                <a href="##" class="hover:text-rust-400 transition-colors" title="Twitter / X"><i class="fa-brands fa-x-twitter"></i></a>
                                <a href="##" class="hover:text-rust-400 transition-colors" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
                                <a href="##" class="hover:text-rust-400 transition-colors" title="Discord"><i class="fa-brands fa-discord"></i></a>
                            </div>
                        </div>

                        <!-- Right Contact Form -->
                        <div class="p-8 bg-[#1a1E24]/90">
                            <form id="contact-form" class="space-y-4 font-mono">
                                <div>
                                    <label for="name" class="block text-xs text-slate-400 mb-1">sender_name:</label>
                                    <input id="name" type="text" placeholder="Ferris User" class="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-rust-500 transition-colors">
                                </div>

                                <div>
                                    <label for="email" class="block text-xs text-slate-400 mb-1">return_address (email):</label>
                                    <input id="email" type="email" placeholder="user@domain.com" class="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-rust-500 transition-colors">
                                </div>

                                <div>
                                    <label for="msg" class="block text-xs text-slate-400 mb-1">payload (message):</label>
                                    <textarea id="msg" rows="4" placeholder="Write your message here..." class="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-rust-500 transition-colors resize-none"></textarea>
                                </div>

                                <button type="submit" class="w-full bg-rust-orange hover:bg-rust-500 text-white font-mono text-sm py-3 rounded-lg font-semibold border border-rust-copper transition-all flex items-center justify-center space-x-2 group">
                                    <i class="fa-solid fa-paper-plane text-xs"></i>
                                    <span>send_packet()</span>
                                </button>
                            </form>

                            <!-- Success Modal / Alert inside Form -->
                            <div id="contact-success" class="hidden mt-4 p-3 bg-emerald-950/80 border border-emerald-600/50 rounded-lg font-mono text-xs text-emerald-300 text-center">
                                <i class="fa-solid fa-circle-check text-emerald-400 mr-1"></i> Packet received! I'll get back to you shortly.
                            </div>
                        </div>

                    </div>
                </div>

            </div>
    </Section>
    
</main>
