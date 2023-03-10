<template>
    <v-card>
        <v-container>
            <v-tabs
                    v-model="tab"
                    centered
                    icons-and-text
            >
                <v-tabs-slider></v-tabs-slider>

                <v-tab
                        v-for="(item, i) in templ"
                        :key="i"
                        :href="'#tab-' + i"
                >
                    <v-img :src=item.img height="20px" width="50px"></v-img>
                </v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
                <v-tab-item
                        v-for="(item, i) in templ"
                        :key="i"
                        :value="'tab-' + i"
                >
                    <v-btn depressed @click="click_regenerate">
                        Generate New Auction (Special Item is only shown in the non-discord view)
                    </v-btn>
                    <v-card flat v-if="item.discord">
                        <discord_template :player="item" :skill_1="skill_1"
                                          :high_loot_generic_1="high_loot_generic_1"
                                          :high_loot_generic_2="high_loot_generic_2"
                                          :high_loot_generic_3="high_loot_generic_3"
                                          :high_loot_generic_4="high_loot_generic_4"
                                          :key="key"/>
                    </v-card>
                    <v-card flat v-if="!item.discord">
                        <pretty_template :skill_1="skill_1"
                                         :high_loot_generic_1="high_loot_generic_1"
                                         :high_loot_generic_2="high_loot_generic_2"
                                         :high_loot_generic_3="high_loot_generic_3"
                                         :high_loot_generic_4="high_loot_generic_4"
                                         :special_treasure="special_treasure"
                                         :key="key"/>
                    </v-card>
                </v-tab-item>
            </v-tabs-items>
        </v-container>
    </v-card>
</template>

<script>
    import skills from '../assets/kdr-assets/skills'
    import generic_loot from '../assets/kdr-assets/generic-loot'
    import auction_treasures from '../assets/kdr-assets/auction-treasures'
    import templates from "../assets/kdr-assets/response-templates-index"
    import pretty_template from "../assets/kdr-assets/response-templates/auction_pretty_template"
    import discord_template from "../assets/kdr-assets/response-templates/auction-discord-template"

    export default {
        name:"AuctionView",
        components:{
            pretty_template, discord_template
        },
        data: () => ({
            name: "AuctionView",
            selectedTemplate: 0,
            templ: templates.templates,
            template_number: templates.templates.length,
            skill_1: '',
            high_loot_generic_1: '',
            high_loot_generic_2: '',
            special_treasure:'',
            tab: null,
            key: 0
        }),
        methods: {
            generate_auction() {
                this.skill_1 = skills.skills[Math.floor(Math.random() * skills.skills.length)];
                this.high_loot_generic_1 = generic_loot.loot_high[Math.floor(Math.random() * generic_loot.loot_high.length)];
                this.high_loot_generic_2 = generic_loot.loot_high[Math.floor(Math.random() * generic_loot.loot_high.length)];
                while (this.high_loot_generic_1 === this.high_loot_generic_2)
                    this.high_loot_generic_2 = generic_loot.loot_high[Math.floor(Math.random() * generic_loot.loot_high.length)];
                this.high_loot_generic_3 = generic_loot.loot_high[Math.floor(Math.random() * generic_loot.loot_high.length)];
                while (this.high_loot_generic_3 === this.high_loot_generic_1 || this.high_loot_generic_3 === this.high_loot_generic_2)
                    this.high_loot_generic_3 = generic_loot.loot_high[Math.floor(Math.random() * generic_loot.loot_high.length)];
                this.high_loot_generic_4 = generic_loot.loot_high[Math.floor(Math.random() * generic_loot.loot_high.length)];
                while (this.high_loot_generic_4 === this.high_loot_generic_1 || this.high_loot_generic_4 === this.high_loot_generic_2 || this.high_loot_generic_4 === this.high_loot_generic_3)
                    this.high_loot_generic_4 = generic_loot.loot_high[Math.floor(Math.random() * generic_loot.loot_high.length)];

                this.special_treasure=auction_treasures.auctiontreasures[Math.floor(Math.random() * auction_treasures.auctiontreasures.length)]

            }, forceUpdate() {
                this.key++;
            },
            click_regenerate() {
                this.generate_auction()
                this.forceUpdate()
            }
        },
        mounted() {
            this.generate_auction()
        }
    }
</script>

<style scoped>

</style>