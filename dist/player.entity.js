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
exports.Player = void 0;
const typeorm_1 = require("typeorm");
const game_entity_1 = require("./game/game.entity");
const users_data_entity_1 = require("./users-data.entity");
let Player = class Player {
    logCreate() {
        console.log(`Created New Player userId : ${this.userId} for Game gameId : ${this.gameId}`);
    }
    logUpdate() {
        console.log(`Updated Player userId : ${this.userId} for Game gameId : ${this.gameId}`);
    }
    logRemove() {
        console.log(`Removed Player userId : ${this.userId} for Game gameId : ${this.gameId}`);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Player.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], Player.prototype, "gameId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => game_entity_1.Game, (game) => game.players),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", game_entity_1.Game)
], Player.prototype, "game", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], Player.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_data_entity_1.UserData, { eager: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", users_data_entity_1.UserData)
], Player.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'PENDING' }),
    __metadata("design:type", String)
], Player.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Player.prototype, "team", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Player.prototype, "round", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Player.prototype, "isAdmin", void 0);
__decorate([
    (0, typeorm_1.AfterInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Player.prototype, "logCreate", null);
__decorate([
    (0, typeorm_1.AfterUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Player.prototype, "logUpdate", null);
__decorate([
    (0, typeorm_1.AfterRemove)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Player.prototype, "logRemove", null);
Player = __decorate([
    (0, typeorm_1.Entity)('players'),
    (0, typeorm_1.Unique)(['user', 'game'])
], Player);
exports.Player = Player;
//# sourceMappingURL=player.entity.js.map