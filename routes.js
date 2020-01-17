const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add({pattern: '/en/players/:id', page: 'detailPlayers'})
routes.add({pattern: '/pt/jogadores/:id', page: 'detailPlayers'})

routes.add({pattern: '/en/games/:id', page:'detailGames'})
routes.add({pattern: '/pt/jogos/:id', page:'detailGames'})

routes.add({pattern: '/en/teams/:id', page:'detailTeams'})
routes.add({pattern: '/pt/equipas/:id', page:'detailTeams'})

routes.add({pattern: '/en/players', page:'players'})         
routes.add({pattern: '/pt/jogadores', page:'players'})

routes.add({pattern: '/en/games', page:'games'})         
routes.add({pattern: '/pt/jogos', page:'games'})

routes.add({pattern: '/en/teams', page:'teams'})         
routes.add({pattern: '/pt/equipas', page:'teams'})