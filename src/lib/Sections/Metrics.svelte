<script lang="ts">
    interface metricType {
        symbol: String,
        amount: number,
        metric: String,
        text: String
    }

    const {symbol, amount, metric, text} = $props();

</script>

<div class="text-center">
    <div class="text-2xl font-bold text-white flex items-center justify-center">
        <span class="text-rust-orange">{symbol}</span>{amount}<span class="text-amber-500">
            {metric}
        </span>
    </div>
    <div class="text-xs text-slate-500 font-bold md:text-xl mt-1">
        <h4>{text}</h4>
    </div>
</div>
