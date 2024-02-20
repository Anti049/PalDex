<script lang="ts">
	import { page } from '$app/stores';

	console.log('error', $page.error);
</script>

<h1>{$page.error?.message}</h1>
