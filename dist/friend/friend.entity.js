"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Friend = void 0;
const typeorm_1 = require("typeorm");
const user_data_1 = require("../user-data");
let Friend = class Friend {
    logCreate() {
        console.log(`Created Friend for userId ${this.userId} friendId:${this.friend.userId}:`);
    }
    logUpdate() {
        console.log(`Updated Friend for userId ${this.userId} friendId:${this.friend.userId}:`);
    }
    logRemove() {
        console.log(`Removed Friend for userId ${this.userId} friendId:${this.friend.userId}:`);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Friend.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], Friend.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_data_1.UserData, { eager: true }),
    (0, typeorm_1.JoinColumn)({ referencedColumnName: 'userId' }),
    __metadata("design:type", user_data_1.UserData)
], Friend.prototype, "friend", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', default: 'WAITING_FOR_REMOTE_USER_APPROVAL' }),
    __metadata("design:type", String)
], Friend.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.AfterInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Friend.prototype, "logCreate", null);
__decorate([
    (0, typeorm_1.AfterUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Friend.prototype, "logUpdate", null);
__decorate([
    (0, typeorm_1.AfterRemove)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Friend.prototype, "logRemove", null);
Friend = __decorate([
    (0, typeorm_1.Entity)('friends')
], Friend);
exports.Friend = Friend;
//# sourceMappingURL=friend.entity.js.map