<template>
    <v-card-text>
        <div class="blue">Treasures</div>
        <div class="text--primary">
            <v-textarea v-text="treasure_1"/>
            <v-textarea v-text="treasure_2"/>
            <v-textarea v-text="treasure_3"/>
        </div>
        <br>
        <div class="orange">Class Loot</div>
        <div class="brown">Loot (Low Quality, {{game_variables.loot_costs.class_loot.low}} Gold)</div>
        <div class="text--primary">
            <v-textarea v-text="loot_poor_1"/>
            <v-textarea v-text="loot_poor_2"/>
            <v-textarea v-text="loot_poor_3"/>
        </div>
        <br>
        <div class="green">Loot (Medium Quality, {{game_variables.loot_costs.class_loot.mid}} Gold)</div>
        <div class="text--primary">
            <v-textarea v-text="loot_mid_1"/>
            <v-textarea v-text="loot_mid_2"/>
            <v-textarea v-text="loot_mid_3"/>
        </div>
        <br>
        <div class="yellow">Loot (High Quality, {{game_variables.loot_costs.class_loot.high}} Gold)</div>
        <div class="text--primary">
            <v-textarea v-text="loot_high_1"/>
            <v-textarea v-text="loot_high_2"/>
        </div>
        <br>

        <div class="red">Generic Loot</div>
        <div class="brown">Loot (Low Quality, {{game_variables.loot_costs.generic.low}} Gold)</div>
        <div class="text--primary">
            <v-textarea v-text="loot_poor_generic_1"/>
            <v-textarea v-text="loot_poor_generic_2"/>
            <v-textarea v-text="loot_poor_generic_3"/>
        </div>
        <br>
        <div class="green">Loot (Medium Quality, {{game_variables.loot_costs.generic.mid}} Gold)</div>
        <div class="text--primary">
            <v-textarea v-text="loot_mid_generic_1"/>
            <v-textarea v-text="loot_mid_generic_2"/>
            <v-textarea v-text="loot_mid_generic_3"/>
        </div>
        <br>
        <div class="yellow">Loot (High Quality, {{game_variables.loot_costs.generic.high}} Gold)</div>
        <div class="text--primary">
            <v-textarea v-text="loot_high_generic_1"/>
            <v-textarea v-text="loot_high_generic_2"/>
        </div>
    </v-card-text>
</template>

<script>
    import game_variables from "../game_variables"
    export default {
        name: "pretty-template",
        props: ['treasure_1', 'treasure_2', 'treasure_3', 'loot_poor_1', 'loot_poor_2', 'loot_poor_3' , 'loot_mid_1', 'loot_mid_2', 'loot_mid_3', 'loot_high_1', 'loot_high_2',
             'loot_poor_generic_1', 'loot_poor_generic_2', 'loot_poor_generic_3' , 'loot_mid_generic_1', 'loot_mid_generic_2', 'loot_mid_generic_3', 'loot_high_generic_1', 'loot_high_generic_2'],
        data: () => {
            return {
                game_variables:game_variables
            }
        }
    }

</script>

<style scoped>

</style>