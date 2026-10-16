<script lang="ts">
// 
const {role, company, start, end, responsibility, achievement1, achievement2} = $props();
</script>

<div
    class="bg-surface border-slate-800 p-6 rounded-xl space-y-3 hover:border-rust-orange border duration-300 transition-colors">
    <div
        class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono">
        <h3 class="text-lg font-bold text-white">
            {role} @ {company}
        </h3>
        <span
            class="flex text-xs wrap-break-word text-rust-orange font-bold text-center bg-rust-copper px-2.5 py-1 rounded w-fit border border-rust-orange">
            {start} — {end}
        </span>
    </div>
    <p class="text-slate-300 text-sm leading-relaxed">
        {responsibility}
    </p>
    <ul
        class="text-xs text-slate-400 space-y-1.5 list-disc list-inside font-mono">
        <li>
           {achievement1}
        </li>
        <li>
            {achievement2}
        </li>
    </ul>
</div>
