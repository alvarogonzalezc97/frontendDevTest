# Frontend Dev Test

Single Page Application for browsing and purchasing mobile devices.

## Tech Stack

**Frontend**
- React v19
- React Router v8
- SCSS Modules
- react-i18next

**Tooling**
- Vite v8
- ESLint
- Prettier

**Testing**
- Vitest
- Cypress

**Infrastructure**
- Docker
- Nginx

## Getting Started

### Clone repository

```
git clone https://github.com/alvarogonzalezc97/frontendDevTest.git
```
Move to the cloned project using
```
cd frontendDevTest
```

### Install dependencies

```
npm install
```

### Run in development mode

```
npm run dev
```

The app will be available at http://localhost:5173

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run test` | Run unit tests |
| `npm run lint` | Check code quality |
| `npm run format` | Format code with Prettier |

## Docker

### Build and run

```
docker-compose up -d
```

The app will be available at http://localhost:5173

You can check that the containers are running in Docker Desktop or using the following command

```
docker container ls -a
```
or alternatively

```
docker ps -a
```
### Stop

```
docker-compose down
```

## Testing

This project uses Vitest for unit testing and cypress for e2e testing.

### Run tests

To run all the tests

```
npm run test
```

To run only unit tests with vitest
```
npm run test:unit
```

To run only unit tests with vitest in watch mode
```
npm run test:watch
```

To run only e2e tests with cypress
```
npm run test:e2e
```
