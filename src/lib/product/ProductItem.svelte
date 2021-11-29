<script>
  export let title, price, image

  const slug = '/products/' + title?.split(' ').join('-').toLowerCase()
</script>

<a class="group hover:border-green-500" sveltekit:prefetch href={slug}>
	<img src={image} alt={title} />
	<h3 class="text-lg mt-3 mb-2">{title}</h3>
	<p class="font-semibold">{price}</p>
</a>
