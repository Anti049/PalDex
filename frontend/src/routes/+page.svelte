<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let response = '';

	onMount(() => {
		const result = fetch('http://localhost:5657')
			.then((res) => res.text())
			.then((text) => {
				response = text;
			})
			.catch((err) => {
				console.error(err);
			});
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Response from server: {response}</p>
