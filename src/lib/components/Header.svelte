<script>
    let links = [
        {"name": "Home", "url": "/"},
        {"name": "About", "url": "/about"},
        {"name": "Events", "url": "/events"},
        {"name": "Initiatives", "url": "/initiatives"},
        {"name": "News", "url": "/news"},
        {"name": "Contact", "url": "/contact"},
    ]
</script>


<header>
    <div class="container">
    <nav class="row align-items-center py-3">
        <div class="col">
            <h1><a href="/" sveltekit:prefetch>Cooperation Plano</a></h1>
        </div><!-- end col -->

        <div class="col-auto nav-links">
            {#each links as link}
                <a href={link.url} class="btn font-header" sveltekit:prefetch>{link.name}</a>
            {/each}
        </div><!-- end col -->
    </nav><!-- end row -->
    </div><!-- end container -->
</header>


<style>
    header {
        background-color: var(--primary-color);
    }
    h1 {
        font-weight: 700;
        margin: 0;
    }

    h1 a {
        text-decoration: none;
        color: #fff;
    }

    .nav-links a {
        font-weight: 600;
        color: #fff;
    }
</style>
