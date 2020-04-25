// @desc GET all transactions
// @route GET: /api/transactions
exports.getTransactions = (req, res, next) => {
    res.send('GET transactions')
}

// @desc Add all transactions
// @route POST: /api/transactions
exports.addTransactions = (req, res, next) => {
    res.send('POST transactions')
}

// @desc Delete all transactions
// @route DELETE: /api/transactions/:id
exports.deleteTransactions = (req, res, next) => {
    res.send('DELETE transactions')
}