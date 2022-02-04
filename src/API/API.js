export const getCategories = fetch("http://localhost:4000", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    query: `
          query {
             category {
                 name
                 products {
                    id
                    name
                    inStock
                    gallery
                    description
                    category
                    attributes {
                      id
                      name
                      type
                      items {
                        displayValue
                        id
                        value
                      }
                    }
                    prices {
                      currency {
                        label
                        symbol
                      }
                      amount
                    }
                    brand
                  }
             } 
          }
            `,
  }),
});
