import * as livroResource from '@/modules/imovel/imovel.resource';

export function fetchLivros() {
  return new Promise((resolve, reject) =>
    livroResource
      .fetchLivros()
      .then(({ data }) => {
        resolve({
          data,
        });
      })
      .catch(err => reject(err)));
}

export function getLivro(livroId) {
  return new Promise((resolve, reject) =>
    livroResource
      .getLivro(livroId)
      .then(({ data }) => {
        if (!data) {
          reject(new Error('not_found'));
        }
        resolve({ data });
      })
      .catch(err => reject(err)));
}

export function saveLivro(livro) {
  const errors = null;
  return new Promise((resolve, reject) =>
    (errors ? reject(errors) : getLivroSaveAction(livro)(livro)
      .then(({ data }) => resolve(data))
      .catch(err => reject(err))));
}

export function removeLivro(livro) {
  return new Promise((resolve, reject) =>
    livroResource
      .removeLivro(livro.id)
      .then(() => {
        resolve();
      })
      .catch(err => {
        reject(err);
      }));
}

function getLivroSaveAction(livro) {
  return livro.id ? livroResource.updateLivro : livroResource.createLivro;
}
