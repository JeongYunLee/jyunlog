<template>
  <div class="footer-section">
    <footer>
      <div class="social-icons-and-navigation">
        <!-- nav - start -->
        <!-- <nav>
          <NuxtLink
            v-for="item in navigation"
            :key="item.id"
            :href="item.href"
            class="footerBtn"
            >{{ item.name }}</NuxtLink
          >
        </nav> -->
        <!-- nav - end -->

        <!-- social - start -->
        <div>
          <!-- <a href="https://www.instagram.com/yzpo/" aria-label="Instagram" target="_blank" class="footerIcon">
            <IconsInstaIcon />
          </a> -->

          <!-- <a href="https://www.facebook.com/yizhipo" aria-label="Facebook" target="_blank" class="footerIcon">
            <IconsFacebookIcon />
          </a> -->

            <a href="mailto:cathx618@gmail.com" aria-label="Email" class="footerIcon">
              <IconsMailIcon />
            </a>

          <a href="https://www.linkedin.com/in/jyunlee000/" aria-label="Linkden" target="_blank" class="footerIcon">
            <IconsLinkedInIcon />
          </a>

          <a href="https://github.com/JeongYunLee" aria-label="Github" target="_blank" class="footerIcon">
            <IconsGithubIcon />
          </a>
        </div>
        <!-- social - end -->
      </div>

      <div class="copyright">
        © {{ CURRENT_YEAR }} - Present JeongYun Lee. All rights reserved.
      </div>
    </footer>
  </div>
</template>
<script setup>
// utils and hooks
const { navigation } = useConstants();
const CURRENT_YEAR = new Date().getFullYear();
</script>
