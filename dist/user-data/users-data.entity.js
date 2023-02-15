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
exports.UserData = void 0;
const typeorm_1 = require("typeorm");
const game_entity_1 = require("../game/game.entity");
let UserData = class UserData {
    logCreate() {
        console.log('Created User with id:', this.id);
    }
    logUpdate() {
        console.log('Updated User with id:', this.id);
    }
    logRemove() {
        console.log('Removed User with id:', this.id);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UserData.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], UserData.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], UserData.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], UserData.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', default: 'email' }),
    __metadata("design:type", String)
], UserData.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', default: '0' }),
    __metadata("design:type", String)
], UserData.prototype, "vaultAccountId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'number', default: 0 }),
    __metadata("design:type", Number)
], UserData.prototype, "wins", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true, nullable: true }),
    __metadata("design:type", String)
], UserData.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => game_entity_1.Game, { nullable: true, eager: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", game_entity_1.Game)
], UserData.prototype, "activeGame", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], UserData.prototype, "profilePic", void 0);
__decorate([
    (0, typeorm_1.AfterInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserData.prototype, "logCreate", null);
__decorate([
    (0, typeorm_1.AfterUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserData.prototype, "logUpdate", null);
__decorate([
    (0, typeorm_1.AfterRemove)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserData.prototype, "logRemove", null);
UserData = __decorate([
    (0, typeorm_1.Entity)('users-data'),
    (0, typeorm_1.Unique)(['email', 'provider', 'userId'])
], UserData);
exports.UserData = UserData;
//# sourceMappingURL=users-data.entity.js.map