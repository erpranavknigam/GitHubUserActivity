# GitHub User Activity CLI

This CLI tool fetches and displays the recent activities of a GitHub user. It aggregates push events by repository to show the total count of commits.

### Project URL
[![Project Page](https://img.shields.io/badge/Project%20Page-Click%20Here-brightgreen)](https://roadmap.sh/projects/github-user-activity)


## Installation

To use this CLI tool, you need to have Node.js installed. Follow these steps to set up the project:

1. Clone the Repository
    1. `git clone https://github.com/erpranavknigam/GitHubUserActivity.git`
    2. `cd <repository-folder>`

2. Install Dependencies
    `npm install`

3. Make the CLI Tool Executable


To run the CLI commands globally, you need to link the project:
    `npm link`

This command will create a symbolic link in your system’s global package bin directory. Now you can use task-cli commands from anywhere.


## Features

1. Fetch Recent GitHub Activities:

2. Retrieves recent events for a specified GitHub user using the GitHub API.

### Event Aggregation:
1. Aggregates push events by repository, showing the total number of commits made to each repository.
Detailed Event Display:

2. Displays various types of events, including:
    * Push Events: Shows the total number of commits pushed to a repository.
    * Issue Events: Indicates actions performed on issues (e.g., opened, closed).
    * Watch Events: Shows repositories that have been starred.
    * Fork Events: Displays repositories that have been forked.
    * Create Events: Indicates new repositories or branches created.

3. Error Handling:
    Provides user-friendly error messages for cases such as non-existent GitHub users or issues with fetching data from the API.
Command-Line Interface:

Easy-to-use CLI tool that allows for quick and straightforward querying of user activities.
Customizable Output:

Formats output to clearly list activities, including aggregated push events and other types of interactions.
This CLI tool is designed to be simple yet powerful, providing a clear summary of a user’s recent GitHub activities and allowing for easy integration into other tools or workflows.

## Usage
To use the CLI tool, run the following command:
    ```
    github-activity <username>
    ```
github-activity: The command to invoke the CLI tool.
```<username>```: Replace this with the GitHub username whose recent activities you want to query.
