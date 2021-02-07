<template lang="pug">
  #app
    vue-page-transition(name="fade")
      router-view

    .single-backtotop(v-if="visible")
      a(href="#", @click.prevent="scrollTop")
        svg(xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor')
          path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 10l7-7m0 0l7 7m-7-7v18')
</template>


<script>
  export default {
    data: () => ({
      visible: false,
    }),

    methods: {
      scrollListener() {
        this.visible = window.scrollY > 600
      },

      scrollTop() {
        this.intervalId = setInterval(() => {
          if (window.pageYOffset === 0) {
            clearInterval(this.intervalId)
          }
          window.scroll(0, window.pageYOffset - 150)
        }, 20)
      },
    },

    mounted() {
      console.log('mounted');
      window.addEventListener('scroll', this.scrollListener);
    },

    
    beforeDestroy() {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }
</script>



<style lang="scss">
  @import '~nprogress/nprogress.css';
  #nprogress .bar {
    background: #28285b;
    height: 4px;
    opacity: 0.5;
  }

  #nprogress .peg {
    display: none;
  }

  #nprogress .spinner-icon {
    border-top-color: #28285b;
    border-left-color: #28285b;
    opacity: 0.5;
  }
</style>