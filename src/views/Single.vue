<template lang="pug">
  .single
    .single-header
      .single-header-content
        .single-back
          router-link(to="/") 
            svg(xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor')
              path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6')
        .single-counter
          | {{ currentIndex }} of {{ total }}
        .single-title {{ item.title }}
        .single-next-prev
          template(v-if="previousId")
            router-link.single-prev(:to="`/portfolio/${previousId}`") 
              svg(xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor')
                path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M7 16l-4-4m0 0l4-4m-4 4h18')
              | Previous Project
          template(v-if="nextId")
            router-link.single-next(:to="`/portfolio/${nextId}`") 
              | Next Project
              svg(xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor')
                path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M17 8l4 4m0 0l-4 4m4-4H3')



    .single-content
      .single-content-meta
        .single-role {{ item.role }}
        .single-description: .single-tags(v-html="item.description")
        .card-links(v-if="item.links")
          template(v-for="link in item.links")
            a.card-links_ext(:href="link.url", target="_blank")
              svg(xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor')
                path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14')
              template(v-if="link.text") {{ link.text }}
              template(v-else) View Live

      .single-content-image(v-for="(image, index) in imageList")
        .single-content-number {{ index + 1 }}
        img(:src="image")

</template>


<script>
  import list from '@/helper/list';

  export default {
    name: 'Single',

    data: () => ({
      item: {},
      previousId: '',
      nextId: '',
      total: list.length,
      currentIndex: 0,
      
    }),

    computed: {
      imageList() {
        let _arr = Array(this.item.count).fill(0);

        _arr = _arr.map((item, index) => {
          return `/images/${this.item.id}/${index + 1}.jpg`;
        })

        return _arr;
      }
    },

    methods: {
      resetData() {
        this.previousId = '';
        this.nextId = '';
        this.item = {};
      },

      updateCurrentItem(currentId) {
        this.resetData();

        let totalItems = list.length;
        let index = list.findIndex(item => item.id === currentId);

        if(index === -1) {
          return;
        }

        this.item = list[index];

        if(index != 0) {
          this.previousId = list[index - 1].id;
        }

        if(index + 1 !== totalItems) {
          this.nextId = list[index + 1].id;
        }

        this.currentIndex = index + 1;
      },
    },

    created() {
      this.updateCurrentItem(this.$route.params.id);
    },
    beforeRouteUpdate(to, from, next) {
      this.updateCurrentItem(to.params.id);
      next();
    },
  }
  
</script>
