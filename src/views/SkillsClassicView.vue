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
                        Generate New Skills
                    </v-btn>
                    <v-card flat v-if="item.discord">
                        <discord_template :player="item" :skill_1="skill_1"
                                          :skill_2="skill_2"
                                          :skill_3="skill_3"
                                          :key="key"/>
                    </v-card>
                    <v-card flat v-if="!item.discord">
                        <pretty_template :skill_1="skill_1" :skill_2="skill_2"
                                         :skill_3="skill_3"
                                         :key="key"/>
                    </v-card>
                </v-tab-item>
            </v-tabs-items>
        </v-container>
    </v-card>
</template>

<script>
    import skills from '../assets/kdr-assets/skills-classic'
    import templates from "../assets/kdr-assets/response-templates-index"
    import pretty_template from "../assets/kdr-assets/response-templates/skills-pretty-template"
    import discord_template from "../assets/kdr-assets/response-templates/skills-discord-paste-template"

    export default {
        name:"SkillsViewClassic",
        components:{
            pretty_template, discord_template
        },
        data: () => ({
            name: "SkillsViewClassic",
            selectedTemplate: 0,
            templ: templates.templates,
            template_number: templates.templates.length,
            skill_1: '',
            skill_2: '',
            skill_3: '',
            tab: null,
            key: 0
        }),
        methods: {
            generate_skills() {
                this.skill_1 = skills.skills[Math.floor(Math.random() * skills.skills.length)];
                this.skill_2 = skills.skills[Math.floor(Math.random() * skills.skills.length)];
                this.skill_3 = skills.skills[Math.floor(Math.random() * skills.skills.length)];
            }, forceUpdate() {
                this.key++;
            },
            click_regenerate() {
                this.generate_skills()
                this.forceUpdate()
            }
        },
        mounted() {
            this.generate_skills()
        }
    }
</script>

<style scoped>

</style>