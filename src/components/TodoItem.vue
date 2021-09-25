<template>
<li>
    <div class="view">
      <input class="toggle" type="checkbox"/>
      <label class="label">{{title}}</label>
      <button class="destroy"></button>
    </div>
    <!-- <input class="edit" v-model="" /> -->
</li>
</template>
<script>
export default {
    name: '', 
    components: {}, 
    props: {
        title: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            sampleData: ''
        };
    },
    beforeCreate() {}, 
    created() {}, 
    beforeMount() {}, 
    mounted() {}, 
    beforeUpdate() {}, 
    updated() {}, 
    beforeUnMount() {}, 
    unmounted() {}, 
    methods: {}
}
</script>