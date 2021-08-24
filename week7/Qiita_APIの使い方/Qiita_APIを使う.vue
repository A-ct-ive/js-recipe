<template>
  <div>
    <h1>Qiita APIを使う</h1>
    <div>
      <h2>Qiitaの記事</h2>
      <button v-on:click="getQiitaArticle">記事を取得する</button>
      <div v-for="(article, index) in articles" v-bind:key="index">
        {{ index }} : {{ article.title }}
      </div>
    </div>
    <div>
      <h2>QiitaのユーザーID</h2>
      <button v-on:click="getQiitaUser">ユーザーを取得する</button>
      <div>
        {{ user.id }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      user: {},
    }
  },
  methods: {
    getQiitaArticle: function() {
      fetch(
        `https://qiita.com/api/v2/items?page=1&per_page=100&query=tag:Vue.js`,
      ) // ゆうくんそこであつてるよ!
        .then((res) => {
          return res.json()
        })
        .then((value) => {
          const articles = value
          console.log(articles) // 👈 value を コンソールで表示する行を追加
          console.log(articles[0].title)

          this.articles = value
        })
        .catch((error) => {
          console.error(error)
        })
    },
    getQiitaUser: function() {
      fetch(`https://qiita.com/api/v2/authenticated_user`, {
        headers: {
          Authorization: "Bearer " + "アクセストークン",
        },
      })
        .then((res) => {
          return res.json()
        })
        .then((value) => {
          this.user = value
        })
    },
  },
}
</script>
