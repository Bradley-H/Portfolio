<script lang="ts">
    // 
</script>


<article>
    <div class="w-full max-w-full min-w-0 lg:w-120 xl:w-[33.75rem]">
    <div class="bg-gray-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl rust-glow transition-all flex flex-col">
        
        <!-- Window Header -->
        <div class="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between shrink-0">
            <div class="flex items-center space-x-2">
                <div class="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div class="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div class="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                <span class="ml-2 font-mono text-xs text-slate-400">developer.rs</span>
            </div>
            <div class="flex items-center space-x-2 font-mono text-xs text-slate-500">
                <i class="fa-solid fa-code"></i>
                <span>UTF-8</span>
            </div>
        </div>

        <!-- Code Container (Height & Width Constrained) -->
        <div class="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto overflow-y-auto max-h-125 min-w-0 text-slate-200">
            <pre class="w-full min-w-0 whitespace-pre-wrap wrap-break-word"><code><span class="code-comment">// Welcome to my Rust Portfolio</span>
<span class="code-keyword">use</span> std::sync::&#123;Arc, Mutex&#125;;
<span class="code-keyword">use</span> tokio::prelude::*;

<span class="code-macro">#[derive(Debug, Clone)]</span>
<span class="code-keyword">pub struct</span> <span class="code-type">Engineer</span> &#123;
    <span class="code-keyword">pub</span> name: &amp;<span class="code-type">'static</span> <span class="code-type">str</span>,
    <span class="code-keyword">pub</span> role: &amp;<span class="code-type">'static</span> <span class="code-type">str</span>,
    <span class="code-keyword">pub</span> core_stack: [<span class="code-type">&amp;'static str</span>; <span class="code-num">4</span>],
    <span class="code-keyword">pub</span> memory_safe: <span class="code-type">bool</span>,
&#125;

<span class="code-keyword">impl</span> <span class="code-type">Engineer</span> &#123;
    <span class="code-keyword">pub fn</span> <span class="code-fn">new</span>() -&gt; <span class="code-type">Self</span> &#123;
        <span class="code-type">Self</span> &#123;
            name: <span class="code-string">"Alex Rivera"</span>,
            role: <span class="code-string">"Rust &amp; Distributed Systems"</span>,
            core_stack: [
                <span class="code-string">"Rust"</span>, <span class="code-string">"Tokio"</span>,
                <span class="code-string">"WebAssembly"</span>, <span class="code-string">"gRPC"</span>
            ],
            memory_safe: <span class="code-keyword">true</span>,
        &#125;
    &#125;

    <span class="code-keyword">pub async fn</span> <span class="code-fn">deploy</span>(&amp;<span class="code-keyword">self</span>) -&gt; <span class="code-type">Result</span>&lt;(), <span class="code-type">Error</span>&gt; &#123;
        <span class="code-macro">println!</span>(<span class="code-string">"Deploying zero-cost abstractions..."</span>);
        <span class="code-keyword">Ok</span>(())
    &#125;
&#125;</code></pre>
        </div>

        <!-- Terminal Interactive Footer Output -->
        <div class="bg-slate-950 px-4 py-3 border-t border-slate-800/80 font-mono text-xs flex items-center justify-between flex-wrap gap-2 text-slate-400 shrink-0">
            <div class="flex items-center space-x-2 min-w-0 max-w-full">
                <span class="text-rust-500 font-bold shrink-0">$</span>
                <span id="hero-typing" class="typing-cursor text-slate-300 truncate">cargo run --release</span>
            </div>
            <button id="run-code-btn" class="bg-rust-950 border border-rust-700/60 hover:border-rust-500 text-rust-300 hover:text-white px-2.5 py-1 rounded transition-colors text-[11px] flex items-center gap-1 shrink-0">
                <i class="fa-solid fa-play text-[9px] text-rust-500"></i> Run
            </button>
        </div>
    </div>
</div>
</article>