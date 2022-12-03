<template>
    <v-container>
        <v-row no-gutters>
            <v-col cols="8">
                <v-card>
                    <v-container>
                        <v-tabs
                                v-model="tab"
                                centered
                                icons-and-text
                        >
                            <v-tabs-slider ></v-tabs-slider>

                            <v-tab
                                    v-for="(i) in Array(kdrnumber).keys()"
                                    :key="i"
                                    :href="'#tab-' + i"
                            >
                                <v-img  :src="'/avatars/kdr' + i.toString() + '.jpg'" height="120px" width="80px"></v-img>
                            </v-tab>
                        </v-tabs>
                        <v-tabs-items v-model="tab">
                            <v-tab-item
                                    v-for="(i) in Array(kdrnumber).keys()"
                                    :key="i"
                                    :value="'tab-' + i"

                            >
                                <v-card flat>
                                    <v-card-text>
                                        <div class="text--primary">Current Taxes for KDR {{i+1}}:</div>
                                        <v-text-field
                                                class="mt-0 pt-0"
                                                hide-details
                                                single-line
                                                type="number"
                                                style="width: 60px"

                                                v-model="taxes[i]['taxes']" label="Current Taxes" @change="function(){db.ref('taxes/'+i).update({taxes:taxes[i]['taxes']})}"></v-text-field>
                                    </v-card-text>
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
    import {db} from '../db'





    export default {
        name: "MassBlacklistView",

        data: () => ({
            name: "BlacklistView",
            selectedTemplate: 0,
            templ: [{name: 'KDR1',
                img: '/avatars/css.png'},
                {name: 'KDR2',
                    img: '/avatars/css.png'}],
            template_number: 2,
            players:[],
            tab: 0,
            kdrnumber:2,
            blacklist:'',
            db:db,
            taxes:[]

        }),
        firebase: {
            taxes: db.ref('taxes')
        }
        ,
        methods: {
            displaynewblacklist(){
                this.blacklist=""
            }},
        mounted(){
            // this.restartKdrS();
        }
    }
</script>

<style scoped>

</style>