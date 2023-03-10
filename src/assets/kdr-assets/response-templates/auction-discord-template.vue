<template>
    <v-card>
        <v-text-field v-text="paste_template" style="white-space: pre"></v-text-field>
    </v-card>
</template>

<script>
    export default {
        name: "auction-discord-template",
        props: ['player', 'skill_1', 'high_loot_generic_1', 'high_loot_generic_2', 'high_loot_generic_3', 'high_loot_generic_4'],
        data: () => {
            return {
                paste_template: ''
            }
        }, methods: {
            prepare_string(player, skill_1, high_loot_generic_1, high_loot_generic_2, high_loot_generic_3, high_loot_generic_4) {
                var str = player;
                str = str.replace('skill_1', skill_1);
                str = str.replace('high_loot_generic_1', high_loot_generic_1);
                str = str.replace('high_loot_generic_2', high_loot_generic_2);
                str = str.replace('high_loot_generic_3', high_loot_generic_3);
                str = str.replace('high_loot_generic_4', high_loot_generic_4);
                this.paste_template = str;
            }
        },
        mounted() {
            this.prepare_string(this.player.template_auction, this.skill_1, this.high_loot_generic_1, this.high_loot_generic_2, this.high_loot_generic_3, this.high_loot_generic_4)
        }
    }
</script>

<style scoped>

</style>