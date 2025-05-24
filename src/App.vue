<template>
  <div>
      <Header/>
      <HomePage v-if="page === ''"/>
      <BlogPage v-else-if="page === 'blog'"/>
      <ContactPage v-else-if="page === 'contact'"/>
      <NotFoundPage v-else/>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import { usePage } from './Composables/usePage';
import BlogPage from './Pages/BlogPage.vue';
import ContactPage from './Pages/ContactPage.vue';
import HomePage from './Pages/HomePage.vue';
import NotFoundPage from './Pages/NotFoundPage.vue';

const { page } = usePage()
</script>
