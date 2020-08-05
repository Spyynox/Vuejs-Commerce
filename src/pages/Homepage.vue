<template>
    <div>
        <div v-for="item in articles.length" :key="item.id">
                <h2>Article n° {{ item + startArticle }}</h2>
                <div>Titre: {{articles[start+ item]}}</div>
                <ProductListItem></ProductListItem>
                <hr>
        </div>
    </div>
</template>


<script>
    import ProductListItem from "../components/ProductListItem";
    export default {
        name: 'Homepage',
        components: {
            ProductListItem
        },
        data() {
            let count =+ 1
            return {
                startArticle: 0,
                start: -1,
                end: 4,
                count,
                articles: ["eau", "lait", "thé", "café"]
            }
        },
        created() {
        }
    }

</script>


<style scoped>
hr {
    width: 80%;
}

img {
    height: 100px;
    width: 100px;
}
</style>