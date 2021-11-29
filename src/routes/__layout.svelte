<script context="module">
	import { product } from '../store'
	export async function load({ fetch }) {
		const data = await (await fetch('/api/product.json')).json();
    product.set(data)
		return {
			props: {
				data
			}
		};
	}
</script>

<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/600.css';
	import '@fontsource/inter/700.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer class="bg-gray-300 mt-6">
	<div class="container px-4 py-6">
		<h2 class="text-3xl font-bold">Style MahasMahasiswa</h2>
	</div>
</footer>
