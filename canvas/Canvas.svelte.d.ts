export default Canvas;
type Canvas = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const Canvas: import("svelte").Component<{
    settings: any;
    name: any;
    position?: Record<string, any>;
}, {}, "">;
type $$ComponentProps = {
    settings: any;
    name: any;
    position?: Record<string, any>;
};
