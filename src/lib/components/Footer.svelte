<script>
	const currentYear = new Date().getFullYear();
</script>

<footer>
	<div class="footer-container main-column">
		<div>
			<a class="cc" href="https://creativecommons.org/licenses/by-nc-sa/3.0/"
				><img src="images/by-nc-sa.eu.svg" alt="creative commons" height="50px" />
				<div>2003-{currentYear} MDWORLD</div></a
			>
		</div>

		<div>
			<p>This site uses no tracking, analytics or cookies</p>
			<p>
				URLs to articles of previous versions of this blog are persistent since 2018 (<a
					href="https://purl.archive.org/help">Why?</a
				>)
			</p>
			<p>Hosted on <a href="https://pages.github.com">Github Pages</a>, domain at <a href="https://vdx.nl">VDX.nl</a></p>
		</div>
	</div>
</footer>

<style>
	footer {
		padding: 1rem;
		background: rgb(69, 69, 69);
		color: white;
		display: flex;
		justify-content: center;
		font-family: 'Roboto', sans-serif;
		min-height: 200px;
	}

	.footer-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 50px;
	}

	a.cc {
		display: flex;
		text-decoration: none;
		color: inherit;
		align-items: center;
		gap: 30px;
	}
</style>
