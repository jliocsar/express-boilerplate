export const PORT = process.env.PORT ?? 3001

export const isUsingYarn = process.env.npm_execpath.includes('yarn')
export const isDev = process.env.NODE_ENV !== 'production'
