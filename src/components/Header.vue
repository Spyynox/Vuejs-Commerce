<template>
    <header>
        <h1>Maxime's Production</h1>
        <nav>
            <li>item1</li>
            <li>item2</li>
            <li>item3</li>
        </nav>
    </header>
</template>


<script>
    export default {
        name: 'Header',
        props: {
            msg: String
        }
    }
</script>


<style scoped>
header {
    display: flex;
    justify-content: space-between;
    background-color: red;
    color: white;
}

nav {
    display: flex;
    margin-top: 2%;
}

nav li {
    margin-right: 10px;
    list-style: none;
}
</style>