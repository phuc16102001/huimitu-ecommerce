import checkout from '#src/routes/checkout'
import account from '#src/routes/account'
import product from '#src/routes/product'
import category from '#src/routes/category'

export default {
    assignRoutes(app) {
        checkout.assignRoutes(app)
        account.assignRoutes(app)
        product.assignRoutes(app)
        category.assignRoutes(app)
    }
}