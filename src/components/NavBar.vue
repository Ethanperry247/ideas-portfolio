<template>
    <div class="navbar">
        <router-link to="/">Home</router-link>
        <router-link to="/tour">Virtual Tour</router-link>
        <router-link to="/photos">Photo Gallery</router-link>
        <!-- <router-link to="/map">Site Map</router-link> -->
        <router-link to="/about">About</router-link>
    </div>
</template>

<style scoped>

body {
    margin: 0;
    border: 0;
    padding: 0;
}

.navbar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.navbar a {
    color: #ffffff;
    height: auto;
    align-self: center;
    text-align: center;
    padding: 14px 20px;
    text-decoration: none;
    border-radius: 5px;
}

.navbar a:hover {
    /* background-color: rgba(0, 0, 0, 0.507); */
    transition: 0.3s;
    color: var(--color-light);
}

div:last-child {
    margin-left: auto;
}
</style>
    