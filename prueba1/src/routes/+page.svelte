<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div>
	<h4>Costs</h4>
  <a href="new">New Cost</a>
	<main>    
		<div>
			<table>
				<thead>
					<th>ID</th>
					<th>Category</th>
					<th>Amount</th>
					<th>Date</th>
					<th>File</th>
					<th>Action</th>
				</thead>
				<tbody>
					{#each data.costs as cost}
						<tr>
							<td>{cost.id}</td>
							<td>{cost.category}</td>
							<td>{cost.amount}</td>
							<td>{cost.date.toDateString()}</td>
							<td>{cost.file}</td>
              <td><a href="file/{cost.id}">File</a></td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</main>
</div>
