<template>
  <div>
    <h1>This is an List page</h1>
    <ul>
      <li :key="item.key" v-for="item in whiskeyStudy">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      whiskeyStudy: []
    }
  },
  mounted() {
    const db = this.$firebase.firestore()
    db.collection("study")
      .get()
      .then(snap => {
        const whiskeyStudy = []
        snap.forEach(doc => {
          whiskeyStudy.push({ [doc.id]: doc.data() })
        })
        this.whiskeyStudy = whiskeyStudy
      })
  }
}
</script>
