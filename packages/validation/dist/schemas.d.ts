import { z } from 'zod';
export declare const emotionCodes: readonly ["happy", "sad", "lonely", "fun", "angry", "scary", "amazing"];
export type EmotionCode = (typeof emotionCodes)[number];
export declare const createPostSchema: z.ZodObject<{
    whatPerson: z.ZodString;
    thoughts: z.ZodOptional<z.ZodString>;
    emotions: z.ZodArray<z.ZodEnum<{
        happy: "happy";
        sad: "sad";
        lonely: "lonely";
        fun: "fun";
        angry: "angry";
        scary: "scary";
        amazing: "amazing";
    }>>;
}, z.core.$strip>;
export declare const nicknameSchema: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
//# sourceMappingURL=schemas.d.ts.map