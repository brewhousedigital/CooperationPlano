<script>
    export let initiative = {};

    import CircularProgressBar from "$lib/components/CircularProgressBar.svelte";

    let stageText = "";

    switch (initiative.stage) {
        case 1: stageText = "Brainstorming"; break;
        case 2: stageText = "Planning"; break;
        case 3: stageText = "Open Forum"; break;
        case 4: stageText = "Published to City Hall"; break;
        case 5: stageText = "Completed"; break;
    }
</script>


<div class="initiative-container col-lg-4 position-relative">
    <img src="/images/initiatives/{initiative.image}"
         class="d-block img-fluid"
         width="410"
         height="275"
         alt={initiative.name}>

    <div class="initiative-stage-block mb-4">
        <div class="initiative-stage-block-content shadow">
            <div class="d-flex align-items-center">
                <div class="col-auto initiative-stage-block-progress-bar">
                    <CircularProgressBar stage={initiative.stage} />
                </div><!-- end col -->

                <div class="col ps-3 text-start">
                    <p class="mb-0 fw-bold">Stage {initiative.stage}</p>
                    <p class="mb-0">{stageText}</p>
                </div><!-- end col -->
            </div><!-- end d-flex -->
        </div><!-- end stage block -->
    </div><!-- end text end -->

    <h3 class="fw-bold">{initiative.name}</h3>

    <a href={initiative.url} class="stretched-link">Learn More</a>
</div>


<style>
    .initiative-container {
        margin-bottom: 75px;
    }
    .initiative-stage-block {
        margin-top: -60px;
        margin-right: 20px;
        text-align: right;

    }

    .initiative-stage-block-content {
        border-radius: 8px;
        background-color: #fff;
        padding: 12px 20px;
        display: inline-block;
    }
</style>