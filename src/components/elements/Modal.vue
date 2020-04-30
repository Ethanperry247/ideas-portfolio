<template>
  <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                <slot name="header">
                  <h3><b>{{ title }}</b></h3>
                </slot>
              </div>

              <div class="modal-body">
                <slot name="body">
                    {{ body }}
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                  <button class="modal-default-button" @click="$emit('close')">
                    OK
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
</template>

<script>
export default {
    name: 'Modal',
    components: {
    }, 
    props: {
        title: String,
        body: String,
    }
}
</script>

<style scoped>

button {
    background-color: var(--color-two);
    color: white;
    border: none;
    border-radius: 3px;
    transition: 0.3s;
    cursor: pointer;
}

button:hover {
    background-color: var(--color-five);
    transition: 0.3s;
}

</style>