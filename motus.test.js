import { expect, test } from 'vitest'
import { compareWords } from './motus'

test('Cas 1 de démarrage: you win', () => {
  expect(compareWords(dictionnaire)).toBe("Vous avez gagné!")
})