"use strict";
//auth key is left to be entered
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fusion_sdk_1 = require("@1inch/fusion-sdk");
const sdk = new fusion_sdk_1.FusionSDK({
    url: 'https://api.1inch.dev/fusion',
    network: fusion_sdk_1.NetworkEnum.ETHEREUM,
    authKey: 'your-auth-key'
});
function gettingOrders() {
    return __awaiter(this, void 0, void 0, function* () {
        const orders1 = yield sdk.getActiveOrders({ page: 1, limit: 2 });
        const orders2 = yield sdk.getOrdersByMaker({
            page: 1,
            limit: 2,
            address: "" // which address to use iin this 
        });
        console.log(orders1);
        console.log(orders2);
    });
}
