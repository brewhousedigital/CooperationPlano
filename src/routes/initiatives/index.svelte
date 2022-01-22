<script>
    import InititativeBlock from "$lib/components/InititativeBlock.svelte";

    let initiatives = [
        {"name": "Co-op Grocery", "stage": 1, "image": "initiative-coop-grocery.jpg", "url": "#"},
        {"name": "Community HOA", "stage": 1, "image": "initiative-neighborhood-hoa.jpg", "url": "#"},
        {"name": "Downtown Pedestrian Zone", "stage": 2, "image": "initiative-downtown-pedestrian-zone.jpg", "url": "#"},
        {"name": "Neighborhood Businesses", "stage": 3, "image": "initiative-neighborhood-business.jpg", "url": "#"},
        {"name": "Drinking Fountain Map", "stage": 3, "image": "initiative-drinking-fountains.jpg", "url": "#"},
        {"name": "New Library Resources", "stage": 4, "image": "initiative-library.jpg", "url": "#"},
        {"name": "New Rec Center Programs", "stage": 5, "image": "initiative-rec-center.jpg", "url": "#"},
    ];


</script>


<div class="container py-4">
    <h2 class="display-1 mb-5">Initiatives</h2>

    <div class="row">
        {#each initiatives as initiative}
            {#if initiative.stage < 5}
                <InititativeBlock {initiative} />
            {/if}
        {/each}
    </div><!-- end row -->



    <h2 class="display-1 mb-5 fst-italic">Completed Initiatives</h2>

    <div class="row">
        {#each initiatives as initiative}
            {#if initiative.stage === 5}
                <InititativeBlock {initiative} />
            {/if}
        {/each}
    </div><!-- end row -->
</div><!-- end container -->


