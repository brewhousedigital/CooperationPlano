<script context="module">
    export function load({ error, status }) {
        return {
            props: {
                status: status,
                message: error.message,
            }
        };
    }
</script>

<script>
    export let status;
    export let message;
</script>

<div class="container">
    <h1>Status: {status}</h1>
    <h2>Message: {message}</h2>
</div>