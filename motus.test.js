import { expect, test } from 'vitest'
import { motus } from './motus'

test('Cas 1 de démarrage: you win', () => {
  expect(motus(dictionnaire)).toBe("Vous avez gagné!")
})