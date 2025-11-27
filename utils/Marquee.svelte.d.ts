export default Marquee;
type Marquee = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const Marquee: import("svelte").Component<{
    speed?: number;
    text: any;
}, {}, "">;
type $$ComponentProps = {
    speed?: number;
    text: any;
};
