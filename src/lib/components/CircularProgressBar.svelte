<script>
    // Courtesy of https://dev.to/alvaromontoro/comment/1j2o1

    export let stage = 0;

    let percentComplete = Math.round((stage / 5) * 100);
</script>


<div role="progressbar"
     aria-valuenow={percentComplete}
     aria-valuemin="0"
     aria-valuemax="100"
     style="--value:{percentComplete}"></div>


<style>
    @keyframes growProgressBar {
        0%, 33% { --pgPercentage: 0; }
        100% { --pgPercentage: var(--value); }
    }

    @property --pgPercentage {
        syntax: '<number>';
        inherits: false;
        initial-value: 0;
    }

    div[role="progressbar"] {
        --size: 4rem;
        --fg: var(--primary-color);
        --bg: #def;
        --pgPercentage: var(--value);
        animation: growProgressBar 3s 1 forwards;
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        display: grid;
        place-items: center;
        background: radial-gradient(closest-side, white 70%, transparent 0 99.9%, white 0), conic-gradient(var(--fg) calc(var(--pgPercentage) * 1%), var(--bg) 0);
        font-family: Helvetica, Arial, sans-serif;
        font-size: 16px;
        color: var(--fg);
    }

    div[role="progressbar"]::before {
        counter-reset: percentage var(--value);
        content: counter(percentage) '%';
    }
</style>