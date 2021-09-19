export const formatCelebrateError = body =>
  body.details.map(({ message }) => message)
