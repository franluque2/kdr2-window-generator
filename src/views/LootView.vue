<template>
    <v-container>
        <v-container>
            Blacklist:
            <v-textarea
                          v-model="blacklist_text"
                          placeholder=""
                          solo
                          @input="updateblacklist"></v-textarea>
        </v-container>
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
                                    Generate New Loot
                                </v-btn>
                                <v-card flat v-if="item.discord">
                                    <loot_discord_paste_template :player="item" :treasure_1="treasure_1"
                                                                 :treasure_2="treasure_2"
                                                                 :treasure_3="treasure_3" :loot_poor_1="loot_poor_1"
                                                                 :loot_poor_2="loot_poor_2"
                                                                 :loot_mid_1="loot_mid_1" :loot_mid_2="loot_mid_2"
                                                                 :loot_mid_3="loot_mid_3" :loot_high_1="loot_high_1"
                                                                 :loot_high_2="loot_high_2" :loot_high_3="loot_high_3"
                                                                 :key="key"/>
                                </v-card>
                                <v-card flat v-if="!item.discord">
                                    <pretty_paste_template :treasure_1="treasure_1" :treasure_2="treasure_2"
                                                           :treasure_3="treasure_3" :loot_poor_1="loot_poor_1"
                                                           :loot_poor_2="loot_poor_2"
                                                           :loot_mid_1="loot_mid_1" :loot_mid_2="loot_mid_2"
                                                           :loot_mid_3="loot_mid_3" :loot_high_1="loot_high_1"
                                                           :loot_high_2="loot_high_2" :loot_high_3="loot_high_3"
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
    import templates from '../assets/kdr-assets/response-templates-index'
    import loot_discord_paste_template from '../assets/kdr-assets/response-templates/loot-discord-paste-template'
    import pretty_paste_template from '../assets/kdr-assets/response-templates/loot-pretty-template'
    import treasures from '../assets/kdr-assets/treasures'

    export default {
        name: "LootView",
        components: {
            loot_discord_paste_template,
            pretty_paste_template
        },
        data: () => ({

            selectedItem: 0,
            items: classes.classes,
            tab: null,
            selectedTemplate: 0,
            templ: templates.templates,
            template_number: templates.templates.length,
            treasure_1: '',
            treasure_2: '',
            treasure_3: '',
            loot_poor_1: '',
            loot_poor_2: '',
            loot_mid_1: '',
            loot_mid_2: '',
            loot_mid_3: '',
            loot_high_1: '',
            loot_high_2: '',
            loot_high_3: '',
            blacklist:[],
            blacklist_text:'',
            key: 0
        }),
        methods: {
            generate_loot: function (kdr_class) {

                var difference_loot_poor = kdr_class.loot_poor.filter(x => !this.blacklist.includes(x))
                var difference_loot_mid = kdr_class.loot_mid.filter(x => !this.blacklist.includes(x));
                var difference_loot_high = kdr_class.loot_high.filter(x => !this.blacklist.includes(x));

                this.treasure_1 = treasures.treasures[Math.floor(Math.random() * treasures.treasures.length)];
                this.treasure_2 = treasures.treasures[Math.floor(Math.random() * treasures.treasures.length)];
                while ((this.treasure_1 === this.treasure_2))
                    this.treasure_2 = treasures.treasures[Math.floor(Math.random() * treasures.treasures.length)];
                this.treasure_3 = treasures.treasures[Math.floor(Math.random() * treasures.treasures.length)];
                while ((this.treasure_1 === this.treasure_3) || (this.treasure_2 === this.treasure_3))
                    this.treasure_3 = treasures.treasures[Math.floor(Math.random() * treasures.treasures.length)];

                if (difference_loot_poor.length>1){
                    this.loot_poor_1 = kdr_class.loot_poor[Math.floor(Math.random() * kdr_class.loot_poor.length)];
                    while(this.blacklist.includes(this.loot_poor_1))
                        this.loot_poor_1 = kdr_class.loot_poor[Math.floor(Math.random() * kdr_class.loot_poor.length)];
                    this.loot_poor_2 = kdr_class.loot_poor[Math.floor(Math.random() * kdr_class.loot_poor.length)];
                    while ((this.loot_poor_1 === this.loot_poor_2)|| (this.blacklist.includes(this.loot_poor_2)))
                        this.loot_poor_2 = kdr_class.loot_poor[Math.floor(Math.random() * kdr_class.loot_poor.length)];
                }else {
                    if (difference_loot_poor.length===1){
                        this.loot_poor_1=difference_loot_poor[0];
                        this.loot_poor_2='';
                    } else
                    {
                        this.loot_poor_1='';
                        this.loot_poor_2='';
                    }}

                if (difference_loot_mid.length>2){
                this.loot_mid_1 = kdr_class.loot_mid[Math.floor(Math.random() * kdr_class.loot_mid.length)];
                while(this.blacklist.includes(this.loot_mid_1))
                    this.loot_mid_1 = kdr_class.loot_mid[Math.floor(Math.random() * kdr_class.loot_mid.length)];
                this.loot_mid_2 = kdr_class.loot_mid[Math.floor(Math.random() * kdr_class.loot_mid.length)];
                while ((this.loot_mid_1 === this.loot_mid_2) || (this.blacklist.includes(this.loot_mid_2)))
                    this.loot_mid_2 = kdr_class.loot_mid[Math.floor(Math.random() * kdr_class.loot_mid.length)];
                this.loot_mid_3 = kdr_class.loot_mid[Math.floor(Math.random() * kdr_class.loot_mid.length)];
                while ((this.loot_mid_1 === this.loot_mid_3) || (this.loot_mid_2 === this.loot_mid_3) || (this.blacklist.includes(this.loot_mid_3)))
                this.loot_mid_3 = kdr_class.loot_mid[Math.floor(Math.random() * kdr_class.loot_mid.length)];
                }else {
                    if (difference_loot_mid.length===2){
                        this.loot_mid_1=difference_loot_mid[0];
                        this.loot_mid_2=difference_loot_mid[1];
                        this.loot_mid_3='';
                    }
                    else if (difference_loot_mid.length===1){
                        this.loot_mid_1=difference_loot_mid[0];
                        this.loot_mid_2='';
                        this.loot_mid_3='';
                    } else
                    {
                        this.loot_mid_1='';
                        this.loot_mid_2='';
                        this.loot_mid_3='';
                    }}

                if (difference_loot_high.length>2) {
                    this.loot_high_1 = kdr_class.loot_high[Math.floor(Math.random() * kdr_class.loot_high.length)];
                    while (this.blacklist.includes(this.loot_high_1))
                        this.loot_high_1 = kdr_class.loot_high[Math.floor(Math.random() * kdr_class.loot_high.length)];
                    this.loot_high_2 = kdr_class.loot_high[Math.floor(Math.random() * kdr_class.loot_high.length)];
                    while ((this.loot_high_1 === this.loot_high_2) || (this.blacklist.includes(this.loot_high_2)))
                        this.loot_high_2 = kdr_class.loot_high[Math.floor(Math.random() * kdr_class.loot_high.length)];
                    this.loot_high_3 = kdr_class.loot_high[Math.floor(Math.random() * kdr_class.loot_high.length)];
                    while ((this.loot_high_1 === this.loot_high_3) || (this.loot_high_2 === this.loot_high_3) || (this.blacklist.includes(this.loot_high_3)))
                        this.loot_high_3 = kdr_class.loot_high[Math.floor(Math.random() * kdr_class.loot_high.length)];
                } else {
                    if (difference_loot_high.length===2){
                        this.loot_high_1=difference_loot_high[0];
                        this.loot_high_2=difference_loot_high[1];
                        this.loot_high_3='';
                    }
                    else if (difference_loot_high.length===1){
                        this.loot_high_1=difference_loot_high[0];
                        this.loot_high_2='';
                        this.loot_high_3='';
                    } else
                    {
                        this.loot_high_1='';
                        this.loot_high_2='';
                        this.loot_high_3='';
                    }
                }
            }, forceUpdate() {
                this.key++;
            },
            click_regenerate() {
                this.generate_loot(classes.classes[this.selectedItem])
                this.forceUpdate()
            },
            updateblacklist(){
                this.blacklist=this.blacklist_text.split('\n')
            }


        }
    }
</script>

<style scoped>

</style>