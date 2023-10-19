<template>
    <div class="mt-8">

        <div>
            <h2 class="text-xl text-gray-700 font-bold dark:text-blue-200 capitalize">
                Interested in
            </h2>

            <ul>
                <li class="text-gray-500 dark:text-gray-400">Artificial Intelligence</li>
                <li class="text-gray-500 dark:text-gray-400">Natural Language Process</li>
                <li class="text-gray-500 dark:text-gray-400">Knowledge Graph</li>
            </ul>

        </div>

        <div>
            <h2 class="text-xl text-gray-700 font-bold dark:text-blue-200 capitalize">
                Favorite things
            </h2>

            <div>
                <ul>
                    <li class="text-gray-500 dark:text-gray-400">Taking pictures →
                        <SocialIcon kind="instagram" href="https://www.instagram.com/j_pick_ture/?igshid=YmMyMTA2M2Y%3"
                            :size="5" />
                    </li>
                    <li class="text-gray-500 dark:text-gray-400">Playing the guitar</li>
                    <li class="text-gray-500 dark:text-gray-400">Traveling, Walking around</li>
                    <li class="text-gray-500 dark:text-gray-400">Korean Traditional things</li>
                </ul>
            </div>
        </div>

        <div>
            <h2 class="text-xl text-gray-700 font-bold dark:text-blue-200 capitalize">
                Previous Blog
            </h2>
            <ul class="flex flex-wrap gap-4 items-center">

                <li class="text-gray-500 dark:text-gray-400">The previous blog that I used from 2020 to 2022 is
                    <a href="https://blog.naver.com/cathx618" class="underline underline-offset-auto"
                        target="_blank">here</a>.
                </li>
            </ul>
        </div>

        <div>
            <h2 class="text-xl text-gray-700 font-bold dark:text-blue-200 capitalize">
                About my character
            </h2>
            <ul class="flex flex-wrap gap-4 items-center" style="list-style:none;">
                <li>
                    <img class="w-36 h-36" src="/images/author.png" />
                </li>
                <li>
                    <colorMC />
                    <buttonMC />
                </li>
                <li class="text-gray-500 dark:text-gray-400">
                    This is 'Maeng-Chong', a green bean and it's one of 'Doo-Cong' family which I named.
                    I usually used this character in my profiles and you can see this easily.
                    I hope I have a chance to tell you datails about this character one day!
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>
import colorMC from "./colorMC.vue";
import buttonMC from "./buttonMC.vue";
import SocialIcon from "./SocialIcon.vue"
export default {
    components: {
        colorMC,
        buttonMC,
        SocialIcon
    },
};
</script>
  