# Svelte Slicezone

This is a slice zone component for Prismic.

The current component makes the current assumptions:

There is a document that is passed that has a `slices` key:

```js
{
	// other keys
	slices: []
}
```

To use the SliceZone and resolver.

```html
<script>
	import { SliceZone, SliceResolver } from '@reecem/svelte-slicezone';

	// Load the index listing of slices.
	import * as Slices from '$lib/slices';
	// this is the list of slices to provide.
	// you can add others from other libs
	const allSlices = { ...Slices, /** ...anotherList */ };
</script>

<!-- This is the slicezone. The resolver can be overridden, but not really needed. -->
<SliceZone
	{...document}
	{allSlices}
	resolver={SliceResolver}
/>
```
