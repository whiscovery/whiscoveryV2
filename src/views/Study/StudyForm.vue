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
          <v-col cols="12">
            <v-textarea v-model="form.comment" color="teal">
              <template v-slot:label>
                <div>코멘트</div>
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
          Save
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import fv from "../../plugins/firebase.js"

export default {
  data() {
    const defaultForm = Object.freeze({
      name: "",
      category: "",
      nation: "",
      whisckeyName: "",
      tasting: "",
      description: "",
      comment: [],
      imgfile: null
    })

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        name: [val => (val || "").length > 0 || "This field is required"]
      },
      defaultForm,
      snackbar: false
    }
  },

  computed: {
    formIsValid() {
      return (
        this.form.name &&
        this.form.category &&
        this.form.nation &&
        this.form.whisckeyName &&
        this.form.tasting &&
        this.form.description
      )
    }
  },

  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm)
      this.$refs.form.reset()
    },
    submit() {
      this.$firebase
        .firestore()
        .collection("study")
        .add({
          name: this.form.name,
          category: this.form.category,
          nation: this.form.nation,
          whisckeyName: this.form.whisckeyName,
          tasting: this.form.tasting,
          description: this.form.description,
          comment: this.form.comment,
          imgfile: this.form.imgfile,
          created: new Date(),
          updated: new Date()
        })
        .then(docRef => {
          console.log("Document written with ID: ", docRef.id)
          this.$firebase
            .firestore()
            .collection("config")
            .doc("studylastorder")
            .update({
              num: fv.increment(1)
            })
        })
        .catch(error => {
          console.error("Error adding document: ", error)
        })
      // this.$firebase
      //   .database()
      //   .ref()
      //   .child("study")
      //   .set({
      //     name: this.form.name,
      //     category: this.form.category,
      //     nation: this.form.nation,
      //     whisckeyName: this.form.whisckeyName,
      //     tasting: this.form.tasting,
      //     description: this.form.description,
      //     imgfile: this.form.imgfile
      //   })
      this.snackbar = true
      this.resetForm()
    }
  }
}
</script>
