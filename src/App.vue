<template lang="pug">
  #app.app
    the-menu.app__menu(:links="links" :active-link-id="activeLinkId")

    router-view.app__router
  </div>
</template>

<script>
import { routes } from './router/index';
import TheMenu from './components/TheMenu.vue';

export default {
  components: {
    TheMenu,
  },

  computed: {
    links() {
      return routes.map((route) => {
        const link = { ...route, icon: route.meta.icon };

        delete link.component;
        delete link.meta;

        return link;
      });
    },

    activeLinkId() {
      const { path } = this.$route;

      return this.links.findIndex((link) => link.path === path);
    },
  },
};
</script>

<style lang="scss">
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  color: var(--color-text-light);
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;

  &__router {
    width: 100%;
    min-height: 100vh;
  }

  &__menu {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
}

</style>
