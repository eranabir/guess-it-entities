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
exports.GameRequest = void 0;
const typeorm_1 = require("typeorm");
const user_data_1 = require("../user-data");
const game_1 = require("../game");
let GameRequest = class GameRequest {
    logCreate() {
        console.log(`Created New Game Request fromId : ${this.fromId} toId : ${this.toId}`);
    }
    logUpdate() {
        console.log(`Updated Game Request fromId : ${this.fromId} toId : ${this.toId}`);
    }
    logRemove() {
        console.log(`Removed Game Request fromId : ${this.fromId} toId : ${this.toId}`);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], GameRequest.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], GameRequest.prototype, "toId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_data_1.UserData),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_data_1.UserData)
], GameRequest.prototype, "to", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], GameRequest.prototype, "fromId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_data_1.UserData),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_data_1.UserData)
], GameRequest.prototype, "from", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], GameRequest.prototype, "gameId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => game_1.Game),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", game_1.Game)
], GameRequest.prototype, "game", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'PENDING' }),
    __metadata("design:type", String)
], GameRequest.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], GameRequest.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.AfterInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GameRequest.prototype, "logCreate", null);
__decorate([
    (0, typeorm_1.AfterUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GameRequest.prototype, "logUpdate", null);
__decorate([
    (0, typeorm_1.AfterRemove)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GameRequest.prototype, "logRemove", null);
GameRequest = __decorate([
    (0, typeorm_1.Entity)('games_requests'),
    (0, typeorm_1.Unique)(['from', 'to', 'game'])
], GameRequest);
exports.GameRequest = GameRequest;
//# sourceMappingURL=game-request.entity.js.map