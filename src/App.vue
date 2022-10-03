<template>
    <v-app>
        <v-navigation-drawer
                v-model="drawer"
                app
                class="blue darken-4"
                dark
        >
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        KDR Admin Tools
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        By Bigmen
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list
                    dense
                    nav
            >
                <v-list-item
                        v-for="item in items"
                        :key="item.title"
                        link
                        :to="item.to"
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <!--  -->
        </v-navigation-drawer>

        <v-app-bar app class="red darken-3" dark>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>Electrumite Never Coming Back</v-toolbar-title>
        </v-app-bar>


        <v-main>
            <router-view/>
        </v-main>
    </v-app>
</template>

<script>

    export default {
        name: 'App',

        data: () => ({
            items: [
                {title: 'KDR-2 Skills', icon: 'mdi-arrow-up-bold', to:'/skills'},
                {title: 'KDR-2 Loot', icon: 'mdi-treasure-chest', to:'/loot'},
                {title: 'KDR-2 Class Skills', icon: 'mdi-controller-classic-outline',to:'/class-skills'},
                {title: 'KDR-2 GIGA Skills', icon: 'fa-solid fa-dumbbell',to:'/skills-giga'},
                {title: 'KDR Classic Skills', icon: 'mdi-folder-clock-outline', to:'/skills-classic'},
                {title: 'Blacklists and Tips', icon:'mdi-cash-multiple', to:'/blacklists'},
                {title: 'Gambler Skill Roller', icon:'mdi-dice-1', to:'/gambler-gen'}
            ],
            right: null,
            drawer: false
            //
        }),
    };
</script>
