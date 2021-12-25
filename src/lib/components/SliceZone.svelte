<script lang="ts">
	export let resolver = null;
	export let sliceProps = null;
	export let slices = [];
	export let allSlices = {};

	/**
	 * Function from Prismic SliceZone
	 * @param str
	 */
	function pascalize(str: string): string {
		if (!str) {
			return '';
		}
		str = str.replace(/_/g, '-').replace(/-(\w)/g, (_, c: string) => {
			return c ? c.toUpperCase() : '';
		});
		return str[0].toUpperCase() + str.slice(1);
	}
</script>

{#each slices as slice, i}
	<svelte:component
		this={resolver}
		{allSlices}
		sliceName={pascalize(slice.slice_type)}
		{slice}
		{i}
		{...sliceProps}
	/>
{/each}
