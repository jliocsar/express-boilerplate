import { spawn } from 'child_process'

import { isUsingYarn } from '~config/environment'

if (!isUsingYarn) {
  throw new Error('Please use Yarn to run this project')
}

export const runPrismaStudio = () => {
  spawn('yarn', ['studio'])
  console.info('Running Prisma Studio @ localhost:5555')
}
