<template>
    <div id="app">
        <div>
            <ProductListItems></ProductListItems>
        </div>
    </div>
</template>


<script>
    import ProductListItems from "../components/ProductListItem";

    export default {
        name: 'Product',
        components: {
            ProductListItems
        },
    }
</script>