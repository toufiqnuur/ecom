<script>
	import ProductItem from '$lib/product/ProductItem.svelte';
	import { product } from '../../store';
</script>

<svelte:head>
	<title>SM - Semua produk</title>
</svelte:head>

<div class="container px-4 py-10">
	<h2 class="text-center text-3xl font-bold mb-6">All Products</h2>
	<div class="grid grid-cols md:grid-cols-3 lg:grid-cols-4 lg:gap-12 gap-4">
		{#each $product.data as { title, price, image }}
			<ProductItem {title} {price} {image} />
		{/each}
	</div>
</div>
