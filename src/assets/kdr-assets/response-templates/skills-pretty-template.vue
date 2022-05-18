<template>
    <v-card-text>
        <div>Skills</div>
        <div class="text--primary">
            <v-textarea v-text="skill_1"/>
            <v-textarea v-text="skill_2"/>
            <v-textarea v-text="skill_3"/>
        </div>
    </v-card-text>
</template>

<script>
    export default {
        name: "pretty-template",
        props: ['skill_1', 'skill_2', 'skill_3'],
        data: () => {
            return {
            }
        }
    }

</script>

<style scoped>

</style>