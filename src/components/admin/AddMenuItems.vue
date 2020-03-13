<template>
  <v-container>
    <v-row>
      <v-col offset-md="1" md="5">
        <h1>Left</h1>
        <div class="pa-2" id="info">
          <v-text-field label="Name Of Item" required v-model="name"></v-text-field>
          <v-text-field label="Description" required v-model="description"></v-text-field>
          <v-text-field label="Price" required v-model="price"></v-text-field>
          <v-btn color="light-green" text @click="addNewItem">Add Item</v-btn>
          <v-btn color="red" text>Cancel</v-btn>
        </div>
      </v-col>
      <v-col offset-md="1" md="4">
        <h1>Right</h1>
        <v-simple-table id="menu-table">
          <thead>
            <tr>
              <th class="text-left" style="width: 70%;">Name</th>
              <th class="text-left" style="width: 100%;">Price £</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span id="td_name">{{ name }}</span>
                <br />
                <span id="menu_items_description">{{ description }}</span>
              </td>
              <td id="preview_item_price">{{ price }}</td>
            </tr>
          </tbody>
        </v-simple-table>
        <div class="pa-2" id="info"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { dbMenuAdd } from "../../../Firebase/firebase";
export default {
  data() {
    return {
      name: "",
      description: "",
      price: ""
    };
  },
  methods: {
    addNewItem() {
      dbMenuAdd.add({
        name: this.name,
        description: this.description,
        price: this.price
      });
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