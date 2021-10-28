<template>
  <div class="fixed inset-0 bg-white z-10 filter backdrop-filter backdrop-blur-sm bg-opacity-70 p-8">
    <div class="flex justify-start mb-5">
      <NuxtLink to="/2021">
        <ArrowLeftIcon class="w-10 h-10 text-yellow-600" />
      </NuxtLink>
    </div>
    <h1 class="text-3xl">{{dessert.name}}</h1>

    <vue-markdown-render :source="dessert.recipe" />
  </div>
</template>

<script setup lang="ts">
import { ArrowLeftIcon } from "@heroicons/vue/outline";
import { useRoute, useRouter } from "vue-router";
import { useDessert } from "~~/composables/useDesserts";

const route = useRoute();

const dessert = useDessert({
  year: route.params.year as string,
  dessertSlug: route.params.dessertSlug as string,
});
</script>