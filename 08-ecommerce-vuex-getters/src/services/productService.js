import axios from "axios";
// utilisation de JSON SERVER : npm run jsnsrv
let baseUrl = "http://localhost:3000";

export default {
  /////////////////////////////////////////////////////
  // requête Read :
  getProducts() {
    return axios.get(`${baseUrl}/products`);
  },
  /////////////////////////////////////////////////////
  // requête Create aux produits :
  createProduct(book) {
    return axios.post(`${baseUrl}/products`, book);
  },
  /////////////////////////////////////////////////////
  // Ajout du panier sur le local storage  :
  addToCart(product) {
    // (on ne créé pas la reject ici)
    return new Promise((resolve) => {
      let cartInLocalstorage = localStorage.getItem("vuex-commerce-cart");
      let cart = {};
      // si il n'y a rien dans "vuex-commerce-cart" :

      if (!cartInLocalstorage) {
        product.quantity = 1; // on créé une propriété quantity:
        cart = { products: [product] };
        // On enregistre dans le localStorage.On ne peut pas mettre d'objet, donc on le stringify :

        localStorage.setItem("vuex-commerce-cart", JSON.stringify(cart));
        resolve(cart);
      } else {
        // Si on a déjà un caddie :

        const products = JSON.parse(
          localStorage.getItem("vuex-commerce-cart")
        ).products;
        // On cherche le produit déjà présent dans le localStorage :

        const index = products.findIndex((p) => p.id === product.id);
        if (index === -1) {
          // si le produit n'est pas dans le caddie (index === -1)

          product.quantity = 1;
          cart = { products: [...products, product] };
        } else {
          // on a trouvé un produit :

          products[index].quantity += 1;
          cart = {
            products: [...products],
          };
        }
        // On écrase l'entrée avec l'objet qu'on stringify

        localStorage.setItem("vuex-commerce-cart", JSON.stringify(cart));
        resolve(cart);
      }
    });
  },
  removeOneFromCart(product) {
    return new Promise((resolve) => {
      const products = JSON.parse(
        localStorage.getItem("vuex-commerce-cart")
      ).products;
      const index = products.findIndex((p) => p.id === product.id);
      products[index].quantity -= 1;

      // supprime du cart si la nouvelle quantité est 0 :
      if (products[index].quantity === 0) {
        products.splice(index, 1);
      }

      const cart = {
        products: [...products],
      };
      localStorage.setItem("vuex-commerce-cart", JSON.stringify(cart));
      // On résout la prommesse :

      resolve(cart);
    });
  },
};
