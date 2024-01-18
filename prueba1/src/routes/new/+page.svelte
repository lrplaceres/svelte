<a href="/">Index</a>

<form method="post" action="?/create">
	<label>
		Category
		<input type="text" name="category" id="category" placeholder="Category" required/>
	</label>

	<br />
	<label>
		Amount
		<input type="number" name="amount" id="amount" placeholder="Amount" required/>
	</label>
	<br />
	<label>
		Date
		<input type="date" name="date" id="date" required/>
	</label>
	<br />
	<label>
		File
		<input type="file" name="file" id="file"/>
	</label>
	<br />
	<button formaction="?/create">Acept</button>
</form>
