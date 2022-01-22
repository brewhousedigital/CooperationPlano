<script>

</script>


<div class="header-bg position-relative">
    <div class="container">
        <h2>Welcome,</h2>
        <h3>We're a Plano based organization working hard to improve the city for all</h3>
    </div><!-- end container -->

    <div class="photo-bg shadow">
        <img src="/images/homepage-header-plano-image.png" alt="Downtown view of The City of Plano" class="img-fluid">
        <div class="py-3 pe-3">Downtown Plano</div>
    </div>
</div><!-- end header bg -->

<p class="members-count">6,000 Active Members</p>


<style>
    .header-bg {
        background-color: var(--primary-color);
        background-image: url("/images/homepage-header-bg.png");
        background-repeat: no-repeat;
        color: #fff;
        padding: 90px 0;
        text-align: center;
    }

    h3 {
        font-size: 60px;
        font-weight: 700;
        position: relative;
        z-index: 2;
        margin-bottom: 60px;
    }

    .photo-bg {
        margin: 0 auto;
        top: calc(50% - 170px);
        right: 60px;
        z-index: 0;
        border-radius: 6px;
        padding: 10px;
        max-width: 570px;
        background-color: #fff;
        color: #222;
        font-family: cursive;
        font-style: italic;
        text-align: right;
    }

    @media screen and (min-width: 700px) {
        .photo-bg {
            transform: rotate(4deg);
        }
    }

    @media screen and (min-width: 1575px) {
        .header-bg {
            text-align: left;
        }

        h3 {
            max-width: 890px;
            margin-bottom: 0;
        }

        .photo-bg {
            position: absolute;
        }
    }

    .members-count {
        text-align: center;
        color: #fff;
        text-shadow: 0 0 2px #222;
        font-size: 100px;
        font-weight: 900;
        padding: 30px 0;
    }
</style>