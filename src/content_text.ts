export default class ContentText {
    private readonly text: string;
    private readonly block: boolean;
    private readonly delayTime: number;
    private readonly sameLine: boolean;

    constructor(text: string, block: boolean, delayTime: number, sameLine = false) {
        this.text = text;
        this.block = block;
        this.delayTime = delayTime;
        this.sameLine = sameLine;
    }

    public getText(): string {
        return this.text;
    }

    public isBlock(): boolean {
        return this.block;
    }

    public getDelayTime(): number {
        return this.delayTime;
    }
    public isSameLine(): boolean {
        return this.sameLine;
    }
}