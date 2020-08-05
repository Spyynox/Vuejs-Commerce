<template>
    <div>
        <div v-for="item in $store.getters.listProduits.length" :key="item.id">
            
            <div class="produits_id" v-if="$route.params.id == $store.getters.listProduits[start + item].id">
                <h2>Titre: {{$store.getters.listProduits[start + item].title}}</h2>
                <img :src="$store.getters.listProduits[start + item].photo" >
                <div>Prix: {{ $store.getters.listProduits[start + item].price }} €</div>
                <div>Vendeur: {{ $store.getters.listProduits[start + item].seller }}</div>
                <div><strong class="strong">Achetez le Produit:</strong></div>
                
                <form v-on:submit.prevent="callMethod">
                    <label for="new-todo">Ajouter une card</label>
                    <input id="new-todo"  v-bind:value="$store.getters.listProduits[start + item].title" disabled="disabled">
                    <div class="flex">
                        <button @click="addNotification">-</button>
                        <div>{{ $store.getters.listProduits[start + item].state.count}}</div>
                        <button @click="addNotification">+</button>
                    </div>
                    <button>Mettre dans le panier</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapMutations, mapState, mapGetters } from 'vuex'





    export default {
        name: 'ProductListItem',
        data() {
            return {
                start: -1,
                photo: "",
                title: "",
                seller: "",
                price: 0,
                id: 0,
                todo: [
                    
                    
                ],
            };
        },

        computed: {
            ...mapState({
                listProduits: 'listProduits'
            }),
            ...mapGetters(['listProduits'])
        },
        methods: {
            ...mapMutations(['addNotification']),
            ...mapMutations(['callMethod']),
        },
        created() {
            // console.log(this.$store.getters.listProduits[0].id)
            // console.log(this.title)
            // console.log(this.todo[0].photo)
            console.log(this.$store._mutations.callMethod)
        },
    }
</script>

<style scoped>
    h2 {
        margin-top: 5%;
    }

    .produits_id div {
        margin-top: 3%;
    }

    img {
        width: 150px;
        height: 150px;
    }

    .strong {
        margin-top: 3% !important;
    }

    .flex {
        display: flex;
        justify-content: center;
    }

    .flex div {
        border: 1px solid black;
        width: 20px;
    }

    .flex button:first-child {
        margin-right: 2%;
    }

    .flex button:last-child {
        margin-left: 2%;
    }
</style>