"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponRouter = void 0;
const express_1 = require("express");
const CouponController_1 = require("../../controller/admin/CouponController");
const catchAsync_1 = require("../../utils/catchAsync");
exports.CouponRouter = (0, express_1.Router)();
exports.CouponRouter.get('/', (0, catchAsync_1.catchAsync)(CouponController_1.view));
exports.CouponRouter.post('/add', (0, catchAsync_1.catchAsync)(CouponController_1.create));
exports.CouponRouter.put('/update/:id', (0, catchAsync_1.catchAsync)(CouponController_1.modify));
exports.CouponRouter.get('/delete_item/:id', (0, catchAsync_1.catchAsync)(CouponController_1.delete_item));
// Export the CouponRouter to be used in the main app
exports.default = exports.CouponRouter;
