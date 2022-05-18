<template>
    <v-card>
        <v-text-field v-text="paste_template" style="white-space: pre"></v-text-field>
    </v-card>
</template>

<script>
    export default {
        name: "skills-discord-paste-template",
        props: ['player', 'skill_1', 'skill_2', 'skill_3'],
        data: () => {
            return {
                paste_template: ''
            }
        }, methods: {
            prepare_string(player, skill_1, skill_2, skill_3) {
                var str = player;
                str = str.replace('skill_1', skill_1);
                str = str.replace('skill_2', skill_2);
                str = str.replace('skill_3', skill_3);
                this.paste_template = str;
            }
        },
        mounted() {
            this.prepare_string(this.player.template_skills, this.skill_1, this.skill_2, this.skill_3)
        }
    }
</script>

<style scoped>

</style>