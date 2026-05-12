export const FORMSPREE_URL = 'https://formspree.io/f/mnjwwzan'

export async function submitToFormspree(formData: FormData): Promise<void> {
  const res = await fetch(FORMSPREE_URL, {
    method: 'POST',
    body: formData,
    headers: { Accept: 'application/json' },
  })
  if (!res.ok) {
    const data = await res.json().catch(() => null)
    const msg =
      data?.errors?.map((e: { message?: string }) => e.message).join(', ') ||
      'Une erreur est survenue. Veuillez réessayer.'
    throw new Error(msg)
  }
}
