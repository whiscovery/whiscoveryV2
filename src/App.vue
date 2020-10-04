<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs centered class="ml-n9" color="grey darken-1">
        <v-tab v-for="(link, index) in links" :key="index">
          <router-link :to="link.to">{{ link.link }}</router-link>
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="2">
            <LeftComponent></LeftComponent>
          </v-col>

          <v-col cols="12" sm="8">
            <v-sheet min-height="70vh" rounded="lg">
              <div>
                <v-img alt="Vue logo" src="@/assets/top.png" />
              </div>
              <router-view></router-view>
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268" elevation="1">
              <RightComponent></RightComponent>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import LeftComponent from "@/components/Left"
import RightComponent from "@/components/Right"

export default {
  name: "App",
  components: {
    LeftComponent,
    RightComponent
  },
  data: () => ({
    links: [
      { link: "Dashboard", to: { name: "home" } },
      { link: "Study List", to: { name: "studylist" } },
      { link: "Study Input", to: { name: "studyform" } },
      { link: "abc", to: "" }
    ]
  })
}
</script>
