import { expect, test } from 'vitest'
import { handleErrors } from './motus'

test('Cas 1: le paramètre est une chaine vide', () => {
  expect(handleErrors('')).toBe(false);
});

test('Cas 2: le paramètre contient un esspace', () => {
  expect(handleErrors(' ')).toBe(false);
})

test('Cas 3: le paramètre est nombre', () => {
  expect(handleErrors('123548')).toBe(false);
})

test('Cas 4: le paramètre est un long string', () => {
  expect(handleErrors('hhhhhhhhhhhhhhhhhhhhhhhhhhh')).toBe(false);
})