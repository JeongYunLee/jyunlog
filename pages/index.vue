<script setup lang="ts">
import {
  cvAwards,
  cvCopy,
  cvEducation,
  cvExperience,
  cvProfile,
  cvPublications,
  cvSkills,
  type Lang,
} from "~/content/cv";

const runtimeConfig = useRuntimeConfig();
const siteUrl = runtimeConfig.public.siteUrl;
const language = ref<Lang>("en");

const uiCopy = {
  contact: { ko: "연락", en: "Contact" },
  links: { ko: "링크", en: "Links" },
  focus: { ko: "관심분야", en: "Research Focus" },
  updated: { ko: "언어 전환", en: "Language Toggle" },
};

const focusAreas = "(Public)Data, AI, Ontology, Knowledge graph";

const t = (value: { ko: string; en: string }) => value[language.value];

const localizePeriod = (value?: string) => {
  if (!value) return "";

  return language.value === "ko" ? value.replace("Present", "현재") : value;
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: runtimeConfig.public.siteName,
  url: siteUrl,
  description: runtimeConfig.public.siteDescription,
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: cvProfile.name,
  email: cvProfile.email,
  url: siteUrl,
  sameAs: cvProfile.links.map((link) => link.href),
  knowsAbout: cvSkills,
};

useHead({
  title: "JeongYun Lee",
  link: [{ rel: "canonical", href: siteUrl }],
  script: [
    { type: "application/ld+json", children: JSON.stringify(jsonLdWebsite) },
    { type: "application/ld+json", children: JSON.stringify(jsonLdPerson) },
  ],
});
</script>

<template>
  <main class="cv-page">
    <div class="atmosphere atmosphere-left" />
    <div class="atmosphere atmosphere-right" />

    <div class="page-toolbar">
      <div class="language-switch" role="tablist" :aria-label="t(uiCopy.updated)">
        <button
          type="button"
          :class="{ active: language === 'ko' }"
          @click="language = 'ko'"
        >
          KO
        </button>
        <button
          type="button"
          :class="{ active: language === 'en' }"
          @click="language = 'en'"
        >
          EN
        </button>
      </div>
    </div>

    <div class="cv-folio">
      <header class="folio-header">
        <div class="intro-grid">
          <div class="intro-copy">
            <h1>{{ cvProfile.name }}</h1>
            <p class="role">{{ t(cvProfile.role) }}</p>
            <p class="summary">{{ t(cvProfile.summary) }}</p>

            <div class="inline-facts">
              <div class="fact-block">
                <span>{{ t(uiCopy.contact) }}</span>
                <a :href="`mailto:${cvProfile.email}`">{{ cvProfile.email }}</a>
              </div>
              <div class="fact-block">
                <span>{{ t(uiCopy.links) }}</span>
                <div class="fact-links">
                  <a
                    v-for="link in cvProfile.links"
                    :key="link.href"
                    :href="link.href"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {{ link.label }}
                  </a>
                </div>
              </div>
              <div class="fact-block">
                <span>{{ t(uiCopy.focus) }}</span>
                <p>{{ focusAreas }}</p>
              </div>
            </div>
          </div>

          <div class="intro-aside">
            <div class="portrait-frame">
              <img :src="cvProfile.imageSrc" :alt="t(cvProfile.imageAlt)" />
            </div>
          </div>
        </div>
      </header>

      <section class="details-grid">
        <div class="details-column details-column-main">
          <section class="section-block">
            <div class="section-heading">
              <p class="section-label">{{ t(cvCopy.experience) }}</p>
            </div>

            <ul class="record-list">
              <li v-for="item in cvExperience" :key="`${item.organization}-${item.title.en}`">
                <div class="record-header">
                  <div>
                    <strong>{{ t(item.title) }}</strong>
                    <p class="record-org">{{ item.organization }}</p>
                  </div>
                  <span v-if="item.period">{{ localizePeriod(item.period) }}</span>
                </div>

                <div class="record-body">
                  <p>{{ t(item.description) }}</p>
                  <a
                    v-if="item.link"
                    class="text-link"
                    :href="item.link.href"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {{ item.link.label }}
                  </a>
                </div>
              </li>
            </ul>
          </section>
        </div>

        <div class="details-column details-column-side">
          <section class="section-block">
            <div class="section-heading">
              <p class="section-label">{{ t(cvCopy.education) }}</p>
            </div>

            <ul class="record-list">
              <li v-for="item in cvEducation" :key="`${item.period}-${item.school}`">
                <div class="record-header">
                  <div>
                    <strong>{{ t(item.degree) }}</strong>
                    <p class="record-org">{{ item.school }}</p>
                  </div>
                  <span>{{ localizePeriod(item.period) }}</span>
                </div>

                <div v-if="item.description" class="record-body">
                  <p>{{ t(item.description) }}</p>
                </div>
              </li>
            </ul>
          </section>

          <section class="section-block">
            <div class="section-heading">
              <p class="section-label">{{ t(cvCopy.skills) }}</p>
            </div>

            <div class="skills-grid">
              <span v-for="skill in cvSkills" :key="skill">{{ skill }}</span>
            </div>
          </section>
        </div>

        <section class="section-block section-block-wide">
          <div class="section-heading">
            <p class="section-label">{{ t(cvCopy.publications) }}</p>
          </div>

          <ul class="record-list publications-list">
            <li v-for="paper in cvPublications" :key="`${paper.year}-${paper.title.en}`">
              <div class="record-header">
                <div>
                  <strong>{{ t(paper.title) }}</strong>
                  <p class="publication-meta">
                    <span>{{ t(paper.authors) }}</span>
                    <span class="meta-divider">|</span>
                    <span>{{ t(paper.venue) }}</span>
                    <template v-if="paper.link">
                      <span class="meta-divider">|</span>
                      <a
                        class="text-link"
                        :href="paper.link.href"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {{ paper.link.label }}
                      </a>
                    </template>
                  </p>
                </div>
                <span>{{ paper.year }}</span>
              </div>
            </li>
          </ul>
        </section>

        <section class="section-block section-block-wide">
          <div class="section-heading">
            <p class="section-label">{{ t(cvCopy.awards) }}</p>
          </div>

          <ul class="record-list">
            <li v-for="award in cvAwards" :key="`${award.year}-${award.title.en}`">
              <div class="record-header">
                <div>
                  <strong>{{ t(award.title) }}</strong>
                </div>
                <span>{{ award.year }}</span>
              </div>

              <div class="record-body">
                <p>{{ t(award.description) }}</p>
              </div>
            </li>
          </ul>
        </section>
      </section>
    </div>
  </main>
</template>

<style scoped>
.cv-page {
  --page-bg: #f3f5f8;
  --surface-strong: #ffffff;
  --border: rgba(25, 40, 63, 0.12);
  --ink: #172132;
  --muted: #627086;
  --accent: #173d6c;
  --shadow: 0 18px 60px rgba(20, 31, 52, 0.08);
  --radius-xl: 30px;
  --radius-lg: 18px;
  --space-page: clamp(1.2rem, 2vw, 2rem);
  --space-shell: clamp(1.3rem, 2.5vw, 2.5rem);
  --space-section: clamp(1.35rem, 2.2vw, 2rem);
  min-height: 100vh;
  padding: var(--space-page);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)),
    var(--page-bg);
  color: var(--ink);
  position: relative;
  overflow: hidden;
}

.atmosphere {
  position: fixed;
  inset: auto;
  pointer-events: none;
  border-radius: 999px;
  filter: blur(18px);
  opacity: 0.75;
}

.atmosphere-left {
  top: 4rem;
  left: -6rem;
  width: 18rem;
  height: 18rem;
  background: radial-gradient(circle, rgba(219, 229, 244, 0.9) 0%, transparent 70%);
}

.atmosphere-right {
  right: -4rem;
  bottom: 8rem;
  width: 22rem;
  height: 22rem;
  background: radial-gradient(circle, rgba(198, 214, 235, 0.8) 0%, transparent 72%);
}

.cv-folio {
  position: relative;
  max-width: 1180px;
  margin: 0 auto;
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(247, 249, 252, 0.92) 100%);
  box-shadow: var(--shadow);
  backdrop-filter: blur(16px);
  overflow: hidden;
}

.page-toolbar {
  max-width: 1180px;
  margin: 0 auto 0.7rem;
  display: flex;
  justify-content: flex-end;
}

.folio-header {
  padding: var(--space-shell);
}

.section-label,
.fact-block span {
  margin: 0;
  font-size: 0.76rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted);
}

.language-switch {
  display: inline-flex;
  gap: 0.3rem;
  padding: 0.3rem;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.72);
}

.language-switch button {
  border: 0;
  border-radius: 999px;
  padding: 0.55rem 0.9rem;
  background: transparent;
  color: var(--muted);
  font: inherit;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition:
    background-color 180ms ease,
    color 180ms ease,
    transform 180ms ease;
}

.language-switch button:hover {
  transform: translateY(-1px);
}

.language-switch button.active {
  background: var(--ink);
  color: #fff;
}

.intro-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(280px, 0.8fr);
  gap: clamp(1.4rem, 3vw, 3rem);
  padding: var(--space-section) 0;
}

.intro-copy,
.intro-aside,
.section-block {
  animation: rise-in 560ms ease both;
}

.intro-copy {
  animation-delay: 60ms;
}

.intro-aside {
  animation-delay: 130ms;
}

.intro-copy h1 {
  margin: 0.55rem 0 0;
  font-size: clamp(2.8rem, 8vw, 5.5rem);
  line-height: 0.94;
  letter-spacing: -0.045em;
}

.role {
  margin: 0.9rem 0 0;
  color: var(--accent);
  font-size: clamp(1.02rem, 2.4vw, 1.32rem);
  font-weight: 500;
}

.summary {
  margin: 1.2rem 0 0;
  max-width: 58ch;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.82;
}

.inline-facts {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.85rem;
  margin-top: 1.8rem;
}

.fact-block {
  min-height: 100%;
  padding: 1rem 1rem 1.05rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.42);
}

.fact-block p,
.fact-block a {
  display: block;
  margin: 0.55rem 0 0;
  color: var(--ink);
  font-size: 0.97rem;
  line-height: 1.55;
  text-decoration: none;
}

.fact-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.75rem;
  margin-top: 0.55rem;
}

.fact-links a {
  margin: 0;
  color: var(--accent);
  border-bottom: 1px solid rgba(23, 61, 108, 0.24);
}

.fact-links a:hover {
  border-color: rgba(14, 42, 75, 0.5);
}

.intro-aside {
  display: grid;
  align-content: start;
}

.portrait-frame {
  padding: 0;
  border-radius: calc(var(--radius-xl) - 2px);
}

.portrait-frame img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  object-position: center 18%;
  border-radius: calc(var(--radius-lg) - 2px);
}

.text-link {
  color: var(--accent);
  text-decoration: none;
  border-bottom: 1px solid rgba(23, 61, 108, 0.24);
  transition:
    color 160ms ease,
    border-color 160ms ease;
}

.text-link:hover {
  color: #0e2a4b;
  border-color: rgba(14, 42, 75, 0.5);
}

.details-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(280px, 0.92fr);
  gap: 0;
  border-top: 1px solid var(--border);
}

.details-column {
  padding: var(--space-shell);
}

.details-column-side {
  border-left: 1px solid var(--border);
}

.section-block-wide {
  grid-column: 1 / -1;
  padding: var(--space-shell);
  border-top: 1px solid var(--border);
}

.section-block {
  animation-delay: 160ms;
}

.section-block + .section-block {
  margin-top: var(--space-section);
  padding-top: var(--space-section);
  border-top: 1px solid var(--border);
}

.section-heading {
  margin-bottom: 1rem;
}

.record-list {
  display: grid;
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.record-list li {
  padding: 1.05rem 0 0;
  border-top: 1px solid rgba(25, 40, 63, 0.08);
}

.record-list li:first-child {
  padding-top: 0;
  border-top: 0;
}

.record-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

.record-header strong {
  display: block;
  font-size: 1.04rem;
  line-height: 1.45;
  font-weight: 500;
}

.record-header span {
  color: var(--muted);
  white-space: nowrap;
  font-size: 0.9rem;
}

.record-org {
  margin: 0.38rem 0 0;
  color: var(--ink);
  font-weight: 500;
  line-height: 1.55;
}

.record-body {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem 1rem;
  align-items: baseline;
  margin-top: 0.55rem;
}

.record-body p {
  margin: 0;
  color: var(--muted);
  line-height: 1.72;
  flex: 1 1 24rem;
}

.publications-list .record-body p {
  flex-basis: 18rem;
}

.publication-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  align-items: center;
  margin: 0.38rem 0 0;
  color: var(--muted);
  line-height: 1.6;
}

.meta-divider {
  color: rgba(98, 112, 134, 0.6);
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skills-grid span {
  padding: 0.72rem 0.95rem;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface-strong);
  color: var(--ink);
  font-size: 0.92rem;
  line-height: 1;
}

@keyframes rise-in {
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 980px) {
  .intro-grid,
  .details-grid,
  .inline-facts {
    grid-template-columns: 1fr;
  }

  .details-column-side {
    border-left: 0;
    border-top: 1px solid var(--border);
  }

  .intro-aside {
    max-width: 28rem;
  }
}

@media (max-width: 720px) {
  .cv-page {
    padding: 0.85rem;
  }

  .page-toolbar {
    margin-bottom: 0.55rem;
  }

  .language-switch {
    align-self: flex-start;
  }

  .intro-copy h1 {
    font-size: clamp(2.4rem, 15vw, 4rem);
  }

  .record-header {
    flex-direction: column;
    gap: 0.45rem;
  }

  .record-header span {
    white-space: normal;
  }
}

@media print {
  .cv-page {
    padding: 0;
    background: #fff;
  }

  .atmosphere,
  .language-switch {
    display: none;
  }

  .cv-folio {
    border: 0;
    box-shadow: none;
    background: #fff;
  }

  .folio-header,
  .details-column {
    padding: 1.1rem 0;
  }

  .details-grid {
    display: block;
  }

  .details-column + .details-column {
    border-top: 1px solid #d5d5d5;
  }

  a {
    color: #000;
    text-decoration: none;
  }
}
</style>
