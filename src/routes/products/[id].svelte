<script>
	import { product } from '../../store';
	import { page } from '$app/stores';

	const data = $product.data.filter(
		(data) => data.title.split(' ').join('-').toLowerCase() == $page.params.id
	)[0];
</script>

<svelte:head>
	<title>SM - {data.title}</title>
</svelte:head>

<div class="container px-4 py-12">
	<a class="flex" href="/">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"><polyline points="15 18 9 12 15 6" /></svg
		>
		Back to Home
	</a>
	<div class="flex flex-col items-start md:flex-row md:space-x-10 mt-6">
		<img class="w-full md:w-80 mb-4" src={data.image} alt={data.title} />
		<div>
			<h1 class="text-2xl font-semibold mb-3">{data.title}</h1>
			<p class="text-3xl text-green-500 font-bold mb-6">{data.price}</p>
			<p class="mb-16">
				{data.description}
			</p>
			<a class="text-white font-bold bg-[#F97316] px-16 py-4" target="_blank" href={data.link}
				>Beli di shopee</a
			>
		</div>
	</div>
</div>

<style>
	img {
		aspect-ratio: 1/1;
		object-fit: cover;
	}
</style>
