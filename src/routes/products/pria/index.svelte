<script>
	import ProductItem from '$lib/product/ProductItem.svelte';
  import { product } from '../../../store'
  import { page } from '$app/stores'
  
  const data = $product?.data?.filter(data => data.category == 'man')
</script>

<div class="container px-4 py-10">
	<h2 class="text-center text-3xl font-bold mb-6">Products for Man</h2>
	<div class="grid grid-cols md:grid-cols-3 lg:grid-cols-4 lg:gap-12 gap-4">
    {#each data as {title, price, image}}
      <ProductItem 
        {title}
        {price}
        {image}
      />
    {/each}
	</div>
</div>
