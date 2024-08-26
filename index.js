#!/usr/bin/env node

const { Command } = require('commander')
const axios = require('axios')

const program = new Command()

program.arguments('<username>')
    .description("Based on username displays the recent activities of that user.")
    .action(username => {
        if (username != null && username != "") {
            const url = `https://api.github.com/users/${username}/events`
            axios.get(url)
                .then(t => {
                    console.log(t.data)
                    
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            console.log("Username can not be null.")
        }
    })

program.parse(process.argv)