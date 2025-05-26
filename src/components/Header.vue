<template>
<header class="header">
    <a href="#" class="header_logo">monSite</a>
    <nav>
        <a href="#blog" class="blog">Blog</a>
        <a href="#contact" class="contact">Contact</a>
    </nav>
</header>
    
</template>

<script setup>

</script>

<style>
.header{
    display: flex;
    align-items: center;
    padding: .5rem 1rem;
    gap: 1rem;
    background: #f06e1789;
    border-bottom: 1px solid white;
}

.header a{
    text-decoration: none;
    color: inherit;
}
.header nav{
    display: flex;
    align-items: center;
    gap: .5rem;
}
.header_logo{
    font-size: 1.4rem;
}
</style>