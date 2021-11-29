<script>
	import ProductItem from '$lib/product/ProductItem.svelte';
	import { product } from '../store';
</script>

<svelte:head>
	<title>Home - Style Mahasiswa</title>
</svelte:head>

<section>
	<div class="container flex justify-center items-center px-4 py-24 md:py-32">
		<div class="text-center">
			<h1 class="text-4xl md:text-5xl font-bold mb-4">Style Mahasiswa</h1>
			<p
				class="text-green-600 text-md md:text-lg font-semibold bg-green-100 w-52 md:w-auto mx-auto"
			>
				Mix & Match Your Outfit. Be Brave Be Confident.
			</p>
		</div>
	</div>
</section>

<section class="my-10">
	<div class="w-full container px-4 flex space-x-6 md:justify-center overflow-x-auto">
		<a href="/products/pria" class="flex-shrink-0 w-48 h-48 relative">
			<img class="category" src="/cat-pria.jpg" alt="Kategori Pria" />
			<span class="text-white text-center absolute w-full bg-green-500 bottom-0 left-0 px-3 py-1"
				>Kategori Pria</span
			>
		</a>
		<a href="/products/wanita" class="flex-shrink-0 w-48 h-48 relative">
			<img class="category" src="/cat-wanita.jpg" alt="Kategori Pria" />
			<span class="text-white text-center absolute w-full bg-green-500 bottom-0 left-0 px-3 py-1"
				>Kategori Wanita</span
			>
		</a>
	</div>
</section>

<section>
	<div class="container px-4 py-10">
		<h2 class="text-center text-3xl font-bold mb-6">New Products</h2>
		<div class="grid grid-cols md:grid-cols-3 lg:grid-cols-4 lg:gap-12 gap-4">
			{#each $product.data.slice(0, 8) as { title, price, image }}
				<ProductItem {title} {price} {image} />
			{/each}
		</div>
		<p class="mt-10 mb-4 text-center">
			<a class="text-white bg-green-500 py-2 px-4" sveltekit:prefetch href="/products"
				>Show All Products</a
			>
		</p>
	</div>
</section>

<style>
	.category {
		aspect-ratio: 1/1;
	}
</style>
