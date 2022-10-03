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
                    <v-text-field
                            hide-details
                            single-line
                            type="number" v-model="item.tip" @change="tip=item.tip" label="Tip"></v-text-field>
                    <v-btn depressed @click="click_regenerate">
                        Roll
                    </v-btn>

                    <v-card v-if="rolled_tip===0">
                        Roll Tip to Begin
                    </v-card>
                    <v-card v-else-if="tip<rolled_tip">
                        <v-card-text>
                        <div class="red text--primary" style="font-size: large">{{badlucktext}}</div>
                        <div>You tipped {{tip}} and needed {{rolled_tip}}!</div>
                        </v-card-text>
                    </v-card>
                    <v-card v-else-if="tip>=rolled_tip">

                            <v-card-text v-if="tip<=(item.max_tip/2)">
                            <div class="green">Such High Stakes Luck! You tipped {{tip}} and needed {{rolled_tip}}! have a skill! Also, as a reward, have half your gold, {{Math.ceil(tip/2)}} back!</div>
                            <v-textarea v-text="item.skill"/>
                        </v-card-text>
                            <v-card-text v-else>
                            <div class="green">You got it! You tipped {{tip}} and needed {{rolled_tip}}! have a skill!</div>
                            <v-textarea v-text="item.skill"/>
                        </v-card-text>

                    </v-card>

                </v-tab-item>
            </v-tabs-items>
        </v-container>
    </v-card>
</template>

<script>

    import gambler from "../assets/kdr-assets/classes/gambler"



    export default {
        name:"GamblerRollView",
        data: () => ({
            name: "SkillsGigaView",
            tab: null,
            key: 0,
            skill_1_max_tip:10,
            skill_2_max_tip:20,
            skill_3_max_tip:30,
            tip:1,
            rolled_tip:0,
            badlucktext:"",
            templ:[
                {title: "Skill Tier 1",img: "/avatars/gambler_skill_1.png", skill: gambler.class_skills[0], tip:0, max_tip:10},
                {title: "Skill Tier 2",img: "/avatars/gambler_skill_2.png", skill: gambler.class_skills[1], tip:0, max_tip:20},
                {title: "Skill Tier 3",img: "/avatars/gambler_skill_3.png", skill: gambler.class_skills[2], tip:0, max_tip:30}
            ]

        }),
        methods: {
            gamble(){
                if (this.tab=='tab-1')
                {
                    this.rolled_tip=Math.floor(Math.random() * (this.skill_2_max_tip)-1)+1
                }
                else if(this.tab=='tab-2')
                {
                    this.rolled_tip=Math.floor(Math.random() * (this.skill_3_max_tip)-1)+1
                }
                else
                {
                    this.rolled_tip=Math.floor(Math.random() * (this.skill_1_max_tip)-1)+1
                }

                let badluck=["Unlucky Dude", "Skill Issue", "Roll Better", "Just Roll the Out Bro!", "Stop being a Sala"];
                if (this.tip<this.rolled_tip)
                {
                    this.badlucktext=badluck[Math.floor(Math.random() * badluck.length)]
                }


            }
            ,
            forceUpdate() {
                this.key++;
            },
            click_regenerate() {
                this.gamble();
                this.forceUpdate();
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>