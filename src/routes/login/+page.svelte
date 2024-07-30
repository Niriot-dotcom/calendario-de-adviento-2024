<script lang="ts">
    import type { PageData } from './$types';
    import AuthForm from '$lib/components/authForm.svelte';
    export let data: PageData;
</script>

<AuthForm />