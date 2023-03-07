### The task:

Build a service that fetches a specific public Github Repository of your choice every X minutes.

We want you to use the public Github API and map the response to our local `ObservedRepo` format and then store it in a local database.

Then create an API endpoint where you can query the observed repos from our database.

### Features implemented:

- Create a CRON job that runs every X minutes and triggers a service that iterates over all `ScheduledObservedRepo`
- This service should then query the official Github API for the details of a specific public Repo
- Map the response to our local `ObservedRepo`
- Store the result in a database
- API endpoint to GET `ObservedRepo` for a given `id`
- Add an additional endpoint to GET all `ObservedRepos` with query parameters and pagination

### Bonus Objectives:

- Build API key management to authenticate requests to our endpoints
- Write unit test, that cover the basic functionality of this API

### Data structure

`ObservedRepo`

```json
{
  "id": "73276f33-cffe-4bde-b64d-f5d62cd03f13",
  "url": "https://github.com/nestjs/nest",
  "status": "active",
  "owner": "nestjs",
  "name": "nest",
  "stars": 29,
  "openIssues": 12,
  "license": "mit",
  "createdAt": "2023-02-24T18:10:14.450Z",
  "updatedAt": "2023-02-24T18:10:14.450Z"
}
```

For the pagination you can follow something like

```json
{
	"next": "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  "previous": "cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ",
	"results": [
		{
			...
		}
	]
}
```

### Helpful

- The link for how to fetch a specific Github Repo can be found [here](https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#get-a-repository).
- Nestjs offers Cron job scheduling out of the box. See [here](https://docs.nestjs.com/techniques/task-scheduling).

### Tech Stack:

- Nestjs
- Postgres
- ORM of your choice
- Jest for testing
