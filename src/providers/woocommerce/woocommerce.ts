import { Injectable } from '@angular/core';
import * as WC from 'woocommerce-api';


@Injectable()
export class WoocommerceProvider {

  Woocommerce: any;
  WoocommerceV2: any;

  constructor() {
    this.Woocommerce = WC({
      url: "https://www.fivedollarfit.com",
      consumerKey: "ck_b23612491e7d488964f545060b1dc4e0338385fc",
      consumerSecret: "cs_2f6b19de443ac7874d7fdb048b6edad4547cf9e1"
    });

    this.WoocommerceV2 = WC({
      url: "https://www.fivedollarfit.com",
      consumerKey: "ck_b23612491e7d488964f545060b1dc4e0338385fc",
      consumerSecret: "cs_2f6b19de443ac7874d7fdb048b6edad4547cf9e1",
      wpAPI: true,
      version: "wc/v2"
    });
  }

  init(v2?: boolean){
    if(v2 == true){
      return this.WoocommerceV2;
    } else {
      return this.Woocommerce;
    }
  }

}
