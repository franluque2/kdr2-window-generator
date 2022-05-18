<template>
    <v-card>
        <v-text-field v-text="paste_template" style="white-space: pre"></v-text-field>
    </v-card>
</template>

<script>

    export default {
        name: "discord-paste-template",
        props: ['player', 'treasure_1', 'treasure_2', 'treasure_3', 'loot_poor_1', 'loot_poor_2', 'loot_mid_1', 'loot_mid_2', 'loot_mid_3', 'loot_high_1', 'loot_high_2', 'loot_high_3'],
        data: () => {
            return {
                paste_template: ''
            }
        },
        methods: {
            prepare_string(player, treasure_1, treasure_2, treasure_3, loot_poor_1, loot_poor_2, loot_mid_1, loot_mid_2, loot_mid_3, loot_high_1, loot_high_2, loot_high_3) {
                var str = player;
                str = str.replace('treasure_1', treasure_1);
                str = str.replace('treasure_2', treasure_2);
                str = str.replace('treasure_3', treasure_3);
                str = str.replace('poor_loot_1', loot_poor_1);
                str = str.replace('poor_loot_2', loot_poor_2);
                str = str.replace('med_loot_1', loot_mid_1);
                str = str.replace('med_loot_2', loot_mid_2);
                str = str.replace('med_loot_3', loot_mid_3);
                str = str.replace('high_loot_1', loot_high_1);
                str = str.replace('high_loot_2', loot_high_2);
                str = str.replace('high_loot_3', loot_high_3);
                this.paste_template = str;
            }
        },
        mounted() {
            this.prepare_string(this.player.template_loot, this.treasure_1, this.treasure_2, this.treasure_3, this.loot_poor_1, this.loot_poor_2, this.loot_mid_1,
                this.loot_mid_2, this.loot_mid_3, this.loot_high_1, this.loot_high_2, this.loot_high_3)
        }
    }

</script>

<style scoped>

</style>