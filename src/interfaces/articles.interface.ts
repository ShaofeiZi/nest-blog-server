export interface Artcles {
    readonly id?: number;
    readonly title: string;
    readonly content: string;
    readonly tag: string;
    readonly publish: boolean;
    readonly createTime: Date;
    readonly lastEditTime: Date;
    readonly versionKey: number;
}
