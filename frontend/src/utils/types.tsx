export namespace  rs {
    export interface User{
        namd: string;
        alias: string;
        email: string;
        uuId: string;
        active: number;
        save_img: number;
    }
    export interface TrashKind{
        kind: string;
        way: string;
        created_at: string;
        updated_at: string;
    }

    export interface Trash{
        uploaded_trash_image_id: number;
        active: number;
        img: string;
        created_at: string;
        updated_at: string;
        user_id: string;
        trash_kind: TrashKind
    }
    export interface TrashList{
        content: Array<Trash>
    }
}