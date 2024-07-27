import { http, HttpResponse } from 'msw'

export const handlers = [

    http.get('https://sw-api.starnavi.io/people/', (resolver) => {
        return HttpResponse.json([{results:[{
          id: 1, name: "Name", gender: 'Male', height: '180', birth_year: '2000'
        }]}])
      }),
    http.get('https://sw-api.starnavi.io/films/:id', (resolver) => {
        return HttpResponse.json([{id: 1, title: "Title"}])
      }),
    http.get('https://sw-api.starnavi.io/starships/:id', (resolver) => {
        return HttpResponse.json([{id: 1, name: "Name"}])
      })
]