<script>
    let name = "test";
    let count = $state(0);
    let todos = $state([]);
    let doubled = $derived(count * 2);
    let { testvar } = $props();

    $effect(() => {
        // console.log(count);

        const interval = setInterval(() => {
            count++;
        }, 3000);

        return () => {
            clearInterval(interval);
        }
    })

    $inspect(count, todos);

    let prms = new Promise((res, rej) => {
        setTimeout(() => {
            if (count > 4) {
                rej("Sorry, something went wrong :(")
            }
            res("Hello!");
        }, 3000);
    });
</script>

<h1>Hello {name.toUpperCase()}! {testvar}</h1>
<button onclick={() => count++}>
    clicks: {count}
</button>

<button onclick={() => todos.push({task: "something", done: false})}>
    Click me
</button>

<button onclick={() => todos[0].done = true}>
    Click me, too
</button>
<p id="display">
{#if todos.length > 0}
    {JSON.stringify(todos)} {doubled}
{:else if count > 10}
    {doubled}
{:else}
    Nothing interesting happening here
{/if}
</p>

{#each todos as itm, idx}
    <button onclick={() => todos[idx].done = !todos[idx].done}>[{itm.done ? "X" : ""}] {itm.task}</button>
{/each}

<!-- {#await prms}
    <p>Promise loading...</p>
{:then val}
    <p>Promise loaded! {val}</p>
{:catch err}
    <p>Error with promise: {err}</p>
{/await} -->

{#await prms then val}
    <p class={count > 4 ? "prms1" : "prms2"}
        style:background-color="blue"  style:width|important="12rem"  
    >Promise loaded! {val}</p>
{/await}

<style>
    h1 {
        color: green;
    }
    #display {
        color: purple;
    }

    .prms1 {
        color: yellow;
    }

    .prms2 {
        color: red;
    }
</style>