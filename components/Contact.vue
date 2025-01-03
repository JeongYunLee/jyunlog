<template>
  <section class="contact-section">
    <div class="contact-section-width">
      <div>
        <div class="img-container">
          <!-- <div
            class="flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-indigo-50"
          >
            <UserIcon class="w-9 h-9 lg:w-10 lg:h-10" />
          </div> -->
          <div>
            <img
              src="/contact.png"
              alt="contact"
              width="900"
              height="740"
            />
          </div>
        </div>
        <div class="details-cta-container mt-10">
          <div>
            <h2>I’m here to chat!</h2>
            <!-- <p v-if="isSeeking">
              I'm currently seeking opportunities to work with companies that
              can improve my skills not just in tech but also to be able to
              learn to lead and teach others. If I am the person you are looking
              for, feel free to reach me through email or my contact information
              in my resume.
            </p> -->
            <p v-if="isSeeking">
              I’d love to hear from you! <br>
              Feel free to reach out anytime.
            </p>
            <p v-else>
            </p>
          </div>
          <div>
            <a href="mailto:cathx618@gmail.com"> <EnvelopeIcon /> Say Hello! </a>
            <!-- <a
              v-if="isSeeking"
              href="/resume/my-resume.pdf"
              download="resume_poyizhi"
              target="_blank"
            >
              <PaperClipIcon /> My Resume
            </a> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { EnvelopeIcon, PaperClipIcon } from "@heroicons/vue/24/outline";
const isSeeking = true;
</script>
