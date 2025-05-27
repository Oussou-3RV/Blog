<template>
  <div>
    <Header />
    <div class="container">
      <HomePage v-if="page === ''" />
      <BlogPage v-else-if="page === 'blog'" />
      <ContactPage v-else-if="page === 'contact'" />
      <SinglePage v-else-if="page === 'post'" :id="param"/>
      <NotFoundPage v-else />
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import { usePage } from './Composables/usePage';
import BlogPage from './Pages/BlogPage.vue';
import ContactPage from './Pages/ContactPage.vue';
import HomePage from './Pages/HomePage.vue';
import NotFoundPage from './Pages/NotFoundPage.vue';
import SinglePage from './Pages/singlePage.vue';

const { page, param } = usePage()

</script>
<style>
.container{
  padding-top: 2rem;
  max-width: calc(100vw - 4rem);
}
</style>
