<script>
	import { page } from '$app/stores';
	export let href;
</script>

<a class:font-bold={$page.path === href} class="hover:text-green-600" sveltekit:prefetch {href}
	><slot /></a
>
