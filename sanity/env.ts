export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-29'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skNhivM2D2hrMbjMjTDIF4AgLHpVBFI7mZVCzFM9UqkN2RryzN2MfkmjrLzBZRQtEWIRpeOl33zrBbWKAW5tBSTpTIm6COXfgvxC68e0qLlofeFhvhimmvp8pDqOMelRmMOHOc5oOvoCkdWERVdAqaChcb93X9F6btGcVQvJcsqUSaMYGOuo",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
