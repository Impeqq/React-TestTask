const func = (s, a, b) => Math.max(s.lastIndexOf(a), s.lastIndexOf(b))

// Функция возвращает индекс последнего вхождения a или b в строку s.
// Если s - undefiend, то функция возвращает ошибку.