<template>
  <v-card>
    <v-card-title class="blue white--text">
      <span class="headline">Menu</span>

      <v-spacer></v-spacer>
    </v-card-title>

    <v-card-text
      ><v-list>
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list></v-card-text
    >
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: ["지역구분", "블렌딩 여부", "Study Input", "Updates"]
    }
  }
}
</script>
