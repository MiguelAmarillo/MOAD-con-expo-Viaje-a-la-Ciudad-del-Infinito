<template>
  <div class="moad-footer">
    <div class="container moad-footer-container">
      <div class="footer-logo">
        <logo version="horizontal" subtitled />
      </div>
      <div class="footer-info">
        <div>El Museu Online d'Art Digital és el TFG de Carles Ibáñez</div>
        <a href="https://imcarl.es">imcarl.es</a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '../components/Logo'

export default {
  name: 'AppFooter',
  components: {
    Logo
  }
}
</script>

<style lang="scss">
@import '../sass/variables';

  .moad-footer {
    width: 100%;
    border-top: 1.5px solid $gray-light;
    padding: 3.5rem 0;
    margin-top: 4rem;

    &-container {
      display: flex;
    }

    .footer-logo {
      svg {
        height: 2rem;
        width: 13rem;
        fill: $gray;
      }
    }

    .footer-info {
      color: $gray;
      font-size: 0.9rem;
      margin-left: auto;
    }
  }

  @include media-breakpoint-down(md) {
    .moad-footer {
      &-container {
        flex-direction: column;
      }

      .footer-info {
        margin-left: 0;
        margin-top: 1rem
      }
    }
  }
</style>
