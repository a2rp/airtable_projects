# Airtable Contact Hub

A responsive full-stack contact manager built with React, Vite, Express, and Airtable. Create, view, update, and delete contacts while keeping Airtable credentials on the backend.

## Features

- Airtable-backed contact CRUD
- Contact status management
- Loading and empty states
- Responsive dashboard UI with React Icons
- Environment-based backend configuration

## Tech stack

React, Vite, Axios, styled-components, React Icons, Node.js, Express, and Airtable REST API.

## Run locally

Configure `backend/.env`:

```env
PORT=1198
AIRTABLE_TOKEN=your_token
AIRTABLE_BASE_ID=your_base_id
AIRTABLE_TABLE_NAME=Contacts
```

```bash
cd backend
npm install
npm run dev
```

In another terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend uses `VITE_API_URL` when provided and otherwise connects to `http://localhost:1198`.

## Deployment

Live frontend: [a2rp.github.io/airtable-api-crud-demo](https://a2rp.github.io/airtable-api-crud-demo/)

```bash
cd frontend
npm run build
npm run deploy
```

## Links

- Portfolio: [ashishranjan.net](https://www.ashishranjan.net)
- GitHub: [github.com/a2rp](https://github.com/a2rp)
- CodePen: [codepen.io/ash1198](https://codepen.io/ash1198)
- LinkedIn: [linkedin.com/in/aashishranjan](https://www.linkedin.com/in/aashishranjan)
- Facebook: [facebook.com/theash.ashish](https://www.facebook.com/theash.ashish/)
- YouTube: [youtube.com/@ashishranjan-ashz](https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1)
- Email: [ash.ranjan09@gmail.com](mailto:ash.ranjan09@gmail.com)

## Support

- [Support](https://a2rp-donation-page.netlify.app/)
- [Buy Me a Coffee](https://buymeacoffee.com/a2rp)
- [Patreon](https://patreon.com/a2rp)

## License

MIT License
