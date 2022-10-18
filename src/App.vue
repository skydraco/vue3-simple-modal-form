<script setup>
  import { SimpleModal } from './components/';
  import { useStore } from 'vuex'

  const store = useStore();
</script>

<template>
    <SimpleModal :window-small="false">
      <div class="my-class">
        Hellow, world!
      </div>
    </SimpleModal>
    <button @click="store.commit('modal/CALL_MODAL', true)">
        Open modal window
    </button>
</template>