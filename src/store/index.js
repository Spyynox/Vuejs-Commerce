import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

class NotificationStore {
    constructor() {
        this.state = {
            count: 0
        }
    }

    incremement() {
        this.state.count++
    }

    decremement() {
        this.state.count--
    }
}

let notification_store = new NotificationStore()

const store = new Vuex.Store({
    state: {
        listProduits: [
            {
                id: 1,
                photo: "https://www.jpg.fr/content/images/product/32742-00J_1_xnl.jpg",
                title: "Eau",
                seller: "cristalline",
                price: 0.60,
                state: notification_store.state
            },
            {
                id: 2,
                photo: "https://cdn.pratico-pratiques.com/app/uploads/sites/2/2018/08/27215123/1-2-325-quel-lait-devrait-on-choisir.jpeg",
                title: "Lait",
                seller: "Les produits laitiers",
                price: 1,
                state: notification_store.state
            },
            {
                id: 3,
                photo: "https://static.openfoodfacts.org/images/products/20175481/front_fr.5.full.jpg",
                title: "Thé",
                seller: "Lord Nelson",
                price: 1.50,
                state: notification_store.state
            },
            {
                id: 4,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/280px-A_small_cup_of_coffee.JPG",
                title: "Café",
                seller: "Expresso",
                price: 1.10,
                state: notification_store.state
            },
        ]
    },

    methods: {
        addNotification: function () {
            notification_store.incremement()
        },
        callMethod: function () {
            this.todo.push({
                listProduits: this.listProduits.title,
                state: this.state,
            })
        },
    },

    computed: {
        count: function () {
            return this.state.count
        }
    },


    mutations: {
        pushProduits: (state, payload) => {
            state.listProduits.push(payload);
        },
        addNotification: function () {
            notification_store.incremement()
        },
        callMethod: function () {
            this.state.listProduits.push({
                state: this.state.count,
            })
            console.log(this.state.listProduits[0].state.count)
        },
    },

    getters: {
        listProduits: state => state.listProduits
    }
})


export default store