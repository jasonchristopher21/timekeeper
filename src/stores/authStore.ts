import { defineStore } from "pinia"

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        token: ""
    }),
    actions: {
        setToken(token: string) {
            this.token = token
            localStorage.setItem('token', token)
        },
        clearToken() {
            this.token = ""
            localStorage.removeItem('token')
        }
    },
    getters: {
        isAuthenticated() : boolean {
            return this.token === ""
        }
    }
})