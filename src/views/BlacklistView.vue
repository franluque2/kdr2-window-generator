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
                                        @click="displaynewblacklist"

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
                <v-btn @click="restartKdrS" color="red">DANGER ZONE: RESTART BOTH KDR-S</v-btn>
            </v-col>
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
                                    v-for="(item, i) in players.filter(playerfilter)"
                                    :key="i"
                                    :href="'#tab-' + i"
                                    @click="displaynewblacklist"
                            >
                                <v-img  :src="'/avatars/kdr' + i.toString() + '.jpg'" height="120px" width="80px"></v-img>
                            </v-tab>
                        </v-tabs>
                        <v-tabs-items v-model="tab">
                            <v-tab-item
                                    v-for="(item, i) in players.filter(playerfilter)"
                                    :key="i"
                                    :value="'tab-' + i"

                            >
                                <v-card flat>
                                    <v-btn @click="refreshclass">Reset Class?</v-btn>
                                    <v-card-text>
                                        <v-text-field v-model="item.name" label="Player Name" @change="function(){db.ref('players/'+item['.key']).update({name:item.name})}"></v-text-field>
                                        <div class="text--primary">
                                            Tips so Far:</div>
                                            <v-card-text v-text="item.tip"></v-card-text>

                                        <v-text-field
                                                      hide-details
                                                      single-line
                                                      type="number" v-model="tip_to_add" label="Tip to Add"></v-text-field>
                                        <v-btn @click="function(){db.ref('players/'+item['.key']).update({tip:parseInt(item.tip)+parseInt(tip_to_add)})}">Add Tip</v-btn>




                                        <div class="text--primary"> Rolled Tip:</div>
                                        <v-card-text v-if="(item.isstaff!==true) || (item.knownvalue===true) || (item.tip>=item.tiprequired)" v-text="item.tiprequired"></v-card-text>
                                        <v-img  v-if="!((item.isstaff!==true) || (item.knownvalue===true) || (item.tip>=item.tiprequired))" src="/avatars/staffnochet.gif" max-height="150"
                                                                                                               max-width="150"></v-img>

                                        <v-img v-if="(item.tip>=item.tiprequired)" src="/avatars/congratulations.gif" label="Got the Tip Goal!"></v-img>

                                        <v-checkbox
                                                v-model="item.isstaff"
                                                label="Staff?"
                                                :disabled="item.isstaff===true"
                                        ></v-checkbox>

                                        <div class="text--primary">Can see the Tip:</div>
                                        <v-checkbox
                                                v-model="item.knownvalue"
                                                :disabled="item.knownvalue===true"
                                        ></v-checkbox>

                                        <div class="text--primary">Tip Reduced (Super Smooth talker):</div>
                                        <v-checkbox
                                                v-model="item.reducedcost"
                                                :disabled="item.reducedcost===true"
                                                @click="function(){db.ref('players/'+item['.key']).update({tiprequired:item.tiprequired-10})}"
                                        ></v-checkbox>
                                        <div class="text--primary">Blacklist:</div>
                                        <v-card-text v-text="item.blacklist" style="white-space: pre-line"></v-card-text>
                                        <v-textarea v-model="blacklist" :placeholder="item.blacklist"></v-textarea>
                                        <v-btn @click="function(){ db.ref('players/'+item['.key']).update({blacklist:blacklist})}" value="">Manually Update Blacklist</v-btn>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                        </v-tabs-items>
                    </v-container>
                </v-card>

            </v-col>

        </v-row>
        <ConfirmDlg ref="confirm" />
    </v-container>

</template>

<script>
    import classes from '../assets/kdr-assets/classes-index'
    import {db} from '../db'





    export default {
        name: "BlacklistView",
        components: {
            ConfirmDlg: () => import('../components/ConfirmDlg'),
        },
        data: () => ({
            name: "BlacklistView",
            selectedItem: 0,
            items: classes.classes,
            selectedTemplate: 0,
            templ: [{name: 'KDR1',
                img: '/avatars/css.png'},
                {name: 'KDR2',
                    img: '/avatars/css.png'}],
            template_number: 2,
            players:[],
            tab: null,
            key: 0,
            blacklist:'',
            tip_to_add:0,
            db:db

        }),
        firebase: {
            players: db.ref('players')
        }
        ,
        methods: {
            async restartKdrS() {
                if (
                    await this.$refs.confirm.open(
                        "Confirm",
                        "Are you sure you want to reset the kds? All info will be lost!"
                    )){
                    if (
                        await this.$refs.confirm.open(
                            "Confirm",
                            "This is serious Sala, there's no going back!"
                        )){
                db.ref('players/').remove();
                for (let j = 0; j < this.items.length; j++) {
                    for (let i = 0; i < 2; i++) {
                        let max_tip=this.items[j].tip_max;
                        let min_tip=this.items[j].tip_min;
                       db.ref("players").push({
                           classid:j,
                           playerid:i,
                           name: '',
                           tip: 0,
                           tiprequired: Math.floor(Math.random() *( max_tip-min_tip+1 )) + min_tip,
                           isstaff: false,
                           reducedcost: false,
                           knownvalue: false,
                           blacklist: ''
                        })

                    }
                }
            }}},
            playerfilter(player){
                return (player.classid===this.selectedItem)
            },
            targetfinder(target){
                return target.classid===this.selectedItem.toString()
            }
            ,
            displaynewblacklist(){
                this.blacklist=''
            },
            async refreshclass(){
                if (
                    await this.$refs.confirm.open(
                        "Confirm",
                        "Are you sure you want to reset this class? All tip and blacklist info will be lost! This is also fairly buggy"
                    )){
                    let dbkey=""
                    db.ref('players').orderByChild('playerid').equalTo(parseInt(this.tab.charAt(this.tab.length - 1)))
                        .once('value', snapshot => {
                            let str = this.selectedItem
                            let key=""
                            snapshot.forEach(function(childSnapshot) {
                                if(childSnapshot.val().classid==str){
                                    key=childSnapshot.key;
                                }
                                dbkey=key
                            })});
                    db.ref('players/' + dbkey).remove();
                    let max_tip=this.items[this.selectedItem].tip_max;
                    let min_tip=this.items[this.selectedItem].tip_min;
                    db.ref("players").push({
                        classid:this.selectedItem,
                        playerid:parseInt(this.tab.charAt(this.tab.length - 1)),
                        name: '',
                        tip: 0,
                        tiprequired: Math.floor(Math.random() *( max_tip-min_tip+1 )) + min_tip,
                        isstaff: false,
                        reducedcost: false,
                        knownvalue: false,
                        blacklist: ''
                    })
                }

            }

        },
        mounted(){
            // this.restartKdrS();
        }
    }
</script>

<style scoped>

</style>