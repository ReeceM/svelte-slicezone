<script>
	import { dev } from '$app/env';
	export let allSlices = {};
	export let sliceName = null;
	export let slice = null;
	export let i = null;

	if (Object.keys(allSlices).indexOf(sliceName) === -1) {
		console.error(`[sm-resolver] component "${sliceName}" not found at index ${i}.`);
		console.warn('slice data:', slice);
	}
</script>

{#if allSlices[sliceName]}
	<svelte:component
		this={allSlices[sliceName]}
		{slice}
		{...$$restProps}
	/>
{/if}

{#if dev && !allSlices[sliceName]}
	<div class="slicezone__not-found">
		<h2>
			Slice <code>`{sliceName}`</code> not found.
		</h2>
		<p>Check that you registered this component in your slices library!</p>
	</div>
{/if}

<style>
	.slicezone__not-found {
		height: 30vh;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		background: #fafafa;
	}

	.slicezone__not-found h2 {
		font-size: large;
		font-weight: 600;
	}

	.slicezone__not-found p {
		max-width: 320px;
		font-size: 16px;
	}
</style>
