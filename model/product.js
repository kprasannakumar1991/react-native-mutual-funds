class Product {
    constructor(id, title, logo, returns, risk, cap, nav, rating, fundSize, growth1, growth2, growth3, growth4) {
        this.id = id;
        this.title = title,
        this.logo = logo,

        this.returns = returns, // 9.65% (3Y)
        this.risk = risk; // Moderatly High Risk
        this.cap = cap; // Multi Cap, LargeCap

        this.nav = nav; // 28.29
        this.rating = rating; // 5
        this.fundSize = fundSize; // 3987 Cr

        this.growth1 = growth1;
        this.growth2 = growth2;
        this.growth3 = growth3;
        this.growth4 = growth4;

    }
}

export default Product;