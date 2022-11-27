<script setup lang='ts'>
import { toRef, ref, watch } from 'vue';

interface Props {
    totalPages: number,
    currentPage: number,
}

interface Emits {
    (e: 'pageChanged', page: number): void,
}

const props = defineProps<Props>();

const emits = defineEmits<Emits>();

const currentPage = toRef(props, 'currentPage');

const totalPages = toRef(props, 'totalPages');

const totalPagesNumber = ref<number[]>([]);

watch(totalPages, () => {

    totalPagesNumber.value = [...new Array(totalPages.value)].map((v, i) => i + 1);

}, { immediate: true });


</script>

<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center mt-5 mb-5">
            <li class="page-item" :class="{ disabled: currentPage <= 1 }"
                @click="emits('pageChanged', currentPage - 1)">
                <a class="page-link">Previous</a>
            </li>
            <li v-for="page of totalPagesNumber" :class="{ active: currentPage === page }" :key="page" class="page-item"
                @click="emits('pageChanged', page)">
                <a class="page-link">{{ page }}</a>
            </li>
            <li class="page-item" :class="{ disabled: currentPage >= totalPages }"
                @click="emits('pageChanged', currentPage + 1)">
                <a class="page-link">Next</a>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.pagination {
    --bs-pagination-color: #e0dede;
    --bs-pagination-bg: transparent;
    --bs-pagination-border-width: 1px;
    --bs-pagination-border-color: #848484;
    --bs-pagination-border-radius: 0.375rem;
    --bs-pagination-hover-color: #151515;
    --bs-pagination-hover-bg: #848484;
    --bs-pagination-hover-border-color: #848484;
    --bs-pagination-focus-color: #ffffff;
    --bs-pagination-focus-bg: #848484;
    --bs-pagination-focus-box-shadow: none;
    --bs-pagination-active-color: #151515;
    --bs-pagination-active-bg: #848484;
    --bs-pagination-active-border-color: #848484;
    --bs-pagination-disabled-color: #151515;
    --bs-pagination-disabled-bg: #525252;
    --bs-pagination-disabled-border-color: #525252;
}

a {
    cursor: pointer;
}
</style>