<template>
    <div class="outer">
        <a href="">
            <img class="white-background" :src="require(`../../assets/pictures/${url}`)" :class="type" />
        </a>
    </div>
</template>

<script>
export default {
  name: 'photobox',
  components: {
  },
  props: {
      url: String,
      type: String
  }
}
</script>

<style scoped>


.box {
    color: whitesmoke;
    background-color: whitesmoke;
    border-radius: 5px;
    text-align: center;
    margin: 5px;
    padding: 0;
    width: calc(25% - 10px);
    object-fit: fill;
}

.outer {
    text-align: center;
}

.dynamic {
    margin: auto;
    border-radius: 1%;
    width: calc(90% - 10px);
    transition: 0.5s;
    border: solid;
    border-width: 5px;
    border-color: var(--color-dark);
    filter: brightness(60%);   
    -webkit-filter: brightness(60%);
    background-color: #000000;
}

.static {
    margin: auto;
    border-radius: 1%;
    width: calc(90% - 10px);
    transition: 0.5s;
    border: solid;
    border-width: 5px;
    border-color: var(--color-light);
    filter: brightness(100%);   
    -webkit-filter: brightness(100%);
    background-color: var(--color-light);
}

.dynamic:hover {
    width: calc(100% - 10px);
    transition: 0.5s;
    border-color: #FFFFFF;
    filter: brightness(100%);   
    -webkit-filter: brightness(100%);
    background-color: #FFFFFF;
    /* filter: blur(2px);
    -webkit-filter: blur(2px); */
}

.box:hover {
    /* box-shadow:
        1px 1px #5BA3EF,
        2px 2px #5BA3EF,
        3px 3px #5BA3EF,
        4px 4px #5BA3EF;
    -webkit-transform: translateX(-4px);
    transform: translateX(-4px); */
    width: calc(30% - 10px);
    transition: 0.5s ease; 
}
</style>