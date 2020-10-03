<template>
  <v-card flat class="pa-5">
    <v-snackbar v-model="snackbar" absolute top right color="success">
      <span>Registration successful!</span>
      <v-icon dark>
        mdi-checkbox-marked-circle
      </v-icon>
    </v-snackbar>
    <v-form ref="form" @submit.prevent="submit">
      <v-container fluid>
        <v-row>
          <v-col cols="4" sm="4">
            <v-text-field
              v-model="form.name"
              :rules="rules.name"
              color="purple darken-2"
              label="Name"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="4" sm="4">
            <v-text-field
              v-model="form.category"
              :rules="rules.name"
              color="blue darken-2"
              label="분류"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="4" sm="4">
            <v-text-field
              v-model="form.nation"
              :rules="rules.name"
              color="blue darken-2"
              label="지역분류"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="12">
            <v-text-field
              v-model="form.whisckeyName"
              :rules="rules.name"
              color="blue darken-2"
              label="Whisckey 이름"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea v-model="form.tasting" color="teal">
              <template v-slot:label>
                <div>테이스팅 노트</div>
              </template>
            </v-textarea>
          </v-col>
          <v-col cols="12">
            <v-textarea v-model="form.description" color="teal">
              <template v-slot:label>
                <div>설명</div>
              </template>
            </v-textarea>
          </v-col>
          <v-col cols="12" sm="12">
            <v-file-input
              v-model="form.imgfile"
              accept="image/*"
              label="File input"
            ></v-file-input>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-btn text @click="resetForm">
          Cancel
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn :disabled="!formIsValid" text color="primary" type="submit">
          Register
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data() {
    const defaultForm = Object.freeze({
      name: "",
      category: "",
      nation: "",
      whiskeyName: "",
      tasting: "",
      description: "",
      imgfile: null,
      snackbar: false
    })

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        name: [val => (val || "").length > 0 || "This field is required"]
      },
      defaultForm
    }
  },

  computed: {
    formIsValid() {
      return (
        this.form.name &&
        this.form.category &&
        this.form.nation &&
        this.form.whiskeyName &&
        this.form.tasting &&
        this.form.description &&
        this.form.imgfile
      )
    }
  },

  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm)
      this.$refs.form.reset()
    },
    submit() {
      this.snackbar = true
      this.resetForm()
    }
  }
}
</script>
