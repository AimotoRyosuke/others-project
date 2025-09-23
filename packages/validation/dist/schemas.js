"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nicknameSchema = exports.createPostSchema = exports.emotionCodes = void 0;
const zod_1 = require("zod");
exports.emotionCodes = [
    "happy",
    "sad",
    "lonely",
    "fun",
    "angry",
    "scary",
    "amazing",
];
const urlLike = /(https?:\/\/|www\.)\S+/i;
const emailLike = /\b\S+@\S+\.[\w.-]+\b/;
const phoneLike = /\b(?:\+?\d{1,3}[-.\s]?)?(?:\(?\d{2,4}\)?[-.\s]?)?\d{3,4}[-.\s]?\d{3,4}\b/;
exports.createPostSchema = zod_1.z.object({
    whatPerson: zod_1.z
        .string()
        .min(3, "3文字以上")
        .max(500, "500文字以内")
        .refine((v) => !urlLike.test(v), "URLは禁止です")
        .refine((v) => !emailLike.test(v), "メールは禁止です")
        .refine((v) => !phoneLike.test(v), "電話番号は禁止です"),
    thoughts: zod_1.z
        .string()
        .max(1000, "1000文字以内")
        .optional()
        .refine((v) => !v || !urlLike.test(v), "URLは禁止です"),
    emotions: zod_1.z.array(zod_1.z.enum(exports.emotionCodes)).min(1, "感情を1つ以上選択"),
});
exports.nicknameSchema = zod_1.z
    .string()
    .trim()
    .min(3, "3文字以上")
    .max(20, "20文字以内")
    .regex(/^[a-z][a-z0-9_.-]*$/, "英小文字で始まり、英数と_.-のみ")
    .transform((s) => s.toLowerCase());
