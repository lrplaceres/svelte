<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>


<h4>Form to file</h4>
<br />

<a href="/">Index</a>

<form method="put">
  <input type="text" name="category" id="category" value={data.cost?.category} disabled>
	<input type="hidden" name="id" />
	<br />
	<input type="file" name="file" id="file" />
	<br />
	<button type="submit">Acept</button>
</form>
