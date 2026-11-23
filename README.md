# Getting Started

Install project dependencies locally:

```bash
npm i
```

Run project:

```bash
npm run dev
```


# Structure and Implmentation

I used axios for the api calls and a service layer to manage different servies like user or products, here these is only products.
For the imcomplete add to cart functionlaity I would have used context or redux to add the product into the cart via slices.
I plan is to add the product to card as the api gives a success message for adding product to cart.
The api doesn't support pagination or could have added client side pagination for exploring products.