<template>
<div class="count-container">
    <span class="todo-count">총 <strong>{{count}}</strong> 개</span>
    <ul class="filters">
    <li>
        <a class="all" :class="{selected: selectedFilter==='all'}" href="#all" @click="clickFilter('all')">전체보기</a>
    </li>
    <li>
        <a class="active" :class="{selected: selectedFilter==='active'}" href="#active" @click="clickFilter('active')">해야할 일</a>
    </li>
    <li>
        <a class="completed" :class="{selected: selectedFilter==='completed'}" href="#completed" @click="clickFilter('completed')">완료한 일</a>
    </li>
    </ul>
</div>
</template>
<script>
export default {
    name: '', 
    components: {}, 
    data() {
        return {
            count: this.$getTodoList().length,
            selectedFilter: "all"
        }
    },
    methods: {
        getCount() {
            this.count = this.$getTodoList().length;
        },
        clickFilter(data) {
            this.selectedFilter = data;
            this.$emit("clickFilter", data);
        }
    }
}
</script>