---
layout: default
---

<header class="site-header">
  <a class="brand" href="https://github.com/adamdab" aria-label="adamdab on GitHub">
    <span class="brand__mark" aria-hidden="true">AD</span>
    <span class="brand__name">adamdab</span>
  </a>
  <span class="header-note"><span class="header-note__dot"></span> Personal site</span>
</header>

<main class="home-grid">
  <section class="hero-card" aria-labelledby="hello">
    <div class="hero-card__copy">
      <p class="eyebrow">A little corner of the internet</p>
      <h1 id="hello">Hi<span>.</span></h1>
      <p class="hero-card__tagline">Curious by nature. Making things along the way.</p>
    </div>
    <div class="hero-card__motif" aria-hidden="true">
      <span class="motif-bar motif-bar--one"></span>
      <span class="motif-bar motif-bar--two"></span>
      <span class="motif-bar motif-bar--three"></span>
      <span class="motif-disc"></span>
    </div>
    <span class="hero-card__index" aria-hidden="true">01 / 04</span>
  </section>

  <section class="info-card about-card" aria-labelledby="about-title">
    <div class="card-heading">
      <span class="card-index" aria-hidden="true">02</span>
      <p class="eyebrow">The short version</p>
    </div>
    <h2 id="about-title">About me</h2>
    <p>I'm Adam, a curious maker interested in technology, thoughtful design, and how things work. This is my logbook for projects, experiments, and ideas in progress.</p>
    <a class="text-link" href="https://github.com/adamdab">Find me on GitHub <span aria-hidden="true">↗</span></a>
    <div class="about-card__decoration" aria-hidden="true"><span></span><span></span><span></span></div>
  </section>

  <section class="info-card contributions-card" aria-labelledby="contributions-title">
    <div class="card-heading">
      <span class="card-index" aria-hidden="true">03</span>
      <p class="eyebrow">Little steps, over time</p>
    </div>
    <h2 id="contributions-title">Commit calendar</h2>
    <p class="section-intro">A year of making, learning, and showing up.</p>
    <div class="calendar-frame">
      <img src="https://ghchart.rshah.org/ef8354/adamdab" alt="GitHub contribution calendar for adamdab" loading="lazy">
    </div>
    <a class="text-link" href="https://github.com/adamdab">See my GitHub profile <span aria-hidden="true">↗</span></a>
  </section>

  <section class="info-card stars-card" aria-labelledby="stars-title">
    <div class="stars-card__topline">
      <div>
        <div class="card-heading">
          <span class="card-index" aria-hidden="true">04</span>
          <p class="eyebrow">Collected finds</p>
        </div>
        <h2 id="stars-title">Starred projects</h2>
      </div>
      <div class="project-controls" role="group" aria-label="Browse starred projects">
        <button class="project-control" id="projects-previous" type="button" aria-label="Previous starred projects" disabled>←</button>
        <span class="project-page" id="projects-page" aria-live="polite">Loading</span>
        <button class="project-control" id="projects-next" type="button" aria-label="Next starred projects" disabled>→</button>
      </div>
    </div>
    <p class="section-intro">A few things I find useful, clever, or inspiring.</p>
    <div class="projects-grid" id="starred-projects" aria-live="polite"></div>
    <p class="projects-status" id="projects-status" role="status">Loading public stars from GitHub…</p>
  </section>
</main>
