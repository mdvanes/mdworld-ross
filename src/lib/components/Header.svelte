<script>
  import DynamicLogo from './DynamicLogo/DynamicLogo.svelte';
</script>

<header>
  <div class="header-container main-column">
    <a href="/"
      ><DynamicLogo />
      <span>MDWorld, a webdevelopment blog</span>
    </a>

    <nav>
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="https://github.com/mdvanes/"><img src="images/github.svg" alt="Github" /></a>
        </li>
        <li>
          <a href="https://mastodon.social/@mdworld" rel="me"
            ><img src="images/mastodon.svg" alt="Mastodon" /></a
          >
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mdvanes/"
            ><img src="images/linkedin.svg" alt="LinkedIn" /></a
          >
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
    flex-grow: 1;
  }

  ul {
    margin: 0;
    padding-left: 0;
    list-style-type: none;
    display: flex;
    gap: 1rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @media screen and (max-width: 500px) {
    nav {
      margin-top: 1rem;
    }
  }

  nav img {
    filter: invert(1);
    height: 20px;
  }
</style>
