<script>
	import { page } from '$app/stores';
	export let href, onClick;
</script>

<a
	on:click={onClick}
	class:font-bold={$page.path === href}
	class="hover:text-green-600"
	sveltekit:prefetch
	{href}
	><slot />
</a>
