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
                    if (t.data.length === 0) {
                        console.log("No recent activity found.");
                        return;
                    }

                    // Map to store commit counts per repository
                    const commitCounts = new Map();
                    const actions = [];

                    t.data.forEach(event => {
                        let action;
                        switch (event.type) {
                            case "PushEvent":
                                const repoName = event.repo.name;
                                const commitCount = event.payload.commits.length;

                                // Update commit count for the repository
                                if (commitCounts.has(repoName)) {
                                    commitCounts.set(repoName, commitCounts.get(repoName) + commitCount);
                                } else {
                                    commitCounts.set(repoName, commitCount);
                                }
                                break;
                            case "IssuesEvent":
                                action = `${event.payload.action.charAt(0).toUpperCase() + event.payload.action.slice(1)} an issue in ${event.repo.name}`;
                                actions.push(action);
                                break;
                            case "WatchEvent":
                                action = `Starred ${event.repo.name}`;
                                actions.push(action);
                                break;
                            case "ForkEvent":
                                action = `Forked ${event.repo.name}`;
                                actions.push(action);
                                break;
                            case "CreateEvent":
                                action = `Created ${event.payload.ref_type} in ${event.repo.name}`;
                                actions.push(action);
                                break;
                            default:
                                action = `${event.type.replace("Event", "")} in ${event.repo.name}`;
                                actions.push(action);
                                break;
                        }
                    });

                    // Add aggregated push event actions
                    commitCounts.forEach((count, repo) => {
                        actions.push(`Pushed ${count} commit(s) to ${repo}`);
                    });

                    // Print all actions
                    console.log("Output: ")
                    actions.forEach(action => {
                        console.log(`- ${action}`);
                    });
                })
                .catch(err => {
                    if (err.status == 404) {
                        console.log("User Not Found")
                    } else {
                        console.log("Error Fetching Data: ", err.status)
                    }
                })
        } else {
            console.log("Username can not be null.")
        }
    })

program.parse(process.argv)