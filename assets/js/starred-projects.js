(() => {
  const user = "adamdab";
  const pageSize = 3;
  const repositories = [];
  const grid = document.getElementById("starred-projects");
  const status = document.getElementById("projects-status");
  const pageLabel = document.getElementById("projects-page");
  const previousButton = document.getElementById("projects-previous");
  const nextButton = document.getElementById("projects-next");

  if (!grid || !status || !pageLabel || !previousButton || !nextButton) return;

  let apiPage = 1;
  let currentPage = 0;
  let hasMore = true;
  let loading = false;

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function makeProjectCard(repository) {
    const card = element("article", "project-card");
    const imageLink = element("a", "project-card__image");
    imageLink.href = repository.html_url;
    imageLink.target = "_blank";
    imageLink.rel = "noopener noreferrer";
    imageLink.setAttribute("aria-label", `Open ${repository.full_name} on GitHub`);

    const image = element("img");
    image.src = `https://opengraph.githubassets.com/${repository.id}/${repository.full_name}`;
    image.alt = `GitHub preview for ${repository.full_name}`;
    image.loading = "lazy";
    image.onerror = () => {
      if (image.dataset.avatarFallback) {
        image.hidden = true;
        return;
      }
      image.dataset.avatarFallback = "true";
      image.src = repository.owner.avatar_url;
      image.alt = `GitHub avatar for ${repository.owner.login}`;
    };
    imageLink.append(image);

    const body = element("div", "project-card__body");
    const title = element("h3");
    const titleLink = element("a", "", repository.name);
    titleLink.href = repository.html_url;
    titleLink.target = "_blank";
    titleLink.rel = "noopener noreferrer";
    title.append(titleLink);

    const author = element("p", "project-card__author", "by ");
    const authorLink = element("a", "", repository.owner.login);
    authorLink.href = repository.owner.html_url;
    authorLink.target = "_blank";
    authorLink.rel = "noopener noreferrer";
    author.append(authorLink);

    const description = element("p", "project-card__description", repository.description || "No description provided.");
    const meta = element("div", "project-card__meta");
    const language = element("span", "project-card__language", repository.language || "Open source");
    const stars = element("span", "project-card__stars", `★ ${repository.stargazers_count.toLocaleString()}`);
    meta.append(language, stars);
    body.append(title, author, description, meta);
    card.append(imageLink, body);
    return card;
  }

  function render() {
    const start = currentPage * pageSize;
    const visible = repositories.slice(start, start + pageSize);
    grid.replaceChildren(...visible.map(makeProjectCard));

    if (!repositories.length) {
      pageLabel.textContent = loading ? "Loading" : "0 projects";
      status.textContent = loading ? "Loading public stars from GitHub…" : "No public starred projects were found.";
    } else {
      const end = start + visible.length;
      pageLabel.textContent = `Page ${currentPage + 1}`;
      status.textContent = loading ? "Loading more projects…" : "Public stars from GitHub";
    }

    status.classList.remove("is-error");
    previousButton.disabled = loading || currentPage === 0;
    nextButton.disabled = loading || (start + pageSize >= repositories.length && !hasMore);
  }

  async function loadNextApiPage() {
    if (loading || !hasMore) return;
    loading = true;
    render();

    try {
      const response = await fetch(`https://api.github.com/users/${user}/starred?per_page=100&page=${apiPage}&sort=created&direction=desc`, {
        headers: { Accept: "application/vnd.github+json" },
        cache: "force-cache",
      });
      if (!response.ok) throw new Error(`GitHub returned ${response.status}`);

      const pageItems = await response.json();
      if (!Array.isArray(pageItems)) throw new Error("GitHub returned an unexpected response");
      repositories.push(...pageItems);
      hasMore = /rel="next"/.test(response.headers.get("Link") || "") || pageItems.length === 100;
      apiPage += 1;
      loading = false;
      render();
    } catch (error) {
      loading = false;
      hasMore = false;
      pageLabel.textContent = "Unavailable";
      status.classList.add("is-error");
      status.replaceChildren(document.createTextNode("Could not load starred projects. Browse them on "));
      const profileLink = element("a", "", "GitHub");
      profileLink.href = `https://github.com/${user}?tab=stars`;
      status.append(profileLink, document.createTextNode("."));
      nextButton.disabled = true;
      previousButton.disabled = currentPage === 0;
    }
  }

  previousButton.addEventListener("click", () => {
    if (currentPage === 0 || loading) return;
    currentPage -= 1;
    render();
  });

  nextButton.addEventListener("click", async () => {
    if (loading) return;
    const nextPage = currentPage + 1;
    const nextStart = nextPage * pageSize;
    const requiredCount = nextStart + pageSize;
    while (repositories.length < requiredCount && hasMore) await loadNextApiPage();
    if (nextStart < repositories.length) {
      currentPage = nextPage;
      render();
    }
  });

  loadNextApiPage();
})();
