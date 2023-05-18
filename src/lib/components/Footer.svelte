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
      <p>This site uses no tracking, analytics or cookies.</p>
      <p>
        To prevent <a href="https://en.wikipedia.org/wiki/Link_rot">Link Rot</a>, URLs to articles
        of previous versions of this blog are persistent since 2018.
      </p>
      <p>
        Hosted on <a href="https://pages.github.com">Github Pages</a>, domain at
        <a href="https://vdx.nl">VDX.nl</a>
      </p>
      <a class="rss" href="https://mdworld.nl/rss.xml"><img src="images/rss.svg" alt="RSS" /> RSS</a
      >
    </div>
  </div>
</footer>

<style>
  footer {
    padding: 1rem;
    background: rgb(22, 50, 22);
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

  .rss {
	text-decoration: none;
  }
</style>
