<script setup lang='ts'>
import useCLientd from '../composables/useClients';

const { getPages, totalPagesNumber, currentPage } = useCLientd();

</script>

<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center mt-5 mb-5">
            <li
                class="page-item"
                :class="{disabled: currentPage <= 1}"
                @click="getPages(currentPage -1)"
                >
                <a class="page-link">Previous</a>
            </li>
            <li
                v-for="page of totalPagesNumber"
                :class="{active: currentPage === page}"
                :key="page"
                class="page-item"
                @click="getPages(page)"
                >
                <a class="page-link">{{ page }}</a>
            </li>
            <li
                class="page-item"
                :class="{disabled: currentPage >= totalPagesNumber.length}"
                @click="getPages(currentPage + 1)"
                >
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