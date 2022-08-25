<template>
    <v-container>
        <v-row no-gutters>
            <v-col cols="4">
                <v-card>
                    <v-container>
                        <v-list shaped>
                            <v-subheader>CLASSES</v-subheader>
                            <v-list-item-group
                                    v-model="selectedItem"
                                    color="primary"
                            >
                                <v-list-item
                                        v-for="(item, i) in items"
                                        :key="i"
                                >
                                    <v-list-item-icon>
                                        <v-icon v-text="item.icon"></v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title v-text="item.name"></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-container>
                </v-card>
            </v-col>
            <v-col cols="8">
                <v-card>
                    <v-container>
                        <v-tabs
                                v-model="tab"
                                centered
                                icons-and-text
                        >
                            <v-tabs-slider></v-tabs-slider>

                            <v-tab
                                    v-for="(item, i) in players.class"
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
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import classes from '../assets/kdr-assets/classes-index'
    import Vue from 'vue'
    import { rtdbPlugin } from 'vuefire'
    import db from '../db'

    Vue.use(rtdbPlugin)



    export default {
        name: "BlacklistView",
        components: {
        },
        data: () => ({
            name: "BlacklistView",
            selectedItem: 0,
            items: classes.classes,
            selectedTemplate: 0,
            templ: '',
            template_number: 2,
            players:[],
            tab: null,
            key: 0
        }),
        firestore:{
          players:db.collection('players'),
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>