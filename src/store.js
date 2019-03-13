import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store  = new Vuex.Store({
  state: {
    loadedMeetups:[
      {imageUrl: 'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', title: 'Meetup in Nairobi', id :'githu',date:'2019-05-07', description:" Fire and blood. I pledge my life and honor to the Night's Watch, for this night and all the nights to come. The battle of the redgrass field. Pay the iron price. And now his watch is ended. The night is dark and full of terrors"  , location: 'Githurai' },

      {imageUrl: 'https://images.pexels.com/photos/599982/pexels-photo-599982.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', title: 'Meetup in Johannesburg', id :'sukari',date:'2019-07-05' , description:"Bastards are born of passion, aren't they? We don't despise them in Dorne. Winter is coming. A forked purple lightning bolt, on black field speckled with four-pointed stars. It is rare to meet a Lannister who shares my enthusiasm for dead Lannisters." , location: 'Githurai' },
      
      {imageUrl: 'https://images.pexels.com/photos/57409/ford-mustang-stallion-red-57409.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', title: 'Meetup in Kampala', id :'garden-city',date:'2019-08-25', description:"A dream of Spring. Our Sun Shines Bright. The War of the 5 kings. When you play the game of thrones, you win or you die. It's ten thousand miles between Kings landing and the wall. Dunc the Lunk, thick as a castle wall. When you play the game of thrones, you win or you die. A Lannister always pays his debts. House Tarly of Horn Hill The rains of castamere." , location: 'Githurai' },

      {imageUrl: 'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500', title: 'Meetup in Mombasa', id :'Allsopps', date:'2019-07-25' , description:"A good act does not wash out the bad, nor a bad act the good. Each should have its own reward. House Tarly of Horn Hill A Lannister always pays his debts. It is rare to meet a Lannister who shares my enthusiasm for dead Lannisters."  , location: 'Githurai'},

      
      {imageUrl: 'https://images.pexels.com/photos/2251/clouds-historical-time-tower.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500', title: 'Meetup in London', id :'Ngara',date:'2019-09-25' ,description:"More pigeon pie, please. The rains of castamere. The wolf and the lion. Winter is coming. The winds of Winter. As High as Honor."  , location: 'Githurai'}
    ],

    user: {
      id: 'roosters',
      registeredmeetups: 'Nairoberrye'
    }

  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
   createMeetup ({commit}, payload) {
     const meetup ={
       title: payload.title,
       location : payload.location,
       imageUrl : payload.imageUrl,
       description : payload.description,
       date : payload.date,
       id : 'sdjnfjjdjkmjfddf'
     }
    //  Reach out to firebase to store it
    commit ('createMeetup', meetup)
   }
  },

  getters:{
    // this sorts the meetups using their dates
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    
    //  this finds a specific meetup by its unique id
    loadedMeetup(state) {
      return (meetupId) => {
        console.log(meetupId);
        return state.loadedMeetups.find((meetup) =>{
          return meetup.id === meetupId
        })
      }
    },

    // this gets a subset of meetup to be showcased on the carousel
    featuredMeetups (state, getters) {
      return state.loadedMeetups.slice(0, 17)
    }
  }
})
 
