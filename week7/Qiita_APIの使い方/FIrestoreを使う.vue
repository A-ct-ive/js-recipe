<template>
  <div>
    <h1>Firestoreを使う</h1>
    <div>
      <input type="text" v-model="inputText" />
      <button v-on:click="postMessage">メッセージをFirestoreに保存する</button>
      <div v-for="(message, index) in messages" v-bind:key="index">
        {{ message.text }}
      </div>
      <div>{{ inputText }}</div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  data() {
    return {
      messages: [],
      inputText: "",
    }
  },
  methods: {
    postMessage() {
      const data = {
        text: this.inputText,
      }
      firebase
        .firestore()
        .collection("messages")
        .add(data)
        .then(() => {
          this.messages.push(data)
        })
    },
  },
  created() {
    firebase
      .firestore()
      .collection("messages")
      .get()
      .then((snapshot) => {
        for (let i = 0; i < snapshot.docs.length; i++) {
          this.messages.push(snapshot.docs[i].data())
        }
      })
  },
}
</script>
