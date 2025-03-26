<script>
	export let name;
	let name2 = "CS 3380";

	// Reactivity
	let count = 0;
	function incrementCount() {
		count += 1;
	}

	let things = [{name: "Bob"}, {name: "Alice"}, {name: "Mary"}, {name: "Joe"}];
	
</script>

<main>
	<h1>Hello {name}! Welcome to {name2}</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<p>Current count: {count}.
		{#if count > 10}
			Wow, that's a lot!
		{:else if count > 0}
			You've pressed the button!
		{:else}
			You should really press the button.
		{/if}
	</p>
	<button on:click={incrementCount}>Click me!</button>
	{#each things as thing, i}
		<p>{i + 1} {thing.name}</p>
	{/each}

	{#key count}
		<!-- <DisplayCount /> -->
	{/key}

	<!-- <p>Current count: {count}</p> -->
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>