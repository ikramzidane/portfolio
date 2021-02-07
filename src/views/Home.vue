<template lang="pug">
  div
    .header
      .header-content
        .header-title Ahmad Ikram Abdul Patah
        .header-posttitle <strong>Portfolio</strong> - Previous (Notable) Projects

    .content
      .card(v-for="(item, index) in list")
        .card-title 
          span &num;{{ index + 1}}
          | {{ item.title }}
        .card-role: span {{ item.role }}
        .card-description
          .card-tags(v-html="item.description")

        .card-links
          template(v-for="link in item.links")
            a.card-links_ext(:href="link.url", target="_blank")
              svg(xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor')
                path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14')
              template(v-if="link.text") {{ link.text }}
              template(v-else) View Live
          router-link.card-links_int(:to="`/portfolio/${item.id}`")
            svg(xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor')
              path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z')
            | View screenshots

        .card-thumb
          img(:src="`/images/thumbnails/${item.id}.jpg`")
</template>



<script>
  import list from '@/helper/list';

  export default {
    name: 'Home',

    data: () => ({
      list: [],
    }),

    created() {
      this.list = list;
    }
  }
</script>