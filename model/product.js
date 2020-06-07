class Product {
    constructor(id, title, logo, returns, risk, cap, nav, rating, fundSize, growth) {
        this.id = id;
        this.title = title,
        this.logo = logo,

        this.returns = returns, // 9.65% (3Y)
        this.risk = risk; // Moderatly High Risk
        this.cap = cap; // Multi Cap, LargeCap

        this.nav = nav; // 28.29
        this.rating = rating; // 5
        this.fundSize = fundSize; // 3987 Cr
        this.growth = growth;
    }
}

export default Product;