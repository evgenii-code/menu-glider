<template lang="pug">
nav.menu(:style="menuStyles")
  .menu__wrapper
    //- Menu glider element
    span.menu__glider(aria-hidden="true", :style="gliderStyles")
      span.menu__circle
        the-menu-glider-offset.menu__offset(aria-hidden="true")

    //- Actual menu list
    ul.menu__list
      li.menu__item(v-for="(link, linkIndex) in links", :key="linkIndex")
        router-link.menu__link(
          :to="link.path",
          :class="{ 'menu__link--active': activeLinkId === linkIndex }"
        )
          font-awesome-icon.menu__icon(:icon="`fa-solid ${link.icon}`")
          span.menu__text {{ link.name }}
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import TheMenuGliderOffset from '@/components/TheMenuGliderOffset.vue';

export default {
  name: 'TheMenu',

  components: {
    FontAwesomeIcon,
    TheMenuGliderOffset,
  },

  props: {
    links: {
      type: Array,
      required: true,
    },

    activeLinkId: {
      type: Number,
      required: true,
    },

    menuWidth: {
      type: [Number, String],
      default: 600,
    },
  },

  computed: {
    menuStyles() {
      return {
        '--menu-length': this.links.length,
        '--menu-width': `${this.menuWidth}px`,
      };
    },

    gliderStyles() {
      if (this.activeLinkId < 0) {
        return {
          opacity: 0,
        };
      }

      return {
        '--menu-glider-position': this.activeLinkId,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  --menu-tile-width: 100% / var(--menu-length);
  --menu-glider-width: 50px;
  --menu-glider-gap: 4px;
  --menu-transition: 0.25s ease-in-out;

  background-color: var(--color-light);
  color: var(--color-text-dark);
  display: flex;

  &__wrapper {
    width: 100%;
    position: relative;
    display: flex;
    max-width: var(--menu-width, 600px);
    margin: 0 auto;
  }

  &__glider {
    position: absolute;
    width: var(--menu-glider-width);
    height: var(--menu-glider-width);
    transform: translate(-50%, -50%);
    display: flex;
    opacity: 1;
    left: calc(var(--menu-tile-width) * var(--menu-glider-position) + (var(--menu-tile-width) / 2));
    transition: left var(--menu-transition), opacity var(--menu-transition);
  }

  &__circle {
    position: relative;
    background-color: var(--color-lime);
    border-radius: 50%;
    width: 100%;
  }

  &__offset {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    width: 160%;
    z-index: -1;
    color: var(--color-background);
  }

  &__list {
    width: 100%;
    margin: 0;
    padding: 0;
    min-height: 3.2rem;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(var(--menu-length), 1fr);
  }

  &__item {
    display: flex;
  }

  &__link {
    position: relative;
    width: 100%;
    text-decoration: none;
    font: inherit;
    color: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &--active {
      .menu__icon {
        transform: translate(-50%, -200%);
      }

      .menu__text {
        opacity: 1;
        top: 65%;
      }
    }
  }

  &__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 1;
    transition: var(--menu-transition);
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  &__text {
    position: absolute;
    top: 100%;
    left: 50%;
    opacity: 0;
    transition: var(--menu-transition);
    transform: translateX(-50%);
    font-size: .8rem;
    color: var(--color-text-dark);
    text-transform: capitalize;
  }

  @media screen and (max-width: 375px) {
    &__text {
      font-size: .6rem;
    }
  }
}
</style>
