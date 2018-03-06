<template>
  <v-dialog width="350px" persistent v-model="editDialog">
      <v-btn accent slot="activator">
          Edit Date
      </v-btn>
      <v-card>
          <v-container>
              <v-layout row wrap>
                  <v-flex xs12>
                      <v-card-title>Edit Meetup Date</v-card-title>
                      {{meetup.date}} || {{editableDate}}
                  </v-flex>
              </v-layout>
              <v-divider></v-divider>
              <v-layout row wrap>
                  <v-flex xs12>
                    <v-date-picker v-model="editableDate">
                        <template scoped ="{save, cancel}">
                            <v-btn class="blue--text darken-1" flat @click.native="editDialog = false">Close</v-btn>
                            <v-btn class="blue--text darken-1" flat @click.native="onSaveChanges">Save</v-btn>
                        </template>
                    </v-date-picker>
                  </v-flex>
              </v-layout>
          </v-container>
      </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['meetup'],
  data () {
    return {
      editDialog: false,
      editableDate: '2018-03-12',
      editableTime: null
    }
  },
  methods: {
    onSaveChanges () {
      // const newDate = this.editableDate
      // this.$store.dispatch('updateMeetupData', {
      //   id: this.meetup.id,
      //   date: newDate
      // })
      // this.editDialog = false
      const date = new Date(this.editableDate)
      if (typeof this.editableTime === 'string') {
        const hours = this.editableTime.match(/^(\d+)/)[1]
        const minutes = this.editableTime.match(/:(\d+)/)[1]
        date.setHours(hours)
        date.setMinutes(minutes)
      } else {
        date.setHours(this.editableTime.getHours())
        date.setMinutes(this.editableTime.getMinutes())
      }
      this.$store.dispatch('updateMeetupData', {
        id: this.meetup.id,
        date: date
      })
      this.editDialog = false
    }
  },
  created () {
    let str = this.meetup.date
    let date = str.split('T')
    this.editableDate = date[0]
    let time = date[1].split('.')
    this.editableTime = time[0]
  }
}
</script>
