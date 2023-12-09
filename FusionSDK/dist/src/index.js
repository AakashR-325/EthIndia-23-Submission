"use strict";
// put auth-key in sdk 
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
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const sdk = new fusion_sdk_1.FusionSDK({
            url: 'https://api.1inch.dev/fusion',
            network: fusion_sdk_1.NetworkEnum.ETHEREUM,
        });
        console.log("running ");
        const params = {
            fromTokenAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            toTokenAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            amount: '1000000000000000000000'
        };
        const quote = yield sdk.getQuote(params);
        console.log("=====================================");
        console.log(quote);
        console.log("=====================================");
    });
}
