<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Posts" />
    <AuthenticatedLayout>
        <h1>Posts</h1>
    </AuthenticatedLayout>
</template>