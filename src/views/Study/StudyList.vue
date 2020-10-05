<template>
  <v-container>
    <v-row justify="center">
      <v-expansion-panels popout>
        <v-expansion-panel
          :key="item.created.seconds"
          v-for="item in orderedWhiskeyStudy"
        >
          <v-expansion-panel-header>{{
            item.whisckeyName
          }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="text-body-2">{{ item.tasting }}</div>
            <div class="text-body-2">
              {{ item.description }}
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
    <!-- <div>
      <v-card class="d-flex justify-space-between mb-3 pa-2" flat tile>
        <v-card
          :key="item.created.seconds"
          v-for="item in orderedWhiskeyStudy"
          class="pa-2"
          outlined
          tile
        >
          {{ item.whisckeyName }}
        </v-card>
      </v-card>
    </div> -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      whiskeyStudy: []
    }
  },
  created() {
    const db = this.$firebase.firestore()
    db.collection("study")
      .get()
      .then(snap => {
        const whiskeyStudy = []
        snap.forEach(doc => {
          whiskeyStudy.push(doc.data())
        })
        // this.whiskeyStudy = _.orderBy(whiskeyStudy, "whiskeyName", "desc")
        this.whiskeyStudy = whiskeyStudy
      })
  },
  computed: {
    orderedWhiskeyStudy: function() {
      return _.orderBy(this.whiskeyStudy, "created", "asc")
    }
  }
}
</script>
