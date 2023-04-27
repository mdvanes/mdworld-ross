<header>
	<div class="header-container main-column">
		<a href="/"><img src="logos/logo-48.png" alt="logo" /> MDWorld, a webdevelopment blog</a>

		<nav>
			<ul>
				<li>
					<a href="/about">About</a>
				</li>
				<li>
					<a href="https://github.com/mdvanes/"><img src="images/github.svg" alt="Github" /></a>
				</li>
				<li>
					<a href="https://mastodon.social/@mdworld"
						><img src="images/mastodon.svg" alt="Mastodon" /></a
					>
				</li>
				<li>
					<a href="https://www.linkedin.com/in/mdvanes/"><img src="images/linkedin.svg" alt="LinkedIn" /></a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style>
	header {
		padding: 1rem;
		background: rgb(22, 50, 22);
		color: white;
		display: flex;
		justify-content: center;
		font-family: 'Roboto', sans-serif;
	}

	.header-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
	}

	.header-container > a {
		display: flex;
		align-items: center;
		gap: 20px;
		font-size: 1.5rem;
		font-weight: bold;
	}

	ul {
		margin: 0;
		list-style-type: none;
		display: flex;
		gap: 1rem;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	nav img {
		filter: invert(1);
		height: 20px;
	}
</style>
