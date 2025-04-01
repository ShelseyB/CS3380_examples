<script>
    import {fade} from "svelte/transition";
    import TodoItem from "../components/TodoItem.svelte";
    import Card from "../components/card.svelte";
    let name = $state("SvelteKit")
	// Reactivity
	let count = $state(0);
    let value = $state("This is my value")
    let doubled = $derived(count * 2);
	function incrementCount() {
		count += 1;
	}

	let things = [{name: "Bob"}, {name: "Alice"}, {name: "Mary"}, {name: "Joe"}];

    let boxes = [{width: 10, height: 20}, {width: 15, height: 25}, {width: 40, height: 20}]

    $inspect(count, value);

    let todos = $state([
        {
            title: "this",
            id: 1
        },
        {
            title: "that",
            id: 2
        },
        {
            title: "another",
            id: 3
        }
    ]);

    // let todosPromise = fetch("https://jsonplaceholder.typicode.com/todos")
    //     .then(resp => resp.json())

    //     .then(data => {
    //         console.log("data", data);
    //         todos = data.slice(0, 5);
    //         return todos;
    //     });
    let visible = $state(false);

    function removeToDo(id) {
        todos = todos.filter(td => td.id !== id);
    }
</script>

<h1>Welcome to {name} test</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<!-- <p>Current count: {count}. The doubled value is {count * 2} {doubled}
    {#if count > 10}
        Wow, that's a lot!
    {:else if count > 0}
        You've pressed the button!
    {:else}
        You should really press the button.
    {/if}
</p>
<button onclick={incrementCount}>Click me!</button> -->
<!-- <input bind:value/> -->
<!-- {#each things as thing, i}
    <p>{i + 1} {thing.name}</p>
{/each} -->

<!-- {#await todosPromise}
    <p>Loading sample data...</p>
{:then todos}
    {#each todos as todo}
        <TodoItem title={todo.title} onRemove={removeToDo(todo.id)}/>
    {/each}
{:catch error}
    <p>Error loading sample data: {error}</p>
{/await} -->


{#each todos as todo}
    <TodoItem title={todo.title} onRemove={() => removeToDo(todo.id)} test="test"/>
{/each}

<Card/>

<!-- <div>
{#each boxes as box}
    {@const area = box.width * box.height}
    <div>{box.width} * {box.height} = {area}</div>
{/each}
</div> -->

<!-- <button onclick={() => visible = !visible} >Toggle Visible</button> -->

<!-- {#if visible}
    <div transition:fade={{duration: 2000}}>fades in and out</div>
{/if} -->
