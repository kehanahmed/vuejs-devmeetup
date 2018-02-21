<template>
  <v-app>
    <v-navigation-drawer temporary fixed v-model="sideNav">
      <v-list>
        <!-- Here router used is the 'directive' -->
        <v-list-tile 
        v-for="item in menuItems" 
        :key="item.title"
        router
        :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon @click.native.stop="sideNav=!sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">DevMeetup</router-link>
        </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <!-- Here router used is the 'directive' -->
        <v-btn                  
        flat 
        v-for="item in menuItems"
        :key="item.title"
        router 
        :to="item.link">
          <v-icon dark left>{{item.icon}}</v-icon>
          {{item.title}}
          </v-btn>                
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
   </main>
  </v-app>
</template>
<script>
export default {
  data () {
    return {
      sideNav: false,
      menuItems: [
        /* For authentication users */
       {icon: 'supervisor_account', title: 'View Meetups', link: '/meetups'},
        {icon: 'room', title: 'Organize Meetup', link: '/meetup/new'},
        {icon: 'person', title: 'Profile', link: '/profile'},
        /* For Un-authentication users */
        {icon: 'face', title: 'Sign up', link: '/signup'},
        {icon: 'lock_open', title: 'Sign in', link: '/signin'}
      ]
    }
  }
}
</script>
