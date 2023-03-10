<template>
    <v-card-text>
        <div>The auction is opening! Here is what you can bid on!</div>
        <div class="text--primary">
            <div class="red">Item 1</div>
            <v-textarea v-text="high_loot_generic_3"/>
            <v-textarea v-text="high_loot_generic_4"/>
            <br>
            <div class="brown">Item 2</div>
            <v-textarea v-text="high_loot_generic_1"/>
            <v-textarea v-text="high_loot_generic_2"/>
            <br>
            <div class="green">Item 3</div>

            <v-textarea v-text="skill_1"/>

            <br>
            <div class="yellow">The Unique Item</div>
            <v-textarea v-text="special_treasure"/>
        </div>
    </v-card-text>
</template>

<script>
    export default {
        name: "auction_pretty_template",
        props: ['skill_1', 'high_loot_generic_1', 'high_loot_generic_2', "high_loot_generic_3", 'high_loot_generic_4', 'special_treasure'],
        data: () => {
            return {}
        }
    }

</script>

<style scoped>

</style>