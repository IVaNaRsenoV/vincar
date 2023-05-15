declare module 'uuid' {
    export function v1(): string;
    export function v3(options?: unknown): string;
    export function v4(options?: unknown): string;
    export function v5(options?: unknown): string;
}
  