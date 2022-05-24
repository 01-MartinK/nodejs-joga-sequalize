const { test } = require('../controllers/article')

it('logs Hello', () => {
    const practice = sandbox.spy(getAllArticles())
    getAllArticles()
    if (!practice.calledOnce()) {
        throw new Error('Log was not called')
    }
})