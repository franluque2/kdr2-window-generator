<template>
    <v-card-text>
        <div class="blue">Treasures</div>
        <div class="text--primary">
            <v-textarea v-text="treasure_1"/>
            <v-textarea v-text="treasure_2"/>
            <v-textarea v-text="treasure_3"/>
        </div>
        <br>
        <div class="brown">Loot (Low Quality, 2 Gold)</div>
        <div class="text--primary">
            <v-textarea v-text="loot_poor_1"/>
            <v-textarea v-text="loot_poor_2"/>
            <v-textarea v-text="loot_poor_3"/>
        </div>
        <br>
        <div class="green">Loot (Medium Quality, 5 Gold)</div>
        <div class="text--primary">
            <v-textarea v-text="loot_mid_1"/>
            <v-textarea v-text="loot_mid_2"/>
            <v-textarea v-text="loot_mid_3"/>
        </div>
        <br>
        <div class="yellow">Loot (High Quality, 10 Gold)</div>
        <div class="text--primary">
            <v-textarea v-text="loot_high_1"/>
            <v-textarea v-text="loot_high_2"/>
            <v-textarea v-text="loot_high_3"/>
        </div>
    </v-card-text>
</template>

<script>
    export default {
        name: "pretty-template",
        props: ['treasure_1', 'treasure_2', 'treasure_3', 'loot_poor_1', 'loot_poor_2', 'loot_poor_3' , 'loot_mid_1', 'loot_mid_2', 'loot_mid_3', 'loot_high_1', 'loot_high_2', 'loot_high_3'],
        data: () => {
            return {
            }
        }
    }

</script>

<style scoped>

</style>