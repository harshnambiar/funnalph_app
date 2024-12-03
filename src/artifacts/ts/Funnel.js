"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunnelInstance = exports.Funnel = void 0;
const web3_1 = require("@alephium/web3");
const Funnel_ral_json_1 = __importDefault(require("../Funnel.ral.json"));
const contracts_1 = require("./contracts");
const types_1 = require("./types");
const web3_2 = require("@alephium/web3");
class Factory extends web3_1.ContractFactory {
    constructor() {
        super(...arguments);
        this.eventIndex = { NewEntry: 0, NewRaffle: 1, NewReward: 2 };
        this.consts = {
            ErrorCodes: {
                SelfPay: BigInt("0"),
                AgentPay: BigInt("1"),
                DataMalfunction: BigInt("2"),
                LackOfBal: BigInt("3"),
                NoneEligible: BigInt("4"),
                RaffleLow: BigInt("5"),
                RewardLow: BigInt("6"),
                OngoingCycle: BigInt("7"),
            },
        };
        this.tests = {
            createEntry: async (params) => {
                return (0, web3_1.testMethod)(this, "createEntry", params, contracts_1.getContractByCodeHash);
            },
            raffleDist: async (params) => {
                return (0, web3_1.testMethod)(this, "raffleDist", params, contracts_1.getContractByCodeHash);
            },
            rewardDist: async (params) => {
                return (0, web3_1.testMethod)(this, "rewardDist", params, contracts_1.getContractByCodeHash);
            },
        };
    }
    encodeFields(fields) {
        return (0, web3_1.encodeContractFields)((0, web3_1.addStdIdToFields)(this.contract, fields), this.contract.fieldsSig, types_1.AllStructs);
    }
    at(address) {
        return new FunnelInstance(address);
    }
    stateForTest(initFields, asset, address, maps) {
        return this.stateForTest_(initFields, asset, address, maps);
    }
}
// Use this object to test and deploy the contract
exports.Funnel = new Factory(web3_1.Contract.fromJson(Funnel_ral_json_1.default, "=5-2+12=2+20=1-2=2-2+d7=13-1+4=10+7e011452756e6e696e672043726561746520456e747279=326+7a7e0214696e73657274206174206d617020706174683a2000=171-1+b=10+7e011b52756e6e696e6720526166666c6520446973747269627574696f6e=351-1+d=10+7e011b52756e6e696e672052657761726420446973747269627574696f6e=344", "612d476619aa26305050d8c6d20f4f3c6a90c9312c8ec6f28b4d7701ea02f429", types_1.AllStructs));
(0, contracts_1.registerContract)(exports.Funnel);
// Use this class to interact with the blockchain
class FunnelInstance extends web3_1.ContractInstance {
    constructor(address) {
        super(address);
        this.maps = {
            entries: new web3_2.RalphMap(exports.Funnel.contract, this.contractId, "entries"),
        };
        this.view = {
            createEntry: async (params) => {
                return (0, web3_1.callMethod)(exports.Funnel, this, "createEntry", params, contracts_1.getContractByCodeHash);
            },
            raffleDist: async (params) => {
                return (0, web3_1.callMethod)(exports.Funnel, this, "raffleDist", params === undefined ? {} : params, contracts_1.getContractByCodeHash);
            },
            rewardDist: async (params) => {
                return (0, web3_1.callMethod)(exports.Funnel, this, "rewardDist", params === undefined ? {} : params, contracts_1.getContractByCodeHash);
            },
        };
        this.transact = {
            createEntry: async (params) => {
                return (0, web3_1.signExecuteMethod)(exports.Funnel, this, "createEntry", params);
            },
            raffleDist: async (params) => {
                return (0, web3_1.signExecuteMethod)(exports.Funnel, this, "raffleDist", params);
            },
            rewardDist: async (params) => {
                return (0, web3_1.signExecuteMethod)(exports.Funnel, this, "rewardDist", params);
            },
        };
    }
    async fetchState() {
        return (0, web3_1.fetchContractState)(exports.Funnel, this);
    }
    async getContractEventsCurrentCount() {
        return (0, web3_1.getContractEventsCurrentCount)(this.address);
    }
    subscribeNewEntryEvent(options, fromCount) {
        return (0, web3_1.subscribeContractEvent)(exports.Funnel.contract, this, options, "NewEntry", fromCount);
    }
    subscribeNewRaffleEvent(options, fromCount) {
        return (0, web3_1.subscribeContractEvent)(exports.Funnel.contract, this, options, "NewRaffle", fromCount);
    }
    subscribeNewRewardEvent(options, fromCount) {
        return (0, web3_1.subscribeContractEvent)(exports.Funnel.contract, this, options, "NewReward", fromCount);
    }
    subscribeAllEvents(options, fromCount) {
        return (0, web3_1.subscribeContractEvents)(exports.Funnel.contract, this, options, fromCount);
    }
}
exports.FunnelInstance = FunnelInstance;
