const assert = require('power-assert');
const QuizFetcher = require('../../src/QuizFetcher');

describe('QuizFetcherのクラス', () => {
  describe('fetchメソッドの挙動確認', () => {
    it('fetchのクラスメソッドを持つ', () => {
      assert.strictEqual(typeof QuizFetcher.fetch, 'function');
    });
  });

    it('[async/await]fetchの戻り地の型チェック', async () => {
      const data = await QuizFetcher.fetch();
      console.log('@@@@@@@@');
      const results = data.results;

      assert.strictEqual(Array.isArray(results), true);
      assert.strictEqual(results.length, 10);
      
    });
});
  //   results.forEach((quiz) => {
  //     assert.strictEqual(typeof quiz.category, 'string');
  //     assert.strictEqual(typeof quiz.type, 'string');
  //     assert.strictEqual(typeof quiz.difficulty, 'string');
  //     assert.strictEqual(typeof quiz.question, 'string');
  //     assert.strictEqual(typeof quiz.correct_answer, 'string');

  //     const incorrectAnswers = quiz.incorrect_answers;
  //     assert.strictEqual(Array.isArray(incorrectAnswers), true);
  //     assert.strictEqual(incorrectAnswers.length, 3);
  //     incorrectAnswers.forEach(answer => {
  //       assert.strictEqual(typeof answer, 'string');
  //     });
  //   });