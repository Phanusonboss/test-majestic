<template>
  <div class="htmlClass">
    <h1>{{ title }}</h1>
    <form>
      <div>{{ codestudent }}</div>
      <p1>{{ firstName }}</p1>
      <p2>{{ lastName }}</p2>
      <p3>{{ nickName }}</p3>
  </form>
  </div>
</template>

<script>
export default {
  name: 'InputPage',
  data() {
    return {
      title: 'รักฉันมั้ย',

      codestudent: '6604101366',
      firstName: 'Phanuson',
      lastName: 'Khamkhokkuad',
      nickName: 'Boss',
    }
  },
  methods: {
    submitForm() {
      this.$emit('submit form')
    },
  }
}
</script>

<style scoped></style>
