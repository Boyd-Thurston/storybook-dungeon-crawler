const { generateHash } = require('authenticare/server')

exports.seed = (knex) => {
  return knex('users').del()
    .then(() => Promise.all([
      generateHash('testy')
    ]))
    .then(([testuserHash]) =>
      knex('users').insert([
        { id: 1, username: 'testuser', hash: testuserHash }
      ])
    )
}