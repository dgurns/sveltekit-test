<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="flex flex-col items-center">
	<h1>
		<div>
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</div>

		<span class="text-green-700">to Dan's test<br />SvelteKit app</span>
	</h1>

	<h2 class="mt-8 mb-8">
		try editing <strong>src/routes/index.svelte</strong>
	</h2>

	<Counter />
</section>
