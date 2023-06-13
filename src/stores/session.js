import { defineStore } from 'pinia'
import axios from 'axios'

export const useSessionStore = defineStore('session', {
    state: () => ({
        token : '',
        user : {
            id : null,
            mail : '',
            prenom : '',
            nom : '',
            adresse : '',
            numero : null,
            panier : [],
            totalPanier : 0
        },
        livres : []
    }),
    actions : {
        setToken(t){
            this.token = t
        },



        addLivre(livre){
            this.user.totalPanier += livre.prix * livre.quantite
        },

        setMail(e){
            this.user.mail = e
        },
        setId(i){
            this.user.id = i
        },
        setPrenom(n){
            this.user.prenom = n
        },
        setNom(n){
            this.user.nom = n
        },
        setAdresse(a){
            this.user.adresse = a
        },
        setNumero(n){
            this.user.numero = n
        },

        getMail(){
            return this.user.mail
        },
        getId(){
            return this.user.id
        },
        getPrenom(){
            return this.user.prenom
        },
        getNom(){
            return this.user.nom
        },
        getToken(){
            return this.token
        }
    },
    persist : true
    // state
    // getters
    // actions
})