<script>
	import { searchQuery } from '../../store';
	import ProductItem from '$lib/product/ProductItem.svelte';
	import { product } from '../../store';

	const pro = $product;
	$: products = pro.data.filter((data) =>
		data.title.toLowerCase().includes($searchQuery.toLowerCase())
	);
</script>

<svelte:head>
	<title>SM - Search {$searchQuery}</title>
</svelte:head>

{#if products && $searchQuery}
	<div class="container px-4 py-10">
		<h2 class="text-center text-3xl font-bold mb-6">Result for "{$searchQuery}"</h2>
		<div class="grid grid-cols md:grid-cols-3 lg:grid-cols-4 lg:gap-12 gap-4">
			{#each products as { title, price, image }}
				<ProductItem {title} {price} {image} />
			{/each}
		</div>
	</div>
{:else}
	<div class=" text-center container px-4 py-80">Tidak ada product untuk ditampilkan</div>
{/if}
