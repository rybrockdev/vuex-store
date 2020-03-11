<template>
  <v-container>
    <v-row>
      <v-col offset-md="1" md="5">
        <h1>Menu Items</h1>
        <div class="pa-2" id="info">
          <v-simple-table id="menu_table">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left" style="width: 70%;">Name of Item</th>
                  <th class="text-left" style="width: 100px;">Price</th>
                  <th class="text-left" style="width: 100px;">Add To Basket</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in menuItems" :key="item.name">
                  <td>
                    <span id="td_name">{{ item.name }}</span>
                    <br />
                    <span id="menu_item_description">{{ item.description }}</span>
                  </td>
                  <td>{{ item.price }}</td>
                  <td>
                    <v-btn small text @click="addToBasket(item)">
                      <v-icon color="orange">add_box</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </v-col>
      <v-col offset-md="1" md="4">
        <h1>Basket</h1>
        <div class="pa-2" id="info">
          <v-simple-table id="menu_table" v-if="basket.length > 0">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left" style="width: 30%;">Quantity</th>
                  <th class="text-left" style="width: 50%;">Nmae Of Item</th>
                  <th class="text-left" style="width: 20%;">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in basket" :key="item.name">
                  <td>
                    <v-icon color="orange" @click="increaseQty(item)">add_box</v-icon>
                    {{ item.quantity }}
                    <v-icon color="orange" @click="decreaseQty(item)">indeterminate_check_box</v-icon>

                    <br />
                  </td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.price}}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-simple-table v-else>
            <p>The Basket Is Empty</p>
          </v-simple-table>
          <v-divider></v-divider>
          <v-row id="basket_checkout" class="mt-4" style="margin: 0;">
            <v-col>
              <p>Sub Total:</p>
              <p>Delivery:</p>
              <p>Total amount:</p>
            </v-col>
            <v-col class="text-right">
              <p>£100</p>
              <p>£10</p>
              <p>
                <b>£120</b>
              </p>
            </v-col>
          </v-row>
          <v-row style="margin: 0;">
            <v-spacer></v-spacer>
            <v-btn color="orange">Checkout</v-btn>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      basket: [],
      menuItems: [
        {
          name: "Frozen Yogurt",
          description: "blaah blah bla blh blaaaa",
          price: 159
        },
        {
          name: "Ice cream sandwich",
          description: "blaah blah bla blh blaaaa",
          price: 237
        },
        {
          name: "Eclair",
          description: "blaah blah bla blh blaaaa",
          price: 262
        },
        {
          name: "Cupcake",
          description: "blaah blah bla blh blaaaa",
          price: 305
        },
        {
          name: "Gingerbread",
          description: "blaah blah bla blh blaaaa",
          price: 356
        }
      ]
    };
  },
  methods: {
    addToBasket(item) {
      this.basket.push({
        name: item.name,
        price: item.price,
        quantity: 1
      });
    },
    increaseQty(item) {
      item.quantity++;
    },
    decreaseQty(item) {
      item.quantity--;
      if (item.quantity === 0) {
        this.basket.splice(this.basket.indexOf(item), 1);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  @include infobox_mixin(2px, #7a7676, 10px, 2px, #7a7676);
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
  text-align: center;
  background-color: #f5f5f5;
}
#info {
  background-color: #fff;
}

tr th {
  font-weight: 300;
}
#td_name {
  font-weight: bold;
}

tr td {
  padding: 10px 10px 10px 16px;
}
#menu_items_description {
  font-style: italic !important;
  font-weight: 300;
  color: #474949;
  font-size: 13px;
}
#basket_checkout {
  font-size: 13px;
}
#basket_checkout p:first-child {
  line-height: 4px;
}
</style>