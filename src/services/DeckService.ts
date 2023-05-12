import { API_URL } from "../constants"

export async function getAllDecks() {
    const response = await fetch(API_URL + '/decks/', {
        method: 'GET',
        headers: {},
        mode: 'cors',
    });
    return await response.json();
}

export async function createDeck(data : any) {
    const response = await fetch(API_URL + '/decks/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}