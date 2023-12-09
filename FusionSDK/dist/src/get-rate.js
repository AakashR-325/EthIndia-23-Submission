"use strict";
// auth-key in sdk
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
exports.getQuote = void 0;
const fusion_sdk_1 = require("@1inch/fusion-sdk");
const sdk = new fusion_sdk_1.FusionSDK({
    url: 'https://api.1inch.dev/fusion',
    network: fusion_sdk_1.NetworkEnum.ETHEREUM,
});
function getQuote(from, to, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("getQuote Function is getting called");
        const params = {
            fromTokenAddress: from,
            toTokenAddress: to,
            amount: amount,
        };
        const quote = yield sdk.getQuote(params);
        // console.log(quote);
        return quote;
    });
}
exports.getQuote = getQuote;
