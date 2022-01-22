<script>
    let events = [
        {"title": "New Member Meet and Greet", "description": "All new members are invited to the annual Community Get-together. Since Covid is gone, we are all very excited to see everyone again. This will be at our usual spot.", "url": "#", "tags": "", "dateMonth": "Feb", "dateDay": "05"},
        {"title": "Planning Session for the Downtown Pedestrian Zone", "description": "This will be a meeting with the Plano community leaders at City Hall to discuss the new changes to Downtown. The city is very interested in fast-tracking this initiative. Come by and show your support!", "url": "#", "tags": "", "dateMonth": "Mar", "dateDay": "12"},
        {"title": "Volunteer at Plano Movie Night", "description": "The city is putting on an event to show a movie to the community. We volunteered to help do the setup.", "url": "#", "tags": "", "dateMonth": "Jun", "dateDay": "19"},
        {"title": "Volunteer at the Downtown Small Business Fest", "description": "The city is putting on an event to show a movie to the community. We volunteered to help do the setup.", "url": "#", "tags": "", "dateMonth": "Oct", "dateDay": "27"},
    ]
</script>


<div class="container py-4">
    <h2 class="display-1 mb-5">Events</h2>

    {#each events as event}
        <div class="event-block">
            <div class="row align-items-center">
                <div class="col-auto event-date pe-4">
                    <div class="event-date-box shadow">
                        <div class="event-date-box-month">{event.dateMonth}</div>
                        <div class="event-date-box-day">{event.dateDay}</div>
                    </div><!-- end event box -->
                </div><!-- end col auto -->

                <div class="col event-content pe-4">
                    <h3>{event.title}</h3>
                    <p class="mb-0">{event.description}</p>
                </div><!-- end col auto -->

                <div class="col-auto event-link">
                    <a href={event.url} class="btn btn-lg btn-light stretched-link">View More <i class="bi bi-arrow-right"></i></a>
                </div><!-- end col auto -->
            </div><!-- end row -->
        </div><!-- end event block -->
    {/each}
</div>


<style>
    .event-block {
        border: 1px solid #2323231A;
        margin-bottom: 30px;
        padding: 40px 50px;
        position: relative;
    }

    .event-date {

    }

    .event-content {

    }

    .event-link {

    }

    .event-date-box {
        background-color: #65c9bb;
        border-radius: 8px;
        color: #fff;
        text-align: center;
        width: 75px;
        padding: 12px 0;
    }

    .event-date-box-month {
        font-weight: 500;
        font-size: 21px;
        line-height: 21px;
    }

    .event-date-box-day {
        font-weight: 700;
        font-size: 30px;
        line-height: 30px;
    }
</style>