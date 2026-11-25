# Airtable Projects

A collection of practical projects that use Airtable as a data platform. Each project lives in its own folder and includes its source code, configuration, and instructions for running it.

## Repository structure

```text
airtable_projects/
├── projects/
│   └── <project-name>/
│       ├── frontend/ or app files
│       ├── backend/ or server files
│       └── README.md
└── README.md
```

Projects may use different languages and frameworks. Check each project's README for prerequisites, environment variables, and setup commands. Keep Airtable tokens and other credentials on the server; never expose them in browser code or commit them to the repository.

## Getting started

1. Choose a project under `projects/`.
2. Follow its README to configure Airtable and install dependencies.
3. Start the app using the commands provided by that project.

## Projects

- [airtable-api-crud-demo](projects/airtable-api-crud-demo/)

## Contributing

Keep each project self-contained, document its setup and configuration, and never commit private credentials or local `.env` files. Use `.env.example` files to describe required environment variables when needed.
