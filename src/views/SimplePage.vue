<template lang="pug">
  main.main
    h1.main__title {{ routeName }}
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'SimplePage',

  components: {
    HelloWorld,
  },

  computed: {
    routeName() {
      return this.$route.name || 'Error';
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__title {
    margin: 0;
    text-align: center;
    text-transform: capitalize;
  }
}
</style>
