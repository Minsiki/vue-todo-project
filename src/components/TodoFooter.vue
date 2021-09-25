<template>
<div class="count-container">
    <span class="todo-count">총 <strong>{{totalCount}}</strong> 개</span>
    <ul class="filters">
    <li>
        <a class="all selected" href="#all">전체보기</a>
    </li>
    <li>
        <a class="active" href="#active">해야할 일</a>
    </li>
    <li>
        <a class="completed" href="#completed">완료한 일</a>
    </li>
    </ul>
</div>
</template>
<script>
export default {
    name: '', 
    components: {}, 
    data() {
    },
    computed: {
        totalCount() {
            return this.$store.getters.getTotalCount;
        }
    }
}
</script>