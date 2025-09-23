import { z } from "zod";
export declare const emotionCodes: readonly ["happy", "sad", "lonely", "fun", "angry", "scary", "amazing"];
export type EmotionCode = (typeof emotionCodes)[number];
export declare const createPostSchema: z.ZodObject<{
    whatPerson: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>, string, string>;
    thoughts: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>;
    emotions: z.ZodArray<z.ZodEnum<["happy", "sad", "lonely", "fun", "angry", "scary", "amazing"]>, "many">;
}, "strip", z.ZodTypeAny, {
    whatPerson: string;
    emotions: ("happy" | "sad" | "lonely" | "fun" | "angry" | "scary" | "amazing")[];
    thoughts?: string | undefined;
}, {
    whatPerson: string;
    emotions: ("happy" | "sad" | "lonely" | "fun" | "angry" | "scary" | "amazing")[];
    thoughts?: string | undefined;
}>;
export declare const nicknameSchema: z.ZodEffects<z.ZodString, string, string>;
//# sourceMappingURL=schemas.d.ts.map