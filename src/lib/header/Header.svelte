<script>
	import ItemMenu from './ItemMenu.svelte';
	import { searchQuery } from '../../store';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let isOpen = false;

	let inputElement = null;
	const handleSerach = () => {
		inputElement.blur();
		searchQuery.set(inputElement.value);
	};

	onMount(() => {
		if ($page.path === '/search') {
			inputElement.focus();
		}
	});
</script>

<header class="text-white w-full bg-black border-b md:border-0 shadow">
	<div class="container flex justify-between items-center p-4">
		<a
			class="text-2xl text-green-500 font-bold border border-green-500 p-2"
			sveltekit:prefetch
			href="/">SM</a
		>
		<button
			on:click={() => (isOpen = !isOpen)}
			class="flex items-center space-x-3 px-3 py-2 border md:hidden"
			type="button"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="square"
				stroke-linejoin="round"
			>
				{#if isOpen}
					<line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
				{:else}
					<line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line
						x1="3"
						y1="18"
						x2="21"
						y2="18"
					/>
				{/if}
			</svg>
			<span class="text-lg font-semibold">{isOpen ? 'Close' : 'Menu'}</span>
		</button>
		<form on:submit|preventDefault={handleSerach} class="hidden md:block">
			<a sveltekit:prefetch href={$page.path == '/search' ? '' : '/search'}>
				<input
					on:click={() => searchQuery.set(null)}
					bind:this={inputElement}
					class="text-black border p-3 focus:outline-none focus:border-green-500"
					type="text"
					value={$searchQuery}
					placeholder="Search Products..."
				/>
			</a>
		</form>
	</div>

	<div class:hidden={!isOpen} class="md:block">
		<div class="container flex flex-col space-y-3 p-4 md:flex-row md:space-y-0 md:space-x-3">
			<ItemMenu href="/products/pria">Pakaian Pria</ItemMenu>
			<ItemMenu href="/products/wanita">Pakaian wanita</ItemMenu>
		</div>
	</div>
</header>

<style>
</style>
