# Dashboard Application

A production-ready Next.js 14 dashboard application with TypeScript, SQLite, and authentication.

## Features

- Next.js 14 with App Router
- TypeScript with strict typing
- Tailwind CSS for styling
- NextAuth.js with mock authentication
- SQLite database with TypeORM
- Recharts for data visualization
- Dark/light mode toggle
- Responsive design
- Dockerized for deployment

## Getting Started

### Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

3. Run database migrations and seed:
   ```bash
   npm run db:migrate
   npm run db:seed
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Docker Deployment

The application includes a Dockerfile for containerized deployment with Coolify.

Build the Docker image:
```bash
docker build -t dashboard-app .
```

Run the container:
```bash
docker run -p 3000:3000 dashboard-app
```

## Environment Variables

See `.env.example` for required environment variables.

## Project Structure

- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - Reusable React components
- `src/entities/` - TypeORM entity definitions
- `src/lib/` - Utility functions and configurations
- `public/` - Static assets

## License

MIT