<script>
    let { title = "default", onRemove, ...rest } = $props();
    console.log("rest", rest, rest.test);
    // export let title = "";
    // export let onRemove = () => {};
</script>

<div>
    <p>{title}</p>
    <button onclick={onRemove}>Delete</button>
</div>

<style>

</style>