<template>
  <h1>This is home page111</h1>
</template>

<script>
export default {
  name: 'App',

  created() {
    console.log('vite进入了home');
  },
  mounted() {
    console.log(this.$route);
  },
  methods: {
    close() {
      console.log('close');
    },
  },
};
</script>

<style>

</style>
