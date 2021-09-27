import { spawn } from 'child_process'

export const runPrismaStudio = () => {
  spawn('yarn', ['studio'])
  console.info('Running Prisma Studio @ localhost:5555')
}
